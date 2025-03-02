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
            // Add other layouts if needed (e.g., VERTICAL, HORIZONTAL, etc.)
          };
        }
      }
    }
  }