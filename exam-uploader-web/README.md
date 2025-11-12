# Exam Uploader Web Project

## Overview
The Exam Uploader Web project is a web application designed to facilitate the uploading and management of exam questions. It provides a user-friendly interface for educators and administrators to submit, view, and organize exam questions efficiently.

## Features
- **User Authentication**: Secure login and registration for users to manage their questions.
- **Upload Exam Questions**: A dedicated form for users to upload questions in various formats.
- **Question List**: A comprehensive list displaying all uploaded questions with options to edit or delete.
- **Dashboard**: An overview of uploaded questions and user statistics.
- **Settings Page**: Allows users to configure their preferences and account settings.
- **Responsive Design**: The application is designed to be mobile-friendly and accessible on various devices.

## Project Structure
```
exam-uploader-web
├── src
│   ├── client
│   │   ├── public
│   │   │   └── index.html
│   │   ├── src
│   │   │   ├── main.tsx
│   │   │   ├── App.tsx
│   │   │   ├── components
│   │   │   │   ├── UploadForm.tsx
│   │   │   │   ├── QuestionList.tsx
│   │   │   │   ├── Dashboard.tsx
│   │   │   │   └── AuthModal.tsx
│   │   │   ├── pages
│   │   │   │   ├── Home.tsx
│   │   │   │   ├── Upload.tsx
│   │   │   │   └── Settings.tsx
│   │   │   ├── services
│   │   │   │   └── api.ts
│   │   │   ├── hooks
│   │   │   │   └── useAuth.ts
│   │   │   └── types
│   │   │       └── index.ts
│   │   └── package.json
│   ├── server
│   │   ├── src
│   │   │   ├── index.ts
│   │   │   ├── controllers
│   │   │   │   └── questionsController.ts
│   │   │   ├── routes
│   │   │   │   └── questionsRoutes.ts
│   │   │   ├── services
│   │   │   │   ├── storageService.ts
│   │   │   │   └── questionService.ts
│   │   │   ├── models
│   │   │   │   └── question.model.ts
│   │   │   ├── middleware
│   │   │   │   └── auth.ts
│   │   │   └── types
│   │   │       └── index.ts
│   │   └── package.json
│   └── shared
│       └── types
│           └── index.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Getting Started
To get started with the project, follow these steps:

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd exam-uploader-web
   ```

2. **Install Dependencies**:
   - For the client:
     ```
     cd src/client
     npm install
     ```
   - For the server:
     ```
     cd ../server
     npm install
     ```

3. **Run the Application**:
   - Start the server:
     ```
     cd src/server
     npm start
     ```
   - Start the client:
     ```
     cd src/client
     npm start
     ```

4. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.