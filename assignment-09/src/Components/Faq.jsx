import { useState } from "react";

const faqs = [
    {
        id: 1,
        question: "How do I start a lesson?",
        answer: "To start a lesson, click on the 'Start Lesson' button on the homepage and select a lesson to begin.",
    },
    {
        id: 2,
        question: "Can I update my profile information?",
        answer: "Yes, go to your profile page and click on the update button to modify your name or photo.",
    },
    {
        id: 3,
        question: "Is this platform free to use?",
        answer: "Yes, our platform is completely free for learners of all levels.",
    },
];

const FAQ = () => {
    const [open, setOpen] = useState(null);

    const toggleFAQ = (id) => {
        setOpen(open === id ? null : id);
    };

    return (
        <section
            className="bg-gradient-to-r from-indigo-100 to-blue-50 py-12"
        >
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
                Frequently Asked Questions
            </h2>
            <div className="max-w-5xl mx-auto space-y-4 px-4">
                {faqs.map(({ id, question, answer }) => (
                    <div
                        key={id}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md p-6 rounded-lg hover:bg-blue-50 transition cursor-pointer"
                        onClick={() => toggleFAQ(id)}
                    >
                        <h3 className="text-lg font-semibold text-black flex justify-between items-center">
                            {question}
                            <span
                                className={`text-black ${
                                    open === id ? "rotate-180" : "rotate-0"
                                } transition-transform`}
                            >
                                ▼
                            </span>
                        </h3>
                        {open === id && (
                            <p className="mt-2 text-black">{answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
