import { Request, Response } from 'express';
import { Question } from '../models/question.model';
import { questionService } from '../services/questionService';

// Function to upload a new question
export const uploadQuestion = async (req: Request, res: Response) => {
    try {
        const questionData = req.body;
        const newQuestion = await questionService.createQuestion(questionData);
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(500).json({ message: 'Error uploading question', error });
    }
};

// Function to get all questions
export const getAllQuestions = async (req: Request, res: Response) => {
    try {
        const questions = await questionService.getAllQuestions();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving questions', error });
    }
};

// Function to delete a question by ID
export const deleteQuestion = async (req: Request, res: Response) => {
    try {
        const questionId = req.params.id;
        await questionService.deleteQuestion(questionId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting question', error });
    }
};