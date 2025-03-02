import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import FeedbackModal from './feedback/FeedbackModal';
import { scrollToSection } from '../utils/scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="bg-navy-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo className="h-12 w-12" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <button 
                  onClick={() => handleNavClick('features')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </button>
                <button 
                  onClick={() => handleNavClick('instructions')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  How to Use
                </button>
                <button 
                  onClick={() => handleNavClick('download')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Download
                </button>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </button>
                <Link 
                  to="/legal"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Legal
                </Link>
                <Link 
                  to="/account-deletion"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Account Deletion
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button
              onClick={() => setIsFeedbackOpen(true)}
              className="bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-600 transition-colors"
            >
              Send Feedback
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-navy-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => handleNavClick('features')}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavClick('instructions')}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              How to Use
            </button>
            <button 
              onClick={() => handleNavClick('download')}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Download
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Contact
            </button>
            <Link 
              to="/legal"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Legal
            </Link>
            <Link 
              to="/account-deletion"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Account Deletion
            </Link>
            <button
              onClick={() => {
                setIsFeedbackOpen(true);
                setIsOpen(false);
              }}
              className="bg-cyan-500 text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left mt-4"
            >
              Send Feedback
            </button>
          </div>
        </div>
      )}

      <FeedbackModal 
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </nav>
  );
}