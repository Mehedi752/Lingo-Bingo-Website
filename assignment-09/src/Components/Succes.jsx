import React from "react";
import CountUp from "react-countup";
import { FaUser, FaBookOpen, FaLanguage, FaVideo } from "react-icons/fa";

const Success = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* User Count */}
          <div className="text-center bg-white p-6 shadow-lg shadow-black rounded-lg">
            <FaUser className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700">Users</h3>
            <p className="text-4xl font-bold text-blue-900">
              <CountUp start={0} end={1500} duration={2.5} />
            </p>
          </div>

          {/* Lesson Count */}
          <div className="text-center bg-white p-6 shadow-lg shadow-black rounded-lg">
            <FaBookOpen className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700">Lessons</h3>
            <p className="text-4xl font-bold text-blue-900">
              <CountUp start={0} end={50} duration={2.5} />
            </p>
          </div>

          {/* Vocabulary Count */}
          <div className="text-center bg-white p-6 shadow-lg shadow-black rounded-lg">
            <FaLanguage className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700">Vocabularies</h3>
            <p className="text-4xl font-bold text-blue-900">
              <CountUp start={0} end={2000} duration={2.5} />
            </p>
          </div>

          {/* Tutorial Count */}
          <div className="text-center bg-white p-6 shadow-lg shadow-black rounded-lg">
            <FaVideo className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700">Tutorials</h3>
            <p className="text-4xl font-bold text-blue-900">
              <CountUp start={0} end={100} duration={2.5} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
