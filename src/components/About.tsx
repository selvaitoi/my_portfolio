import React from 'react';
import { Code2, Users, Brain } from 'lucide-react';
import { FeatureSteps } from './ui/FeatureSteps';
import { WarpBackground } from './ui/warp-background';

const features = [
  {
    step: 'Step 1',
    title: 'Technical Excellence',
    content: 'Mastering multiple programming languages and frameworks to create efficient, scalable solutions.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop'
  },
  {
    step: 'Step 2',
    title: 'Team Leadership',
    content: 'Leading development teams with a focus on efficiency, quality, and continuous improvement.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop'
  },
  {
    step: 'Step 3',
    title: 'Innovation & Growth',
    content: 'Staying ahead of technological trends and fostering a culture of continuous learning.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 mx-auto border-4 border-blue-500/30">
          <img
            src="/images/my.png"
            alt="Selva Sivam B"
            className="w-full h-full object-cover"
          />
        </div>

        <WarpBackground className="mb-16 !p-8 md:!p-12 border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg">
              <Code2 className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Technical Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Proficient in multiple programming languages and frameworks, with a focus on creating efficient and scalable solutions.
              </p>
            </div>

            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Team Leadership
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Successfully led teams of developers, improving project efficiency and mentoring junior developers to excellence.
              </p>
            </div>

            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg">
              <Brain className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Always eager to learn and explore innovative solutions, staying up-to-date with the latest technologies and best practices.
              </p>
            </div>
          </div>
        </WarpBackground>

        <div className="mt-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
          <p className="mb-4">
            Started my journey with PHP and expanded into modern technologies, now specializing in full-stack development
            and team leadership. Currently at ITOI Technologies, where I lead a team of developers and ensure
            high-quality code delivery.
          </p>
          <p>
            My passion lies in creating efficient solutions and mentoring others to reach their full potential.
            I believe in continuous learning and staying ahead of technological advancements.
          </p>
        </div>

        <FeatureSteps
          features={features}
          title="My Development Journey"
          autoPlayInterval={4000}
          className="mt-20"
        />
      </div>
    </section>
  );
};

export default About;