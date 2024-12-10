import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-black-800 text-white py-10">
      <div className="container mx-auto text-center">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="font-semibold mb-2">Questions? Contact us</p>
            <p>FAQ</p>
            <p>Privacy</p>
            <p>Help Center</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Jobs</p>
            <p>Job Opportunities</p>
            <p>Account</p>
            <p>Ways to Watch</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Corporate Information</p>
            <p>Corporate Info</p>
            <p>Media Center</p>
            <p>Terms of Use</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Contact</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <FaFacebook size={24}  />
          <FaTwitter size={24}  />
          <FaGithub size={24}  />
          <FaLinkedin size={24}  />
        </div>

        <div>
          <a href="#" className="text-sm hover:text-gray-400 mx-3">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-gray-400 mx-3">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
