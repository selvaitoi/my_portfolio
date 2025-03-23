import React from 'react';
import { PinContainer } from './ui/3d-pin';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Teledoctor Platform",
      description: "Built a telemedicine platform enabling 200+ daily virtual consultations with integrated payment gateways.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
      stats: {
        transactions: "98%",
        consultations: "200+"
      },
      tech: ['React', 'Node.js'],
      href: "https://example.com/teledoctor"
    },
    {
      title: "Heart Disease Prediction",
      description: "ML model with 92% accuracy for heart disease prediction using NLP for health data processing.",
      image: "https://images.unsplash.com/photo-1576670159805-381a0aa9c8bf?w=800&h=400&fit=crop",
      stats: {
        accuracy: "92%",
        engagement: "40%"
      },
      tech: ['Python', 'Machine Learning', 'NLP'],
      href: "https://example.com/heart-prediction"
    },
    {
      title: "Career Journey",
      description: "Career guidance web app with optimized frontend and backend performance.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
      stats: {
        performance: "35%",
        users: "10K+"
      },
      tech: ['JavaScript', 'React', 'Node.js'],
      href: "https://example.com/career-journey"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {projects.map((project, index) => (
            <div key={index} className="h-[400px] flex items-center justify-center">
              <PinContainer title={project.title} href={project.href}>
                <div className="flex flex-col p-4 tracking-tight text-gray-800 dark:text-gray-200 w-[20rem] h-[20rem]">
                  {/* Project Image */}
                  <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(project.stats).map(([key, value], i) => (
                        <div key={i} className="space-y-1">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex justify-between items-center pt-4">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;