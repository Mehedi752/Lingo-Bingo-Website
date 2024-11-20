import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";

const LessonDetails = () => {
    const { lesson_no } = useParams();
    console.log(lesson_no);
    // const location = useLocation();
    // console.log(location);
    const [vocabularies, setVocabularies] = useState([]);
    const navigate = useNavigate();
    const [selectedWord, setSelectedWord] = useState(null);

    const openModal = (word) => {
        setSelectedWord(word);
    };

    const closeModal = () => {
        setSelectedWord(null);
    };

    useEffect(() => {
        const fetchVocabulary = async () => {
            try {
                const response = await fetch("../../public/vocabulary_dataset.json");
                const data = await response.json();
                setVocabularies(data);
            } catch (error) {
                console.error("Error fetching vocabulary:", error);
            }
        };

        fetchVocabulary();
    }, []);

    const handlePronounce = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US'; // Set the language for pronunciation
        speechSynthesis.speak(utterance);
    };

    const filteredVocabularies = vocabularies.filter((vocab) => vocab.lesson_no === parseInt(lesson_no));
    console.log(filteredVocabularies.length);

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="p-4 container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Lesson {lesson_no}</h2>

                <div className="flex justify-end items-center gap-5 mb-5">
                    <div className="flex gap-2 items-center">
                        <div className="bg-gradient-to-r from-[#DFF6FF] to-[#ACF6E9] h-5 w-5"></div>
                        <span className="font-medium">Easy</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="bg-gradient-to-r from-[#FFD580] to-[#FF9F45] h-5 w-5"></div>
                        <span className="font-medium">Medium</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="bg-gradient-to-r from-[#FF7F7F] to-[#FF3F3F] h-5 w-5"></div>
                        <span className="font-medium">Hard</span>
                    </div>
                </div>
                {filteredVocabularies.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {filteredVocabularies.map((vocabulary) => (
                            <div
                                key={vocabulary.id}
                                className={`p-4 rounded-lg shadow-2xl shadow-black ${vocabulary.difficulty === "easy"
                                    ? "bg-gradient-to-r from-[#DFF6FF] to-[#ACF6E9]"
                                    : vocabulary.difficulty === "medium"
                                        ? "bg-gradient-to-r from-[#FFD580] to-[#FF9F45]" : "bg-gradient-to-r from-[#FF7F7F] to-[#FF3F3F]"
                                    }`}
                            >
                                <h3 className="text-xl font-bold mb-4">{vocabulary.word}</h3>
                                <p className="mb-2">
                                    <strong>Meaning:</strong> {vocabulary.meaning}
                                </p>
                                <p className="mb-2">
                                    <strong>Pronunciation:</strong> {vocabulary.pronunciation}
                                </p>
                                <p className="mb-4">
                                    <strong>Part of Speech:</strong> {vocabulary.part_of_speech}
                                </p>

                                <div className="flex items-center justify-between mt-5">
                                    <button
                                        onClick={() => { openModal(vocabulary); handlePronounce(vocabulary.word); }}
                                        className="px-4 py-2 btn bg-gradient-to-r from-cyan-500 to-blue-500  text-white rounded-none  border-none"
                                    >
                                        When to Say
                                    </button>


                                    <button
                                        onClick={() => navigate("/learning")}
                                        className="px-4 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 btn text-white rounded-none border-none"
                                    >
                                        Back to Lesson
                                    </button>
                                </div>

                            </div>
                        ))}

                        {/* Modal */}
                        {selectedWord && (
                            <Modal
                                word={selectedWord}
                                onClose={closeModal}
                            />
                        )}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No vocabularies found for this lesson.</p>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LessonDetails;
