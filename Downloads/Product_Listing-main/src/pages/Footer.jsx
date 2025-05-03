import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Logo or Brand */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white">Apex Solutions Group.</h2>
            <p className="text-gray-400 mt-2">Your tagline or mission here.</p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-0">
            <div>
              <h3 className="font-semibold text-lg text-white">Quick Links</h3>
              <ul className="mt-2 text-gray-400">
                <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
                <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-white">Follow Us</h3>
              <ul className="mt-2 text-gray-400">
                <li><a href="https://www.facebook.com" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.twitter.com" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.linkedin.com" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-lg text-white">Subscribe to Our Newsletter</h3>
            <div className="mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md w-64 text-gray-800 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 text-white p-2 rounded-md ml-2">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">&copy; 2025 Apex Solutions Group.. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
