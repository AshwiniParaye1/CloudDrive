"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { appwriteConfig } from "../appwrite/config";
import { parseStringify } from "../utils";
import { cookies } from "next/headers";

const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient();

  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("email", [email])]
  );

  return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
  console.log(error, message);

  throw error;
};

export const sendEmailOTP = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailToken(ID.unique(), email);

    return session.userId;
  } catch (error) {
    handleError(error, "Failed to send email OTP");
  }
};

export const createAccount = async ({
  fullName,
  email
}: {
  fullName: string;
  email: string;
}) => {
  const existingUser = await getUserByEmail(email);

  const accoundId = await sendEmailOTP({ email });

  if (!accoundId) throw new Error("Failed to send OTP");

  if (!existingUser) {
    const { databases } = await createAdminClient();

    await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        email,
        fullName,
        avatar:
          "https://www.google.com/imgres?q=avatar%20placeholder&imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F08%2F08%2F09%2F17%2Favatar-1577909_960_720.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fvectors%2Favatar-icon-placeholder-facebook-1577909%2F&docid=cyPowwVV5ZV6IM&tbnid=x3mZLbZEUtS7xM&vet=12ahUKEwj1juav6OKJAxWNUGwGHbRdM9YQM3oECGUQAA..i&w=720&h=720&hcb=2&ved=2ahUKEwj1juav6OKJAxWNUGwGHbRdM9YQM3oECGUQAA",
        accountId: accoundId
      }
    );
  }

  return parseStringify({ accoundId });
};

export const verifySecret = async ({
  accountId,
  password
}: {
  accountId: string;
  password: string;
}) => {
  try {
    const { account } = await createAdminClient();

    const session = await account.createSession(accountId, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true
    });

    return parseStringify({ sessionId: session.$id });
  } catch (error) {
    handleError(error, "Failed to verify OTP");
  }
};
