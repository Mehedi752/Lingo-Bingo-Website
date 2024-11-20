import { Outlet } from "react-router-dom";
import About from "./About";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Snowfall from 'react-snowfall';

const MainRoot = () => {
    return (
        <div className="bg-[#126C4D]">
            <Snowfall snowflakeCount={100} />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainRoot;