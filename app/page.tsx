'use client';

import { Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center min-h-screen max-w-7xl mx-auto">
          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 text-center">
            Hi, I'm{' '}
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              Darryl Surjadi
            </span>
          </h1>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-3xl md:text-5xl font-bold text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Software Developer
              </span>
              <span className="text-gray-300 mx-3">&</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Production Engineer
              </span>
            </p>
            {/* Glowing underline */}
            <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mt-3 rounded-full mx-auto"></div>
          </div>

          {/* Buttons Container */}
          <div className="flex gap-4 justify-center flex-wrap items-center">
            {/* GitHub Icon Button */}
            <a
              href="https://github.com/DarrylSurjadi"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-4 border-2 border-gray-600 text-gray-300 rounded-xl hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:scale-110 transition-all duration-300 group"
            >
              <FaGithub className="w-6 h-6" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub
              </span>
            </a>

            {/* LinkedIn Icon Button */}
            <a
              href="https://linkedin.com/in/darryl-surjadi"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-4 border-2 border-gray-600 text-gray-300 rounded-xl hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:scale-110 transition-all duration-300 group"
            >
              <FaLinkedin className="w-6 h-6" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LinkedIn
              </span>
            </a>

            {/* Mail Icon Button */}
            <a
              href="mailto:darryledwardsurjadi@gmail.com"
              className="relative p-4 border-2 border-gray-600 text-gray-300 rounded-xl hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:scale-110 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Email
              </span>
            </a>

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2 group overflow-hidden"
            >
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10 font-semibold">Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}