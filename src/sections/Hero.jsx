import { FiLinkedin, FiGithub, FiMail, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Profile image */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              {/* Replace with your profile picture */}
              <img
                src="https://via.placeholder.com/400x400" 
                alt="Arvind Bhatt"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Text content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Arvind Bhatt
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6">
              Software Developer
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Passionate developer creating engaging user experiences and robust applications.
              Skilled in modern web technologies with a focus on solving complex problems.
            </p>
            
            {/* Social links & resume button */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/arvind-bhatt-5b7537129/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                <FiLinkedin /> LinkedIn
              </a>
              <a 
                href="https://github.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <FiGithub /> GitHub
              </a>
              <a 
                href="mailto:email@example.com"
                className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
              >
                <FiMail /> Contact Me
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                <FiDownload /> Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="currentColor" 
            className="text-white dark:text-gray-800"
            fillOpacity="1" 
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,53.3C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
