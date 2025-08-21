import { useState } from "react";
import { Code2, Palette, FileCode, LayoutDashboard } from "lucide-react";

const Aboutpage = () => {
  return (
    <div
      id="about"
      className="about bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans pt-10"
    >
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Title & Subtitle */}
        <header className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-4">
            Hi, I’m Nandini Rathod 👩‍💻
          </h1>
          <p className="about text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Welcome to my personal project — a place where I share my journey in
            development and problem-solving.
          </p>
        </header>

        {/* About Me */}
        <section className="about bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8 mb-8 md:mb-12">
          <h2 className="about text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <Code2 className="w-8 h-8 mr-3 text-indigo-600 dark:text-indigo-400" />
            About Me
          </h2>
          <p className="about text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            I’m passionate about coding, building projects, and solving Data
            Structures & Algorithms problems. This project is a showcase of my
            learning journey and skills as a developer.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="about bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8 mb-8 md:mb-12">
          <h2 className="about text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
            <Palette className="w-8 h-8 mr-3 text-pink-600 dark:text-pink-400" />
            Tech Stack
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            <li className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
              <FileCode className="mx-auto mb-2 text-blue-600 dark:text-blue-400" />
              JavaScript
            </li>
            <li className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
              <LayoutDashboard className="mx-auto mb-2 text-green-600 dark:text-green-400" />
              React
            </li>
            <li className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
              <Code2 className="mx-auto mb-2 text-indigo-600 dark:text-indigo-400" />
              DSA
            </li>
            <li className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
              <Palette className="mx-auto mb-2 text-pink-600 dark:text-pink-400" />
              CSS / Tailwind
            </li>
          </ul>
        </section>

        {/* Links */}
        <section className="about bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8">
          <h2 className="about text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Connect with Me
          </h2>
          <ul className="about space-y-2 text-base md:text-lg">
            <li>
              <a
                href="https://github.com/nandini-rathod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/nandini-rathod-67080928a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Aboutpage;