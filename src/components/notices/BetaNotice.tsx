import { useState, useEffect } from 'react';
import Modal from './Modal';

export default function BetaNotice() {
  const [isOpen, setIsOpen] = useState(true);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Website in Beta"
    >
      <div className="space-y-4 sm:space-y-6 text-gray-600 text-sm sm:text-base">
        <p className="text-base sm:text-lg">
          Thank you for visiting! Our website is currently in beta and under development.
        </p>

        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Important Information:</h3>
          <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
            <li>The primary feature available is APK downloading.</li>
            <li>Due to hosting constraints, the site may not handle a large number of concurrent requests.</li>
            <li>There is also a limit on the number of download requests per day.</li>
            <li>If you are unable to download the APK at this time, please try again later or revisit the site tomorrow.</li>
          </ul>
        </div>

        <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-100">
          <h3 className="font-semibold text-green-800 mb-1 sm:mb-2">Good news!</h3>
          <p className="text-green-700">
            The app will soon be available on the Play Store and App Store, making it easier for you to download and install.
          </p>
        </div>

        <div className="text-center text-gray-700">
          <p>We appreciate your understanding and patience as we work to improve the platform.</p>
          <p className="font-medium mt-2">Thank you for your support!</p>
        </div>
      </div>
    </Modal>
  );
}