import React from 'react';
import { Code2, Users, Brain } from 'lucide-react';
import { FeatureSteps } from './ui/FeatureSteps';
import { WarpBackground } from './ui/warp-background';
import { GlowingEffect } from './ui/glowing-effect';

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

        <div className="mt-12 text-gray-600 dark:text-gray-300 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text on the Left */}
            <div className="flex-1 text-center md:text-right md:pr-8 mb-8 md:mb-0">
              <p className="mb-4 font-['Playfair_Display'] text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Started my journey with PHP and expanded into modern technologies, now specializing in full-stack development
                and team leadership. Currently at ITOI Technologies, where I lead a team of developers and ensure
                high-quality code delivery.
              </p>
              <p className="font-['Poppins'] text-base text-gray-600 dark:text-gray-400">
                My passion lies in creating efficient solutions and mentoring others to reach their full potential.
                I believe in continuous learning and staying ahead of technological advancements.
              </p>
            </div>

            {/* Centered Portrait Profile Image Section with Glow Effect */}
            <div className="relative w-full max-w-xs h-[400px] rounded-xl mx-8 scale-105 shadow-xl transition-transform duration-300">
              {/* Apply Glowing Effect */}
              <GlowingEffect
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />

              {/* Background Image */}
              <img
                src="/images/full.png"
                alt="Selva Sivam B"
                className="w-full h-full object-cover"
              />

              {/* Glowing Mask */}
              <svg className="absolute inset-0 w-full h-full">
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feFlood floodColor="rgba(0, 123, 255, 0.8)" result="color" />
                  <feComposite in="color" in2="blur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Apply Mask with Proper Scaling */}
                <image
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  href="/images/full.png"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </div>

            {/* Text on the Right */}
            <div className="flex-1 text-center md:text-left md:pl-8 mt-8 md:mt-0">
              <p className="mb-4 font-playfair text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate about coding, solving complex problems, and continuously pushing boundaries. My experience spans various industries,
                and I enjoy contributing to meaningful projects.
              </p>
              <p className="font-poppins text-base text-gray-600 dark:text-gray-400">
                Let's collaborate and build something amazing together!
              </p>
            </div>
          </div>
        </div>


        <FeatureSteps
          features={features}
          title="My Development Journey"
          autoPlayInterval={2000}
          className="mt-20"
        />
      </div>
    </section>
  );
};

export default About;
