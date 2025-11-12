import { Question } from '../models/question.model';
import { StorageService } from './storageService';

export class QuestionService {
    private storageService: StorageService;

    constructor() {
        this.storageService = new StorageService();
    }

    async uploadQuestion(questionData: Question): Promise<Question> {
        // Logic to validate and upload the question
        const savedQuestion = await this.storageService.saveQuestion(questionData);
        return savedQuestion;
    }

    async getQuestions(): Promise<Question[]> {
        // Logic to retrieve all questions
        const questions = await this.storageService.getAllQuestions();
        return questions;
    }

    async deleteQuestion(questionId: string): Promise<void> {
        // Logic to delete a question by ID
        await this.storageService.deleteQuestionById(questionId);
    }
}