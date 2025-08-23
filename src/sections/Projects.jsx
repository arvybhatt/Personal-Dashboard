import SectionContainer from '../components/SectionContainer';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaboration with real-time updates.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
      link: '#',
      github: '#'
    },
    {
      title: 'Portfolio Dashboard',
      description: 'A responsive personal portfolio website with a dashboard-style UI to showcase professional experience and projects.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      link: '#',
      github: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'A weather application that provides current conditions and forecasts based on geolocation or user search.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['JavaScript', 'OpenWeather API', 'CSS3'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <SectionContainer id="projects" title="Projects" className="bg-gray-50 dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="dashboard-card overflow-hidden group">
            {/* Project image */}
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 space-x-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm inline-block"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm inline-block"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project details */}
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            
            {/* Technologies used */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
