import React, { useState } from 'react';

const UploadForm: React.FC = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctOption, setCorrectOption] = useState(0);
    const [error, setError] = useState('');

    const handleOptionChange = (index: number, value: string) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!question || options.some(option => !option)) {
            setError('Please fill in all fields.');
            return;
        }
        setError('');

        const payload = {
            question,
            options,
            correctOption,
        };

        try {
            const response = await fetch('/api/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Failed to upload question');
            }

            // Reset form after successful upload
            setQuestion('');
            setOptions(['', '', '', '']);
            setCorrectOption(0);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Upload Exam Question</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Question:</label>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
            </div>
            {options.map((option, index) => (
                <div key={index}>
                    <label>Option {index + 1}:</label>
                    <input
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        required
                    />
                </div>
            ))}
            <div>
                <label>Correct Option:</label>
                <select
                    value={correctOption}
                    onChange={(e) => setCorrectOption(Number(e.target.value))}
                >
                    {options.map((_, index) => (
                        <option key={index} value={index}>
                            Option {index + 1}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Upload Question</button>
        </form>
    );
};

export default UploadForm;