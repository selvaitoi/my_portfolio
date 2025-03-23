import React from 'react';
import { ArrowDown } from 'lucide-react';
import { BackgroundCircles } from './ui/BackgroundCircles';
import { GooeyText } from './ui/gooey-text-morphing';

const Hero = () => {
  return (
    <BackgroundCircles
      description={(
        <>
          <div className="flex flex-col items-center justify-center text-center">

            {/* Gooey Text Section */}
            <div className="flex items-center justify-center mb-6">
              <GooeyText
                texts={[
                  "Software Engineer",
                  "Team Lead",
                  "Full Stack Developer",
                  "Problem Solver"
                ]}
                morphTime={1}
                cooldownTime={1.5}
                className="font-bold whitespace-nowrap"
                textClassName="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent"
              />
            </div>


            {/* Profile Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500/30 bg-transparent mb-6">
              <img
                src="/images/my.png"
                alt="Selva Sivam B"
                className="w-full h-full object-cover bg-transparent"
              />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Passionate Software Engineer with expertise in backend and full-stack development.
              Leading teams to deliver high-quality solutions and mentoring the next generation of developers.
            </p>

            {/* Button */}
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 mt-6 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Learn More
              <ArrowDown className="w-5 h-5" />
            </a>

          </div>
        </>
      )}
      variant="senary"
      className="relative"
    />
  );
};

export default Hero;
