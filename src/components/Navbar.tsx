import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <nav className="fixed w-full z-50 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">

                        {/* Logo / Name */}
                        <span className="text-xl font-bold text-blue-600 dark:text-white">
                            Selva Sivam B
                        </span>

                        {/* Desktop Links (Hidden on Small Screens) */}
                        <div className="hidden sm:flex items-center gap-6">
                            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-white">About</a>
                            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-white">Experience</a>
                            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-white">Projects</a>
                            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-white">Skills</a>
                            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-white">Contact</a>

                            {/* Dark Mode Toggle */}
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-gray-700" />}
                            </button>
                        </div>

                        {/* Hamburger Button (Visible on Small Screens) */}
                        <button
                            className="sm:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Menu className="w-6 h-6 text-gray-700 dark:text-white" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sidebar (Mobile Navigation) */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50`}
            >
                {/* Sidebar Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-xl font-bold text-blue-600 dark:text-white">Menu</span>
                    <button onClick={() => setIsSidebarOpen(false)}>
                        <X className="w-6 h-6 text-gray-700 dark:text-white" />
                    </button>
                </div>

                {/* Sidebar Links */}
                <div className="flex flex-col space-y-4 p-6">
                    <a href="#about" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsSidebarOpen(false)}>About</a>
                    <a href="#experience" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsSidebarOpen(false)}>Experience</a>
                    <a href="#projects" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsSidebarOpen(false)}>Projects</a>
                    <a href="#skills" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsSidebarOpen(false)}>Skills</a>
                    <a href="#contact" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsSidebarOpen(false)}>Contact</a>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="mt-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-gray-700" />}
                    </button>
                </div>
            </div>

            {/* Overlay (Click Outside to Close Sidebar) */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 dark:bg-black/60 z-40"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Navbar;
