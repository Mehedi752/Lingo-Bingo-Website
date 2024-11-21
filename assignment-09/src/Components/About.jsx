// bg-[#E7C1D3]
// bg-[#A4DAC3]
// bg-[#EFDA6E]
// bg-[#77AAEA]

import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
    const location = useLocation();
    //console.log(location.pathname);
    return (
            location.pathname === "/about" ? (
                <div className="">
                    <Navbar className="bg-[#126C4D]"></Navbar>
                    <div className="my-10 container mx-auto lg:px-[200px]">
                        <div className=" bg-[#A4DAC3] p-10 flex flex-col gap-5 rounded-xl">
                            <h3 className="font-bold">Your Guide To The German Learning Jungle!</h3>
                            <p className="">Welcome to GermanLang.com, a site that helps people discover how to learn German Language best. We hope you find something here that will encourage, inspire,
                                and perhaps challenge you in your German learning. In this website you will find activities to help you learn the meaning, pronunciation and spelling of new words. Learning vocabulary will help you improve your language level and communicate in English confidently and effectively. The pages are organised by topic
                                and include interactive exercises to help you learn and remember the new words.</p>
                            <Link to={'/learning'} className="btn btn-neutral bg-gradient-to-r from-cyan-500 to-blue-500 border-none w-[200px]">Let's Learn</Link>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            ) : (
                <div className="my-10 container mx-auto lg:px-[200px]">
                    <div className=" bg-[#A4DAC3] p-10 flex flex-col gap-5 rounded-xl">
                        <h3 className="font-bold">Your Guide To The German Learning Jungle!</h3>
                        <p className="">Welcome to GermanLang.com, a site that helps people discover how to learn German Language best. We hope you find something here that will encourage, inspire,
                            and perhaps challenge you in your German learning. In this website you will find activities to help you learn the meaning, pronunciation and spelling of new words. Learning vocabulary will help you improve your language level and communicate in English confidently and effectively. The pages are organised by topic
                            and include interactive exercises to help you learn and remember the new words.</p>
                        <Link to={'/learning'} className="btn btn-neutral bg-gradient-to-r from-cyan-500 to-blue-500  border-none text-white w-[200px]">Let's Learn</Link>
                    </div>
                </div>
            )
        );
};

export default About;