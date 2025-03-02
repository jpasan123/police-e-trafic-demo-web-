import { X } from 'lucide-react';
import { useState } from 'react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [formData, setFormData] = useState({
    type: 'bug',
    message: '',
    email: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create mailto link with feedback content
      const subject = `eTraffic Feedback: ${formData.type}`;
      const body = `
Type: ${formData.type}
Message: ${formData.message}
From: ${formData.email || 'Anonymous'}
      `.trim();
      
      window.location.href = `mailto:etraffic@police.gov.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Close modal after sending
      onClose();
      
      // Reset form
      setFormData({
        type: 'bug',
        message: '',
        email: ''
      });
    } catch (error) {
      console.error('Error sending feedback:', error);
      alert('There was an error sending your feedback. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 animate-modalSlide">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-semibold text-navy-800">Send Feedback</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              Feedback Type
            </label>
            <select
              id="type"
              value={formData.type}
              onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
            >
              <option value="bug">Regarding the Mobile App</option>
              <option value="feature">Feature Request</option>
              <option value="improvement">Improvement Suggestion</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Feedback
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={4}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              placeholder="Please describe your feedback in detail..."
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email (optional)
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              placeholder="For follow-up responses"
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}