import React from 'react';
import { ContainerScroll } from './ui/container-scroll-animation';
import { Code2, Server, Database, Terminal, Cpu, Users, Brain, MessageSquare } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    skills: ['JavaScript', 'PHP', 'Python', 'HTML', 'CSS', 'SQL', 'MongoDB']
  },
  {
    title: 'Frameworks',
    icon: <Server className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    skills: ['React', 'CodeIgniter', 'Laravel', 'Node.js', 'Django', 'Angular']
  },
  {
    title: 'Tools & Technologies',
    icon: <Database className="w-8 h-8 text-green-600 dark:text-green-400" />,
    skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Azure', 'AI', 'Machine Learning', 'NLP']
  },
  {
    title: 'Development',
    icon: <Terminal className="w-8 h-8 text-red-600 dark:text-red-400" />,
    skills: ['RESTful APIs', 'GraphQL', 'Microservices', 'Test-Driven Development']
  },
  {
    title: 'Infrastructure',
    icon: <Cpu className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
    skills: ['Cloud Computing', 'DevOps', 'System Architecture', 'Performance Optimization']
  },
  {
    title: 'Leadership',
    icon: <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    skills: ['Team Management', 'Mentoring', 'Agile Methodologies', 'Project Planning']
  },
  {
    title: 'Problem Solving',
    icon: <Brain className="w-8 h-8 text-pink-600 dark:text-pink-400" />,
    skills: ['Analytical Thinking', 'Critical Reasoning', 'Innovation', 'Decision Making']
  },
  {
    title: 'Soft Skills',
    icon: <MessageSquare className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
    skills: ['Communication', 'Collaboration', 'Time Management', 'Adaptability']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-900">
      <ContainerScroll
        titleComponent={
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
};

export default Skills;