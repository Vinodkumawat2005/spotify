import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-center py-12 px-6">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 mb-6">
            We are a team of passionate developers committed to delivering high-quality solutions.
            Our goal is to create amazing products that solve real-world problems and enhance the user experience.
          </p>

          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-500">Lead Developer</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">David Johnson</h3>
              <p className="text-gray-500">Product Manager</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white text-center py-6">
          <p className="text-sm">&copy; 2025 Company Name. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link
              to="/facebook"
              className="text-white hover:text-gray-400"
            >
              Facebook
            </Link>
            <Link
              to="/twitter"
              className="text-white hover:text-gray-400"
            >
              Twitter
            </Link>
            <Link
              to="/linkedin"
              className="text-white hover:text-gray-400"
            >
              LinkedIn
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
