import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // To navigate and retrieve email from the login page
import { sendPasswordResetEmail } from "firebase/auth"; // Firebase authentication methods
import auth from '../../public/firebase.config';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();


    // If the email was passed from the login page, prefill the email field
    useEffect(() => {
        if (location.state) {
            setEmail(location.state);
        }
    }, [location.state]);
    console.log(email);

    const handleSubmit = async (event) => {
        event.preventDefault();

        sendPasswordResetEmail(auth, email)
            .then((result) => {
                setMessage('Password reset email sent successfully!');
            })
            .catch((error) => {
                setMessage(error.message);
            });
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
            <div className="p-8 bg-white rounded-lg shadow-lg max-w-lg w-full">
                <h1 className="text-3xl font-bold text-blue-600">Forgot Password</h1>
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-left text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Reset Password
                    </button>
                    {message && <p className="mt-4 text-red-500">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;