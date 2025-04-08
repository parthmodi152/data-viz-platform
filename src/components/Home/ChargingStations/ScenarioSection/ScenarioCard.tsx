import React from 'react';
import { MoreHorizontal, ChevronUp } from 'lucide-react';
import { Scenario } from '../../../../types/index';

interface ScenarioCardProps {
  scenario: Scenario;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario }) => {
  return (
    <div 
      className="bg-[#CCFF00]/[0.02] border-[0.5px] border-green-1 rounded-[6px] px-[18px] sm:px-[24px] py-[12px] sm:py-[15px] group"
    >
      <div className="flex justify-between items-center h-full">
        <p className="text-green-2 font-[500] text-[14px] sm:text-[16px] font-inter">
          {scenario.description}
        </p>
        <button>
          <MoreHorizontal size={20} className="text-green-1 sm:w-[24px] sm:h-[24px]" />
        </button>
      </div>
    </div>
  );
};

export default ScenarioCard;
