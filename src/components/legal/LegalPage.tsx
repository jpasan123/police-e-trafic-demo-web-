import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import GoogleTranslate from './GoogleTranslate';
import Logo from '../Logo';

// Define types for translations
interface Translation {
  backToHome: string;
  overview: string;
  privacy: string;
  terms: string;
  faq: string;
  appDescription: string;
  privacyIntro: string;
  termsIntro: string;
  faqIntro: string;
}

const translations: Record<string, Translation> = {
  en: {
    backToHome: 'Back to Home',
    overview: 'Overview',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    faq: 'FAQ',
    appDescription: 'The eTraffic Police Application is designed to help citizens report traffic violations, pay fines, and access traffic-related services securely and efficiently.',
    privacyIntro: 'This Privacy Policy outlines how the Sri Lanka Police eTraffic app collects, uses, and protects your personal information.',
    termsIntro: 'These Terms of Service govern your use of the Sri Lanka Police eTraffic app. By using our app, you agree to these terms.',
    faqIntro: 'Find answers to common questions about using the eTraffic Police app.',
  },
  // Add other languages (si, ta) as needed
  si: {
    backToHome: 'මුල් පිටුවට ආපසු',
    overview: 'දළ විශ්ලේෂණය',
    privacy: 'රහස්‍යතා ප්‍රතිපත්තිය',
    terms: 'සේවා කොන්දේසි',
    faq: 'නිතර අසන ප්‍රශ්න',
    appDescription: 'eTraffic පොලිස් යෙදුම රියදුරන්ට රිය අපරාධ වාර්තා කිරීම, එහි දඩ ගෙවීම සහ ගමන බිම් සම්බන්ධ සේවාවන් ආරක්ෂිතව හා කාර්යසාධනයෙන් ලබා ගැනීමට උදව් කරයි.',
    privacyIntro: 'මෙම රහස්‍යතා ප්‍රතිපත්තිය සඳහන් කරන්නේ ශ්‍රී ලංකා පොලිස් eTraffic යෙදුම ඔබගේ පුද්ගලික තොරතුරු එකතු කරන, භාවිතා කරන හා ආරක්ෂා කරන ආකාරයයි.',
    termsIntro: 'මෙම සේවා කොන්දේසි ශ්‍රී ලංකා පොලිස් eTraffic යෙදුම භාවිතා කිරීම ආවරණය කරයි. අපගේ යෙදුම භාවිතා කිරීමෙන්, ඔබ මෙම කොන්දේසිවලට එකඟ වන බව අපි උපකල්පනය කරමු.',
    faqIntro: 'eTraffic පොලිස් යෙදුම භාවිතා කිරීම සම්බන්ධයෙන් බහුලව අසන ප්‍රශ්නවලට පිළිතුරු සොයන්න.',
  },
  ta: {
    backToHome: 'முகப்பு பக்கத்திற்கு திரும்பு',
    overview: 'கண்ணோட்டம்',
    privacy: 'தனியுரிமை கொள்கை',
    terms: 'சேவை நிபந்தனைகள்',
    faq: 'பொதுவாகக் கேட்கப்படும் கேள்விகள்',
    appDescription: 'eTraffic போலீஸ் பயன்பாடு, போக்குவரத்து மீறல்களை அறிக்கை அனுப்ப, அபராதங்களை செலுத்த மற்றும் போக்குவரத்து தொடர்பான சேவைகளை பாதுகாப்பாகவும் திறமையாகவும் அணுக உதவுகிறது.',
    privacyIntro: 'இந்த தனியுரிமை கொள்கை, ஶ்ரீ லங்கா போலீஸ் eTraffic பயன்பாடு உங்கள் தனிப்பட்ட தகவல்களை எவ்வாறு சேகரிக்கிறது, பயன்படுத்துகிறது மற்றும் பாதுகாக்கிறது என்பதை விவரிக்கிறது.',
    termsIntro: 'இந்த சேவை நிபந்தனைகள், ஶ்ரீ லங்கா போலீஸ் eTraffic பயன்பாட்டை நீங்கள் பயன்படுத்துவதை கட்டுப்படுத்துகின்றன. எமது பயன்பாட்டை பயன்படுத்துவதன் மூலம், இந்த நிபந்தனைகளுக்கு நீங்கள் ஒப்புக்கொள்கிறீர்கள் என்பதை நாங்கள் கருதுகிறோம்.',
    faqIntro: 'eTraffic போலீஸ் பயன்பாட்டை பயன்படுத்துவதுடன் தொடர்புடைய பொதுவாகக் கேட்கப்படும் கேள்விகளுக்கு பதில்களைக் கண்டறியவும்.',
  },
};

// Define props for Logo (adjust based on actual Logo component)
interface LogoProps {
  className?: string;
}

