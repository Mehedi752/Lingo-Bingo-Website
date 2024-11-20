// bg-[#E7C1D3]
// bg-[#A4DAC3]
// bg-[#EFDA6E]
// bg-[#77AAEA]

import { useNavigate } from "react-router-dom";

const Lessons = () => {

    const navigate = useNavigate();

    const handleBoxClick = (lesson_no) => {
        navigate(`lesson/${lesson_no}`);
    };


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[...Array(10)].map((_, index) => (
                <div
                    key={index}
                    className="p-5 border mx-auto md:mx-0 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-xl h-[100px] w-[200px]
            flex justify-center items-center"
                    onClick={() => handleBoxClick(index + 1)}
                >
                    <h3 className="font-medium text-lg text-black">Lesson {index + 1}</h3>
                </div>
            ))}
        </div>
    );
};

export default Lessons;