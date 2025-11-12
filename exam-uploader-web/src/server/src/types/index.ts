export interface Question {
    id: string;
    title: string;
    content: string;
    options: string[];
    correctAnswer: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UploadResponse {
    success: boolean;
    message: string;
    question?: Question;
}

export interface AuthUser {
    id: string;
    username: string;
    email: string;
    role: 'admin' | 'user';
}

export interface AuthResponse {
    success: boolean;
    message: string;
    user?: AuthUser;
}