// Define props for TabButton
interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [language, setLanguage] = useState<'en' | 'si' | 'ta'>('en'); // Restrict language to known values
  const location = useLocation();

  // Set active tab based on URL hash
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && ['overview', 'privacy', 'terms', 'faq'].includes(hash)) {
      setActiveTab(hash);
    }
  }, [location]);

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-navy-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Logo className="h-12 w-12 mr-4" />
              <h1 className="text-xl font-bold">Sri Lanka Police eTraffic</h1>
            </div>
            <GoogleTranslate className="ml-auto" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-navy-800 hover:text-navy-900">
            <ChevronLeft className="w-5 h-5 mr-1" />
            {t.backToHome}
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex flex-wrap border-b">
            <TabButton 
              active={activeTab === 'overview'} 
              onClick={() => setActiveTab('overview')}
              label={t.overview}
            />
            <TabButton 
              active={activeTab === 'privacy'} 
              onClick={() => setActiveTab('privacy')}
              label={t.privacy}
            />
            <TabButton 
              active={activeTab === 'terms'} 
              onClick={() => setActiveTab('terms')}
              label={t.terms}
            />
            <TabButton 
              active={activeTab === 'faq'} 
              onClick={() => setActiveTab('faq')}
              label={t.faq}
            />
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <section>
                <h2 className="text-2xl font-bold text-navy-800 mb-6">eTraffic Application Overview</h2>
                <p className="text-gray-700 mb-6">{t.appDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center text-center">
                    <div className="bg-navy-800 text-white p-3 rounded-full mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-navy-800 mb-2">Email</h4>
                    <p className="text-gray-700">etraffic@police.gov.lk</p>
                    <p className="text-gray-700">itsupport@police.gov.lk</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center text-center">
                    <div className="bg-navy-800 text-white p-3 rounded-full mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-navy-800 mb-2">Address</h4>
                    <p className="text-gray-700">Police Headquarters,</p>
                    <p className="text-gray-700">Colombo 01, Sri Lanka</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center text-center">
                    <div className="bg-navy-800 text-white p-3 rounded-full mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-navy-800 mb-2">Phone</h4>
                    <p className="text-gray-700">(+94) 11-2440584</p>
                  </div>
                </div>
              </section>
            )}

            {activeTab === 'privacy' && (
              <section>
                <h2 className="text-2xl font-bold text-navy-800 mb-6">Privacy Policy</h2>
                <p className="text-gray-700 mb-6">{t.privacyIntro}</p>
                
                <div className="space-y-8">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">Information We Collect</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Personal identification information (Name, email address, phone number, etc.)</li>
                      <li>Vehicle registration details</li>
                      <li>Traffic violation records</li>
                      <li>Payment information for fines</li>
                      <li>Location data when reporting violations</li>
                      <li>Photos and videos submitted for violation reports</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">How We Use Your Information</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>To process traffic violation payments</li>
                      <li>To maintain your account</li>
                      <li>To verify your identity</li>
                      <li>To send notifications about violations and payments</li>
                      <li>To improve our services and user experience</li>
                      <li>To analyze traffic patterns and violation hotspots</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">Data Security</h3>
                    <p className="text-gray-700 mb-4">
                      We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
                    </p>
                    <p className="text-gray-700">
                      We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">Third-Party Services</h3>
                    <p className="text-gray-700 mb-4">
                      We may employ third-party companies and individuals for the following reasons:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>To facilitate our Service</li>
                      <li>To provide the Service on our behalf</li>
                      <li>To perform Service-related services</li>
                      <li>To assist us in analyzing how our Service is used</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {activeTab === 'terms' && (
              <section>
                <h2 className="text-2xl font-bold text-navy-800 mb-6">Terms of Service</h2>
                <p className="text-gray-700 mb-6">{t.termsIntro}</p>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">Acceptance of Terms</h3>
                    <p className="text-gray-700">
                      By accessing this app, we assume you accept these terms and conditions. Do not continue to use eTraffic Police Application Sri Lanka if you do not agree to take all of the terms and conditions stated on this page.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">License</h3>
                    <p className="text-gray-700 mb-4">
                      Unless otherwise stated, eTraffic Police Application Sri Lanka and/or its licensors own the intellectual property rights for all material on eTraffic Police Application Sri Lanka. All intellectual property rights are reserved.
                    </p>
                    <p className="text-gray-700">
                      You may access this app for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">Restrictions</h3>
                    <p className="text-gray-700 mb-4">You are specifically restricted from all of the following:</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Publishing any app material in any other media</li>
                      <li>Selling, sublicensing and/or otherwise commercializing any app material</li>
                      <li>Publicly performing and/or showing any app material</li>
                      <li>Using this app in any way that is or may be damaging to this app</li>
                      <li>Using this app in any way that impacts user access to this app</li>
                      <li>Using this app contrary to applicable laws and regulations, or in any way may cause harm to the app, or to any person or business entity</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">Your Content</h3>
                    <p className="text-gray-700 mb-4">
                      In these terms and conditions, "Your Content" shall mean any audio, video, text, images or other material you choose to display on this app. By displaying Your Content, you grant eTraffic Police Application Sri Lanka a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
                    </p>
                    <p className="text-gray-700">
                      Your Content must be your own and must not be invading any third-party's rights. eTraffic Police Application Sri Lanka reserves the right to remove any of Your Content from this app at any time without notice.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {activeTab === 'faq' && (
              <section>
                <h2 className="text-2xl font-bold text-navy-800 mb-6">Frequently Asked Questions</h2>
                <p className="text-gray-700 mb-6">{t.faqIntro}</p>
                
                <FaqContent language={language} />
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, label }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 font-medium text-sm sm:text-base transition-colors ${
        active
          ? 'bg-white text-navy-800 border-b-2 border-cyan-500'
          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );
}

interface Faq {
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  faqs: Faq[];
}

interface FaqContentProps {
  language: 'en' | 'si' | 'ta';
}

function FaqContent({ language }: FaqContentProps) {
  // Group FAQs by category (hardcoded for now, but could be fetched or translated)
  const faqCategories: FaqCategory[] = [
    {
      title: "General Information",
      faqs: [
        {
          question: "What is the eTraffic Police app?",
          answer: "The eTraffic Police app is an official application developed by the Sri Lanka Police that allows citizens to report traffic violations in real-time by capturing and uploading photos or videos. These reports are sent to the Police Headquarters for review and necessary action."
        },
        {
          question: "Is the app available in multiple languages?",
          answer: "Yes, the app is available in Sinhala, Tamil, and English to cater to all citizens of Sri Lanka."
        }
      ]
    },
    {
      title: "Account & Security",
      faqs: [
        {
          question: "Do I need to create an account to use the app?",
          answer: "Yes, you need to create an account to use the full features of the app. This helps us verify the authenticity of reports and maintain communication with users if needed."
        },
        {
          question: "Is my personal information secure?",
          answer: "Yes, we take data security very seriously. All personal information is encrypted and stored securely. We only collect information necessary for the functioning of the app and enforcement of traffic regulations. Please refer to our Privacy Policy for more details."
        },
        {
          question: "Can I use the app anonymously?",
          answer: "While you need to create an account to use the app, your identity will not be disclosed to the public or to the individuals reported for traffic violations. Your information is only accessible to authorized police personnel."
        },
        {
          question: "How can I update my personal information in the app?",
          answer: "You can update your personal information by going to the 'Profile' section in the app and selecting 'Edit Profile'. Make the necessary changes and save your updated information."
        }
      ]
    },
    {
      title: "Using the App",
      faqs: [
        {
          question: "How do I report a traffic violation?",
          answer: "To report a traffic violation, open the app, tap on the 'Report Violation' button, capture a photo or video of the violation, provide details such as location and type of violation, and submit the report. You can track the status of your report through the app."
        },
        {
          question: "What happens after I submit a report?",
          answer: "After submission, your report is sent to the Police Headquarters for review. If the report is valid, appropriate action will be taken against the violator. You can track the status of your report through the app."
        },
        {
          question: "Can I pay my traffic fines through the app?",
          answer: "Yes, the app allows you to view and pay your traffic fines online through secure payment gateways. You will receive a digital receipt for your payment."
        }
      ]
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "What should I do if I encounter technical issues with the app?",
          answer: "If you encounter any technical issues, you can report them through the 'Feedback' section in the app or contact our support team at etraffic@police.gov.lk or itsupport@police.gov.lk."
        }
      ]
    }
  ];

  const [expandedCategory, setExpandedCategory] = useState<string | null>("General Information");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  
  return (
    <div className="space-y-8">
      {faqCategories.map((category, categoryIndex) => (
        <div key={category.title} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
            className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-lg font-semibold text-navy-800">{category.title}</h3>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                expandedCategory === category.title ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          
          {expandedCategory === category.title && (
            <div className="p-4 space-y-4">
              {category.faqs.map((faq, faqIndex) => {
                const questionId = `${categoryIndex}-${faqIndex}`;
                return (
                  <div key={questionId} className="border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenQuestion(openQuestion === questionId ? null : questionId)}
                      className="flex justify-between items-center w-full p-4 text-left bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <span className="font-medium text-navy-800">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          openQuestion === questionId ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {openQuestion === questionId && (
                      <div className="p-4 bg-white">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}