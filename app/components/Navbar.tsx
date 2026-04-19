'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            DS
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <a href="#about" className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#skills" className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#experience" className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#contact" className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}