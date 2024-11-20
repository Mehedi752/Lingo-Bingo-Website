import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom to navigate to the home page

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
            <div className="p-8 bg-white rounded-lg shadow-2xl shadow-black max-w-lg w-full">
                <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Sorry, the page you're looking for doesn't exist.
                </p>
                <Link to="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
