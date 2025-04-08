import React from 'react';
import { Sparkles } from 'lucide-react';
import { useDashboardStore } from '../../../../store/dashboardStore';
import ScenarioCard from './ScenarioCard';

interface ScenarioSectionProps {
  className?: string;
  title?: string;
}

const ScenarioSection: React.FC<ScenarioSectionProps> = ({ 
  className = '',
  title = 'Best Scenario Results'
}) => {
  const { scenarios } = useDashboardStore();
  
  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="flex items-center text-[#DCFF7F]/[.9927] text-[18px] sm:text-[24px] font-[600] mb-[24px] font-roobert">
        <Sparkles className="text-[#DAFD7F] mr-[10px]" size={18} />
        {title}
      </h2>
      
      <div className="flex flex-col gap-[16px]">
        {scenarios.map(scenario => <ScenarioCard key={scenario.id} scenario={scenario} />)}
      </div>
    </div>
  );
};

export default ScenarioSection; 