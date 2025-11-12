import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AuthModal = ({ isOpen, onRequestClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle authentication logic here
        console.log(isLogin ? 'Logging in' : 'Signing up', { email, password });
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Authentication Modal">
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                <button type="button" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                </button>
            </form>
        </Modal>
    );
};

export default AuthModal;