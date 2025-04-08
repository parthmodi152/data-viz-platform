import React from 'react';
import { History, Share, LucideIcon } from 'lucide-react';

interface ActionButton {
  icon?: LucideIcon;
  label?: string;
  onClick: () => void;
}

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  onHistoryClick?: () => void;
  onEditVariablesClick?: () => void;
  onShareClick?: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  icon: PageIcon,
  title,
  onHistoryClick,
  onEditVariablesClick,
  onShareClick,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0 mb-10">
      <div className="flex items-center">
        <PageIcon className="text-white mr-3" size={27} />
        <h1 className="text-[24px] sm:text-[32px] font-bold leading-[150%] font-roobert text-white">{title}</h1>
      </div>
      
      <div className="flex items-center space-x-2 justify-start">
        <button 
            onClick={onHistoryClick} 
            className="p-2 rounded-[5px] bg-[#242424] border border-[#5A5A5A] transition-colors hover:bg-theme-light-gray"
            >
            <History size={24} className="text-[#B9B9B9]" />
        </button>
        <button 
            onClick={onEditVariablesClick} 
            className="font-roobert font-[500] text-[14px] sm:text-[16px] rounded-[5px] px-4 py-2 bg-[#242424] border border-[#5A5A5A] transition-colors hover:bg-theme-light-gray"
            >
            Edit Variables
        </button>
        <button 
            onClick={onShareClick} 
            className="p-2 rounded-[5px] bg-[#242424] border border-[#5A5A5A] transition-colors hover:bg-theme-light-gray"
            >
            <Share size={24} className="text-[#B9B9B9]" />
        </button>
      </div>
    </div>
  );
};

export default PageHeader; 