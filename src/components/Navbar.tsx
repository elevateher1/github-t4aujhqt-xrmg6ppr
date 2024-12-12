import React from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './shared/Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-300 to-red-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <button onClick={() => scrollToSection('initiatives')} className="px-3 py-2 rounded-md hover:bg-purple-600 transition">
                Initiatives
              </button>
              <button onClick={() => scrollToSection('success')} className="px-3 py-2 rounded-md hover:bg-purple-600 transition">
                Our Stories
              </button>
              <button onClick={() => scrollToSection('blog')} className="px-3 py-2 rounded-md hover:bg-purple-600 transition">
                Blog
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-3 py-2 rounded-md hover:bg-purple-600 transition">
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('donate')} 
                className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition"
              >
                Donate
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('initiatives')} className="block px-3 py-2 rounded-md hover:bg-purple-600 transition w-full text-left">
              Initiatives
            </button>
            <button onClick={() => scrollToSection('success')} className="block px-3 py-2 rounded-md hover:bg-purple-600 transition w-full text-left">
              Our Stories
            </button>
            <button onClick={() => scrollToSection('blog')} className="block px-3 py-2 rounded-md hover:bg-purple-600 transition w-full text-left">
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 rounded-md hover:bg-purple-600 transition w-full text-left">
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('donate')} 
              className="w-full text-center bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition"
            >
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}