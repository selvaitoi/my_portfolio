import React, { useState } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Dock, DockIcon } from './components/ui/Dock';
import Navbar from "./components/Navbar";
import TawkTo from "./components/TawkTo";


function App() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <HelmetProvider>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
        <Helmet>
          <title>Selva Sivam B - Software Engineer & Team Lead</title>
          <meta name="description" content="Passionate Software Engineer with expertise in backend and full-stack development. Leading teams to deliver high-quality solutions." />
          <meta name="theme-color" content={darkMode ? '#111827' : '#ffffff'} />
        </Helmet>

        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

        <main className="pt-16">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <TawkTo />
        </main>

        <footer className="fixed bottom-0 left-0 right-0 flex justify-center pb-6 z-50">
          <Dock>
            <DockIcon>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Github className="w-6 h-6" />
              </a>
            </DockIcon>
            <DockIcon>
              <a
                href="https://linkedin.com/in/selva-sivam-b-30943b301"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </DockIcon>
            <DockIcon>
              <a
                href="mailto:contact.selvasivam@gmail.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Mail className="w-6 h-6" />
              </a>
            </DockIcon>
            <DockIcon>
              <a
                href="tel:+917010044228"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Phone className="w-6 h-6" />
              </a>
            </DockIcon>
          </Dock>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;