import React from 'react';
import { Sparkles, RotateCw } from 'lucide-react';
import { SearchInput } from '../../../../components/ui/search-input';

export interface ActionBarProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAutofill?: () => void;
  onRerun?: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({ 
  searchQuery, 
  onSearchChange, 
  onAutofill = () => {}, 
  onRerun = () => {} 
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <SearchInput 
        placeholder="Search variables..." 
        value={searchQuery} 
        onChange={onSearchChange}
        className="flex-1 text-white mb-2 sm:mb-0"
      />
      <div className="flex gap-2">
        <button 
          className="flex items-center justify-center sm:justify-start space-between font-roobert font-medium text-[16px] bg-[#242424] border-[0.67px] border-[#5A5A5A] text-[#FFFFFF] px-[24px] py-[5px] rounded-[4px] flex-1 sm:flex-none"
          onClick={onAutofill}
        >
          <Sparkles size={20} />
          <span className="ml-[10px]">Autofill</span>
        </button>
        <button 
          className="flex items-center justify-center sm:justify-start space-between font-roobert font-medium text-[16px] bg-[#23291E] border-[0.67px] border-[#577113] text-green-2 px-[24px] py-[5px] rounded-[4px] shadow-[0px 0px 12.7px 0px #FFFFFF0D inset] flex-1 sm:flex-none"
          onClick={onRerun}
        >
          <RotateCw size={20} />
          <span className="ml-[10px]">Rerun</span>
        </button>
      </div>
    </div>
  );
};

export default ActionBar; 