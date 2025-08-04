import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 left-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        {title && <h2 className="text-xl font-semibold mb-4 text-right">{title}</h2>}
        <div className="text-right">{children}</div>
      </div>
    </div>
  );
};
