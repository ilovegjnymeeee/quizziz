import React from 'react';
import { Link } from 'react-router-dom';
import QuestionList from './QuestionList';
import UploadForm from './UploadForm';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Exam Questions Dashboard</h1>
            <Link to="/upload" className="btn btn-primary">Upload New Questions</Link>
            <h2>Uploaded Questions</h2>
            <QuestionList />
            <h2>Statistics</h2>
            <div className="statistics">
                {/* Placeholder for user statistics */}
                <p>Total Questions Uploaded: {/* Fetch and display total count */}</p>
                <p>Most Recent Upload: {/* Fetch and display recent upload info */}</p>
            </div>
            <UploadForm />
        </div>
    );
};

export default Dashboard;