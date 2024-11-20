import Footer from "./Footer";
import Lessons from "./Lessons";
import Navbar from "./Navbar";
import Tutorial from "./Tutorial";
import Snowfall from 'react-snowfall';

const Learning = () => {
    return (
        <div className="">
            <Snowfall snowflakeCount={100} />
            <Navbar></Navbar>
            <div className="container mx-auto px-5 lg:px-0">
                <div className="text-center my-8">
                    <h1 className="text-4xl font-bold text-blue-800">Let’s Learn!</h1>
                    <p className="text-lg text-black mt-2">Explore your lessons and start learning now.</p>

                </div>

                <Lessons></Lessons>
                <Tutorial></Tutorial>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Learning;