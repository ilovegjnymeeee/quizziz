import { Router } from 'express';
import { uploadQuestion, getQuestions } from '../controllers/questionsController';

const router = Router();

// Route to upload a new question
router.post('/upload', uploadQuestion);

// Route to get all uploaded questions
router.get('/', getQuestions);

export default router;