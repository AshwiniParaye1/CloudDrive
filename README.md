# Cloud Drive

A modern storage management and file-sharing platform built with Next.js 15 and Appwrite. Upload, organize, and share files effortlessly with a clean, responsive interface.

## Features

- **Secure Authentication**: User authentication powered by Appwrite
- **Comprehensive File Management**: Upload, view, rename, and delete files seamlessly
- **Seamless File Sharing**: Easily share files with other users
- **Interactive Dashboard**: Monitor storage usage and recent activities
- **Advanced Search**: Quickly find files with a global search functionality
- **Smart Organization**: Sort files by date, name, or size
- **Responsive Design**: Modern UI optimized for all devices

## Tech Stack

- **React 19**: Interactive and efficient UI development
- **Next.js 15**: Production-ready framework with SSR and API routes
- **Appwrite**: Backend-as-a-Service for authentication, database, and storage
- **TailwindCSS**: Utility-first styling for fast and flexible design
- **ShadCN**: Accessible and customizable UI component library
- **TypeScript**: Ensures code reliability with static typing

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JavaScript-Mastery-Pro/storage_management_solution.git
   cd storage_management_solution
   ```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:
   Create a `.env.local` file in the root directory with the following:

```bash

NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=""
NEXT_PUBLIC_APPWRITE_DATABASE=""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
NEXT_APPWRITE_KEY=""

```

4. Set up Appwrite:

```bash
- Create a new project in the Appwrite Console
- Configure authentication methods
- Create a storage bucket for file uploads
- Create database collections for user data
- Update environment variables with Appwrite credentials
```

5. Start the development server:

```bash
npm run dev
```

6. Open `http://localhost:3000` in your browser to access the application.

```bash
npm run dev
```

### Thank you for checking out Cloud Drive! If you have any questions or feedback, feel free to reach out.

Happy coding! 🚀

Connect with me on [LinkedIn](https://www.linkedin.com/in/ashwini-paraye/).
