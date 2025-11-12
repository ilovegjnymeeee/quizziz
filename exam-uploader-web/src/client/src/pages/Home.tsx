import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have a CSS file for styling

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Exam Uploader</h1>
            <p>Your one-stop solution for uploading and managing exam questions.</p>
            <div className="home-buttons">
                <Link to="/upload" className="btn">Upload Questions</Link>
                <Link to="/dashboard" className="btn">View Dashboard</Link>
                <Link to="/settings" className="btn">Settings</Link>
            </div>
        </div>
    );
};

export default Home;