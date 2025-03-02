import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  onLanguageChange: (lang: string) => void;
  currentLanguage: string;
}

export default function LanguageSelector({ onLanguageChange, currentLanguage }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'si', name: 'සිංහල' },
    { code: 'ta', name: 'தமிழ்' }
  ];
  
  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span>{currentLang.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
          <div className="py-1">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  currentLanguage === lang.code ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}