import React from 'react';
import UploadForm from '../components/UploadForm';
import QuestionList from '../components/QuestionList';

const Upload: React.FC = () => {
    return (
        <div className="upload-page">
            <h1>Upload Exam Questions</h1>
            <UploadForm />
            <QuestionList />
        </div>
    );
};

export default Upload;