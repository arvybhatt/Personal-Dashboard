import SectionContainer from '../components/SectionContainer';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'GraphQL', level: 70 },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Firebase', level: 70 },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Jest', level: 80 },
      ]
    }
  ];

  return (
    <SectionContainer id="skills" title="Skills & Expertise" className="bg-white dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="dashboard-card">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{category.title}</h3>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="h-2.5 rounded-full bg-blue-600" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">Additional Skills</h3>
        
        <div className="flex flex-wrap justify-center gap-3">
          {['Redux', 'SASS', 'Material UI', 'Webpack', 'Responsive Design', 'UI/UX', 'Agile', 'Scrum', 'Accessibility', 'Performance Optimization', 'SEO', 'WebSockets', 'Authentication', 'OAuth'].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skills;
