import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Tutorials = () => {
    const navigate = useNavigate();

    const videos = [
        "https://www.youtube.com/embed/ZPj5MO4_yDc",
        "https://www.youtube.com/embed/E01ICB0ecvk",
        "https://www.youtube.com/embed/YS9CMpEy3YY",
        "https://www.youtube.com/embed/orWw1hWNsmo",
        "https://www.youtube.com/embed/2Y4hdDj66ME",
        "https://www.youtube.com/embed/rD8x9ydyEzw",
        "https://www.youtube.com/embed/W7jbaQvGwS4",
        "https://www.youtube.com/embed/ubJCeDU2Qzs",
        "https://www.youtube.com/embed/Ef0LYpst5sg",
        "https://www.youtube.com/embed/GvRx4-5BWUc",
        "https://www.youtube.com/embed/EpFX69cqn44",
        "https://www.youtube.com/embed/Qh0w5z59WPg",
    ];

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="p-8 bg-gray-100 min-h-screen">

                <div className="my-12">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        Learn the Language - Tutorials
                    </h1>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {videos.map((video, index) => (
                            <div className="border-2 p-3 md:p-6 mx-auto shadow-2xl shadow-black flex flex-col justify-center items-center gap-3 rounded-xl border-none bg-[#a4dab3]">
                                <div key={index} className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        src={video}
                                        title={`Tutorial Video ${index + 1}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="rounded-lg shadow-lg"
                                    ></iframe>
                                </div>

                                <h3 className="text-xl font-bold text-black">Learn German Language</h3>
                                <p className="text-balck font-medium">Session - {index + 1}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={() => navigate("/learning")}
                            className="px-6 py-3 btn btn-neutral rounded-none text-white border-none bg-gradient-to-r from-cyan-500 to-blue-500 shadow-black"
                        >
                            Learn Vocabularies
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Tutorials;
