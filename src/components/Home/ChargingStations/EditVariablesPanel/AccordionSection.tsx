import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionSectionProps {
  title: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title }) => {
  return (
    <div className="rounded-[4px] bg-gray-3 py-[6px] px-[15px] sm:px-[24px] border border-gray-1">
      <button className="w-full flex items-center justify-between text-left">
        <span className="font-inter font-medium text-[16px] sm:text-[20px] text-green-1">{title}</span>
        <div className="w-[34px] h-[28px] sm:w-[44px] sm:h-[34px] rounded-[56px] border border-green-1 text-green-1 flex items-center justify-center">
          <ChevronDown size={16} className="sm:hidden" />
          <ChevronDown size={20} className="hidden sm:block" />
        </div>
      </button>
    </div>
  );
};

export default AccordionSection; 