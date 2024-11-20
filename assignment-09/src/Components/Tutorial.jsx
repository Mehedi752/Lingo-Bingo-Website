import { Link } from "react-router-dom";
const Tutorial = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="border-2 w-full lg:w-[500px] p-5 shadow-2xl rounded-xl flex flex-col justify-center mx-auto shadow-black">
        <h2 className="text-4xl text-center font-bold text-blue-800 mb-2">Tutorial Section</h2>
        <p className="text-lg text-center text-black">See some videos to gain some basic knowledge about German Language.</p>
        <div className="mt-5 flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XEGITixasIs?si=W5SsxjPndsXeT_-e" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="text-center mt-6">
          <Link to="/tutorials" className="btn bg-[#2bf52e] bg-gradient-to-r rounded-none shadow-black border-none from-cyan-500 to-blue-500  text-black font-medium">
            View More
          </Link>
        </div>
      </div>
    </div>

  );
};

export default Tutorial;