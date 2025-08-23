import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Arvind Bhatt. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <FiGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/arvind-bhatt-5b7537129/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <FiLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:email@example.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <FiMail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
