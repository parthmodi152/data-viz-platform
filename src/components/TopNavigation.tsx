import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchInput } from './ui/search-input';
import { useIsMobile } from '../hooks/use-mobile';

interface TopNavigationItem {
  name: string;
  path: string;
  active: boolean;
}

interface TopNavigationProps {
  items: TopNavigationItem[];
}

const TopNavigation: React.FC<TopNavigationProps> = ({ items }) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <header className={`bg-theme-darker px-6 py-5 ${isMobile ? 'flex flex-col space-y-4' : 'h-[87px] flex justify-between items-center'}`}>
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-0 sm:space-x-4">
        {items.map((item, index) => (
          <button 
            key={index}
            onClick={() => item.active ? navigate(item.path) : null}
            disabled={!item.active}
            className={`
              font-roobert font-[500] text-[16px]
              px-4 py-1.5 
              rounded-[5px] 
              text-white
              ${item.active ? 'bg-[#242424] border border-[#5A5A5A]' : 'bg-theme-darker'} 
              transition-colors
              hover:bg-[#242424] 
              ${!item.active ? 'cursor-not-allowed' : ''}
            `}
          >
            {item.name}
          </button>
        ))}
      </div>
      
      <div className={`flex items-center ${isMobile ? 'justify-center' : 'space-x-4'}`}>
        <SearchInput className={`${isMobile ? 'w-full' : 'w-[237px]'}`} /> 
      </div>
    </header>
  );
};

export default TopNavigation;
