import React from 'react';
import { Info } from 'lucide-react';

export interface VariableContextProps {
  name: string;
  description?: string;
}

const VariableContext: React.FC<VariableContextProps> = ({ 
  name, 
  description
}) => {
  return (
    <div className={`bg-gray-3 p-[25px] sm:p-[40px] border-t border-gray-1 opacity-0 animate-[fadeIn_1.5s_ease_forwards]`}>
      <div className="flex items-center mb-[15px] sm:mb-[25px] text-white">
        <h3 className="font-inter font-medium text-[18px] sm:text-[20px]">{name}</h3>
        <Info size={15} className="ml-3" />
      </div>
      <p className="font-inter font-normal text-[14px] sm:text-[15px] text-[#BBBBBB]">
        {description || "No description available for this variable."}
      </p>
    </div>
  );
};

export default VariableContext; 