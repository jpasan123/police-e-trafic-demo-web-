import { useState } from 'react';
import { Link } from 'react-router-dom';
import LegalModal from './legal/LegalModal';
import { TermsContent, PrivacyContent } from './legal/LegalContent';

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer id="contact" className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Police Headquarters</p>
            <p>Colombo 01, Sri Lanka</p>
            <p>Email: support@etraffic.police.lk</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400">Home</a></li>
              <li><a href="#features" className="hover:text-cyan-400">Features</a></li>
              <li><a href="#download" className="hover:text-cyan-400">Download</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/legal#privacy" 
                  className="hover:text-cyan-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/legal#terms" 
                  className="hover:text-cyan-400"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/account-deletion" 
                  className="hover:text-cyan-400"
                >
                  Account Deletion
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Sri Lanka Police. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}