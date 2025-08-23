import SectionContainer from '../components/SectionContainer';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Software Developer',
      company: 'Company Name',
      period: 'Jan 2021 - Present',
      location: 'City, Country',
      description: [
        'Led the development of a key product feature that increased user engagement by 30%.',
        'Collaborated with cross-functional teams to implement and deploy new features.',
        'Mentored junior developers and conducted code reviews to ensure high-quality standards.',
        'Implemented CI/CD pipelines that reduced deployment time by 40%.'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS']
    },
    {
      id: 2,
      role: 'Software Developer',
      company: 'Previous Company',
      period: 'Jun 2018 - Dec 2020',
      location: 'City, Country',
      description: [
        'Developed and maintained multiple web applications using React and Angular.',
        'Implemented RESTful APIs and database architectures.',
        'Participated in agile development processes including daily stand-ups and sprint planning.',
        'Optimized application performance resulting in a 25% improvement in loading time.'
      ],
      technologies: ['Angular', 'JavaScript', 'Python', 'Docker']
    },
    {
      id: 3,
      role: 'Junior Developer',
      company: 'First Company',
      period: 'Feb 2016 - May 2018',
      location: 'City, Country',
      description: [
        'Assisted in the development of web applications using JavaScript and PHP.',
        'Created responsive designs using CSS frameworks.',
        'Participated in bug fixing and feature implementation.',
        'Conducted testing and documentation for various projects.'
      ],
      technologies: ['JavaScript', 'PHP', 'CSS', 'MySQL']
    }
  ];

  return (
    <SectionContainer id="experience" title="Experience" className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline connector line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative z-10 flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{exp.id}</span>
                </div>
                
                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <div className="dashboard-card hover:shadow-lg transition-shadow">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">{exp.company}</h4>
                    <p className="text-gray-600 dark:text-gray-400 italic mb-4">{exp.location}</p>
                    
                    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Experience;
