import { X } from 'lucide-react';
import React, { useRef, useEffect } from 'react';

export interface ModalPanelProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  title: string;
}

const ModalPanel: React.FC<ModalPanelProps> = ({ 
  isOpen, 
  onClose, 
  children, 
  title,
  width = 'sm:w-[691px]'
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  
  // Effect to prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current body overflow style
      const originalStyle = window.getComputedStyle(document.body).overflow;
      
      // Prevent scrolling on the body
      document.body.style.overflow = 'hidden';
      
      // Restore original style when modal closes
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) {
    return null;
  }
  
  return (
    <>
      {/* Blurred background overlay */}
      <div 
        className="fixed inset-0 z-40 bg-[#00000080] backdrop-blur-sm" 
      />
      
      {/* Panel content */}
      <div 
        ref={panelRef}
        className={`py-[42px] px-[32px] sm:py-[42px] sm:px-[32px] py-[30px] px-[20px] gap-[20px] fixed inset-y-0 right-0 w-full ${width} max-w-full bg-theme-dark border-l border-gray-1 z-50 flex flex-col animate-slide-in shadow-xl overflow-y-auto`}
      >
        <PanelHeader title={title} onClose={onClose} />
        {children}
      </div>
    </>
  );
};

export interface PanelHeaderProps {
    title: string;
    onClose: () => void;
  }
  
  const PanelHeader: React.FC<PanelHeaderProps> = ({ title, onClose }) => {
    return (
      <div className="flex items-center justify-between">
        <h2 className="font-inter font-medium text-[24px] text-white">{title}</h2>
        <button onClick={onClose} className="text-white hover:text-green-1 flex items-center justify-center">
          <X size={28} />
        </button>
      </div>
    );
  };
   

export { ModalPanel, PanelHeader };