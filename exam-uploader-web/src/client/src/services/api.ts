import axios from 'axios';

const API_URL = 'http://localhost:5000/api/questions';

export const uploadQuestion = async (questionData) => {
    try {
        const response = await axios.post(API_URL, questionData);
        return response.data;
    } catch (error) {
        throw new Error('Error uploading question: ' + error.message);
    }
};

export const fetchQuestions = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching questions: ' + error.message);
    }
};