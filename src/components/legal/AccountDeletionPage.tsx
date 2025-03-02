import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Logo from '../Logo';
import GoogleTranslate from './GoogleTranslate';

export default function AccountDeletionPage() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-navy-800 hover:text-navy-900">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-navy-800">Account Deletion Policy</h1>
          </div>
          
          <div className="p-6 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Thank you for using e-Traffic Police App. We understand that you may wish to delete your account and associated data. 
              Due to the nature of our app, which facilitates reporting traffic violations and provides crucial information for police 
              investigations, account deletion requires a specific process to ensure the integrity of legal proceedings.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h2 className="text-xl font-semibold text-navy-800 mb-3">Why We Can't Offer Immediate Account Deletion</h2>
              <p className="text-gray-700">
                The data you submit through e-Traffic Police App, including your email address, may be used as evidence in official 
                police investigations. Allowing immediate and uncontrolled account deletion could compromise these investigations 
                and obstruct justice. Therefore, we have implemented a review process to balance your privacy concerns with the 
                needs of law enforcement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy-800 mb-3">How to Delete Your Account</h2>
              <p className="text-gray-700 mb-4">
                To delete your account and associated data, please follow these steps:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-lg font-medium text-navy-800 mb-3">Send an Email Request</h3>
                <p className="text-gray-700 mb-3">
                  Send an email to <a href="mailto:etraffic@police.gov.lk" className="text-blue-600 hover:underline">etraffic@police.gov.lk</a> with 
                  the subject line "Account Deletion Request". In the body of the email, please include the following information:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>The email address you used to register with e-Traffic Police App.</li>
                  <li>Your full name (if provided in the app).</li>
                  <li>A brief explanation of your reason for deleting your account (optional).</li>
                </ol>
              </div>

              <div className="mt-4 space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h3 className="text-lg font-medium text-navy-800 mb-2">Police Review</h3>
                  <p className="text-gray-700">
                    Your request will be reviewed by the appropriate police personnel. They will determine if your submitted 
                    data is currently relevant to any ongoing or potential investigations.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h3 className="text-lg font-medium text-navy-800 mb-2">Account Deletion</h3>
                  <p className="text-gray-700">
                    If the police determine that your data is not required for any legal proceedings, your account and 
                    associated data will be deleted. You will receive a confirmation email once the deletion is complete.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-navy-800 mb-3">Important Information</h2>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>
                  Even if your account is deleted, your email address may be retained for police record-keeping purposes, 
                  as required by law and to ensure the integrity of past submissions. This is to maintain an audit trail for legal purposes.
                </li>
                <li>
                  The review process may take some time. We appreciate your patience and understanding.
                </li>
                <li>
                  We are committed to protecting your privacy while also ensuring the effective operation of our app for public safety.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy-800 mb-3">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions or concerns regarding this policy, please do not hesitate to contact us at{' '}
                <a href="mailto:etraffic@police.gov.lk" className="text-blue-600 hover:underline">etraffic@police.gov.lk</a>.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <p className="text-gray-700 italic">
                We appreciate your cooperation in adhering to this policy, which is designed to uphold the integrity of the 
                information provided through e-Traffic Police App and ensure its responsible use in supporting law enforcement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}