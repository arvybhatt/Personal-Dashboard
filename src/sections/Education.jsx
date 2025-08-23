import SectionContainer from '../components/SectionContainer';

const Education = () => {
  const educationList = [
    {
      degree: 'Master of Computer Science',
      institution: 'University Name',
      period: '2014 - 2016',
      location: 'City, Country',
      description: 'Specialized in Software Engineering with a focus on application development and algorithms. Graduated with honors.',
      achievements: [
        'GPA: 3.9/4.0',
        'Research Assistant in Web Technologies Lab',
        'Published paper on Efficient Web Application Architectures'
      ]
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'University Name',
      period: '2010 - 2014',
      location: 'City, Country',
      description: 'Comprehensive program covering fundamental computer science principles, data structures, and programming languages.',
      achievements: [
        'GPA: 3.8/4.0',
        'Dean\'s List for all semesters',
        'Led the university web development team'
      ]
    }
  ];
  
  const certifications = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: 'Apr 2023',
      link: '#'
    },
    {
      name: 'Professional React Developer',
      issuer: 'React Training Organization',
      date: 'Jan 2023',
      link: '#'
    },
    {
      name: 'Advanced JavaScript Concepts',
      issuer: 'JavaScript Academy',
      date: 'Sep 2022',
      link: '#'
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'Web Development Institute',
      date: 'May 2022',
      link: '#'
    }
  ];

  return (
    <SectionContainer id="education" title="Education & Certifications" className="bg-white dark:bg-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Academic Background</h3>
          
          <div className="space-y-8">
            {educationList.map((edu, index) => (
              <div key={index} className="dashboard-card">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {edu.period}
                  </span>
                </div>
                
                <h5 className="text-md font-medium text-blue-600 dark:text-blue-400">{edu.institution}</h5>
                <p className="text-gray-600 dark:text-gray-400 italic mb-4">{edu.location}</p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">{edu.description}</p>
                
                <div className="mt-4">
                  <h6 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h6>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Professional Certifications</h3>
          
          <div className="dashboard-card">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {certifications.map((cert, index) => (
                <li key={index} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">{cert.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                  </div>
                  <div className="mt-2">
                    <a 
                      href={cert.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm inline-flex items-center"
                    >
                      View Certificate
                      <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Additional Education Information */}
          <div className="dashboard-card mt-8">
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Continuous Learning</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm committed to ongoing professional development and regularly participate in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Online courses on platforms like Coursera, Udemy, and Pluralsight</li>
              <li>Technical workshops and conferences</li>
              <li>Industry meetups and developer communities</li>
              <li>Hackathons and coding challenges</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Education;
