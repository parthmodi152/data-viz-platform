import React from 'react';
import Chart from './Chart';

interface GraphSectionProps {
  className?: string;
}

const GraphSection: React.FC<GraphSectionProps> = ({ className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <h2 className="font-roobert text-[18px] sm:text-[24px] font-[600] mb-4">Graphs</h2>
      <Chart className="h-[450px] flex flex-col" />
    </div>
  );
};

export default GraphSection;
