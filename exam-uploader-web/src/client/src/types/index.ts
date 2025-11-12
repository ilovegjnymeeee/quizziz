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
    questionId?: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
}

export interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}