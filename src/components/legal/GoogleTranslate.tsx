import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';

interface GoogleTranslateProps {
  className?: string;
}

// Extend the Window interface and define Google Translate types
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            layout: google.translate.TranslateElement.InlineLayout;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
  }

  namespace google {
    namespace translate {
      class TranslateElement {
        static InlineLayout: {
          SIMPLE: string;
        };
      }
    }
  }
}

export default function GoogleTranslate({ className = "" }: GoogleTranslateProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Function to add the Google Translate script
    const addScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    };

    // Initialize the Google Translate element
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,si,ta',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // Check if the script already exists in the DOM
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      addScript();
    } else {
      setScriptLoaded(true);
      // If the script exists, reinitialize the translate element
      if (window.googleTranslateElementInit && window.google && window.google.translate) {
        window.googleTranslateElementInit();
      }
    }

    // Cleanup (no script removal to avoid breaking other components)
    return () => {
      // Intentionally empty; script persists for potential reuse
    };
  }, []);

  return (
    <div className={`${className} flex items-center`}>
      <div id="google_translate_element"></div>
      {!scriptLoaded && (
        <div className="flex items-center text-gray-600 text-sm">
          <Globe className="w-4 h-4 mr-1" />
          <span>Loading translator...</span>
        </div>
      )}
    </div>
  );
}