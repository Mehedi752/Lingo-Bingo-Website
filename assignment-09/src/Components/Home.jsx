import About from "./About";
import Banner from "./Banner";
import Faq from "./Faq";
import Success from "./Succes";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <Success></Success>
            <Testimonials></Testimonials>
            <Faq></Faq>
        </div>
    );
};

export default Home;