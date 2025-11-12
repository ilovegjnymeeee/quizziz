export interface Question {
    id: string;
    title: string;
    content: string;
    options: string[];
    correctAnswer: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UploadResponse {
    success: boolean;
    message: string;
    questionId?: string;
}

export interface AuthResponse {
    success: boolean;
    token?: string;
    user?: User;
}