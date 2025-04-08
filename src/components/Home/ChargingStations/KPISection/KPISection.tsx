import React from 'react';
import { Plus, Info } from 'lucide-react';
import KPICard from './KPICard';
import { useDashboardStore } from '../../../../store/dashboardStore';

interface KPISectionProps {
  className?: string;
}

const KPISection: React.FC<KPISectionProps> = ({ className = '' }) => {
  const { kpis } = useDashboardStore();
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-roobert text-[18px] sm:text-[24px] font-[600]">Key Performance Indicators</h2>
        <button className="flex items-center justify-center px-3 py-1.5 border border-[#5A5A5A] rounded-[5px] bg-transparent text-white hover:bg-theme-light-gray transition-colors">
          <span className="text-[12px] sm:text-[14px] font-[500] mr-1.5">Variables</span>
          <Plus size={12} />
        </button>
      </div>
      
      {/* KPI cards */}
      <div className="grid grid-cols-2 gap-[20px]">
        {kpis.map(kpi => (
          <KPICard 
            key={kpi.id} 
            title={kpi.title} 
            value={kpi.value} 
            description={kpi.description} 
            className="h-[215px]"
          />
        ))}
      </div>
    </div>
  );
};

export default KPISection;
