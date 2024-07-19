
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-500 text-white py-6 mt-8 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold">TaskFlow</span>. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/memedjjebri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300 flex items-center"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-jebri-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300 flex items-center"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
