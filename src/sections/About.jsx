import SectionContainer from '../components/SectionContainer';

const About = () => {
  return (
    <SectionContainer id="about" title="About Me" className="bg-white dark:bg-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="dashboard-card h-full flex items-center">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Hello, I'm Arvind!</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate software developer with a strong foundation in web technologies and application development.
              With a commitment to creating clean, efficient, and user-friendly solutions, I enjoy tackling complex
              problems and turning ideas into reality.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My technical journey spans multiple domains including front-end development, back-end systems, and cloud infrastructure.
              I'm particularly enthusiastic about creating accessible, performant web applications that provide exceptional user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and continuously expanding my knowledge in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
        
        <div className="dashboard-card h-full">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">My Focus Areas</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Front-end Development</h4>
                <p className="mt-1 text-gray-600 dark:text-gray-400">Creating responsive, accessible, and performant user interfaces with modern frameworks.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Back-end Systems</h4>
                <p className="mt-1 text-gray-600 dark:text-gray-400">Building robust, scalable APIs and server-side applications.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Cloud Infrastructure</h4>
                <p className="mt-1 text-gray-600 dark:text-gray-400">Deploying and managing applications in cloud environments with modern DevOps practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
