import { useState } from 'react';
import FeedbackModal from './FeedbackModal';

export default function FeedbackSection() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <div className="mt-8 max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-slideUp animate-delay-400">
      <p className="text-gray-200 leading-relaxed mb-4">
        After downloading this eTraffic Mobile App and installing it on your Mobile Phone, you can sign in through your Google Account and use the Sri Lanka Police eTraffic Mobile App. Please note that this is an effort we have made for your own safety.
      </p>
      
      <div className="mt-8 text-center">
        <p className="text-gray-200 mb-4">
          We're eager to hear your feedback to make it the best it can be. Please take a moment to share your thoughts and suggestions below.
        </p>
        
        <button
          onClick={() => setIsFeedbackOpen(true)}
          className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors hover-lift"
        >
          Share Feedback
        </button>
      </div>

      <FeedbackModal 
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </div>
  );
}