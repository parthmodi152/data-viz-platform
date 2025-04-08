import React from 'react';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface KPICardProps {
  title: string;
  value: string;
  description: string;
  className?: string;
}

const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  description,
  className = ''
}) => {
  return (
    <div className={`bg-gray-3 border border-gray-1 rounded-[5px] p-[18px] sm:p-[24px] flex flex-col ${className}`}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-3">
        <h3 className="text-white text-[16px] sm:text-[18px] font-[500] font-inter">{title}</h3>
        <div className="flex justify-start sm:justify-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-gray-400 hover:text-white transition-colors flex items-center justify-center">
                <Info size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="bg-theme-darker text-[#888888] border-gray-1">
              <p className="text-[12px] sm:text-[14px] font-inter">{description}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      
      <p className="text-muted-foreground text-[10px] sm:text-[12px] font-[300] mb-4 line-clamp-3 overflow-hidden font-inter">
        {description}
      </p>
      
      <p className="text-white text-[24px] sm:text-[32px] font-[700] mt-auto text-right self-end">
        {value}
      </p>
    </div>
  );
};

export default KPICard;
