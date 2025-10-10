import React from "react";
import Button from "../ui/Button";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
        <div className="text-center">
          <div className="mb-4 text-green-500">
            <svg
              className="mx-auto h-12 w-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for contacting us. We'll get back to you shortly.
          </p>
          <Button
            onClick={onClose}
            className="text-white my-0 md:my-0 py-2 md:py-2"
            text="Close"
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
