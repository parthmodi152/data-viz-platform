import React from 'react';
import { Sparkles, Check, Plus } from 'lucide-react';

export interface VariableOptionProps {
  name: string;
  isSelected: boolean;
  onToggleSelect: (e: React.MouseEvent) => void;
}

const VariableOption: React.FC<VariableOptionProps> = ({ 
  name, 
  isSelected, 
  onToggleSelect,
}) => {
  return (
    <button
      className={`
        rounded-[20px] py-[5px] px-[8px] sm:px-[10px] flex items-center transition-all
        font-inter font-normal text-[13px] sm:text-[15px]
        ${isSelected
          ? 'text-green-1 bg-[#CCFF00] bg-opacity-10 border border-green-2'
          : 'text-[#d5d5d5] bg-[#595959] bg-opacity-30 border-[0.5px] border-[#EEEEEE]'
        }
        group-hover:text-green-1 group-hover:bg-[#282E16] group-hover:border group-hover:border-green-2 
        group-hover:backdrop-blur-md group-hover:shadow-[0_1px_4px_rgba(200,233,114,0.25)]
      `}
      onClick={onToggleSelect}
    >
      <span className="max-w-[110px] sm:max-w-none truncate">{name}</span>
      <span className="flex items-center justify-center gap-1 ml-[6px] sm:ml-[10px]">
        <Sparkles size={12} className="sm:hidden" />
        <Sparkles size={14} className="hidden sm:inline" />
        {isSelected ? (
          <>
            <Check size={12} className="sm:hidden" />
            <Check size={14} className="hidden sm:inline" />
          </>
        ) : (
          <>
            <Plus size={12} className="sm:hidden" />
            <Plus size={14} className="hidden sm:inline" />
          </>
        )}
      </span>
    </button>
  );
};

export default VariableOption; 