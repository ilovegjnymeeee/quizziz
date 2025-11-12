import React, { useEffect, useState } from 'react';
import { getQuestions } from '../services/api';
import { Question } from '../types';

const QuestionList: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const data = await getQuestions();
                setQuestions(data);
            } catch (err) {
                setError('Failed to load questions');
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    if (loading) {
        return <div>Loading questions...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Uploaded Questions</h2>
            <ul>
                {questions.map((question) => (
                    <li key={question.id}>
                        <h3>{question.title}</h3>
                        <p>{question.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionList;