import React from "react";

const Modal = ({ word, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                <h2 className="text-xl font-bold mb-4">{word.word}</h2>
                <p className="mb-2"><strong className="font-semibold">Meaning:</strong> {word.meaning}.</p>
                <p className="mb-2"><strong className="font-semibold">When to Say:</strong> {word.when_to_say}</p>
                <p className="mb-4"><strong className="font-semibold">Example:</strong> {word.example}</p>
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none text-white"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
