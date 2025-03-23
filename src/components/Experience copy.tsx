import React from 'react';
import { Timeline } from './ui/Timeline';

const Experience = () => {
  const projectsData = [
    {
      title: "2024",
      content: (
        <div>
          <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 font-heading">Team Lead - ITOI Technologies</h4>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-4 font-body">
            Leading a team of 5 developers, improving project efficiency by 30%, and implementing best coding practices.
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Reduced critical bugs by 45% through rigorous code reviews</li>
            <li>Mentored junior developers, boosting productivity by 35%</li>
            <li>Implemented best practices and coding standards</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Software Developer - ITOI Technologies</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-4">
            Developed and integrated APIs, focusing on PHP development and full-stack projects.
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Worked on full-stack projects with optimized performance</li>
            <li>Developed problem-solving and leadership skills</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="bg-white dark:bg-gray-900">
      <Timeline data={projectsData} />
    </section>
  );
};

export default Experience;
