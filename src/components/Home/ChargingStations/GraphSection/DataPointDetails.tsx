
import React from 'react';
import { ArrowUp, Info } from 'lucide-react';

interface DataPointDetailsProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const DataPointDetails: React.FC<DataPointDetailsProps> = ({ active, payload, label }) => {
  if (!shouldShowDetails(active, payload)) {
    return null;
  }
  
  // Format value as currency
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(payload[0].value);
  
  // Percentage above/below target
  const percentage = "4.6%";

  return (
    <div 
      className="bg-gray-3 border border-gray-1 rounded-md p-3 z-50 min-w-[180px] text-white"
      style={{ 
        filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))',
        animation: 'fadeIn 0.7s ease-out'
      }}
    >
        
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="text-xl font-semibold text-white">{formattedValue}</span>
        <Info size={18} className="text-[#888888]" />
      </div>
      
      <div className="flex items-center gap-2">
        <div className="w-[20px] h-[20px] rounded-full bg-green-1 bg-opacity-30 flex items-center justify-center">
          <ArrowUp size={10} className="text-green-1" />
        </div>
        <span className="text-[16px] font-[400] text-gray-4 whitespace-nowrap">
          {percentage} above target
        </span>
      </div>
    </div>
  );
};

const shouldShowDetails = (active: boolean, payload: any[]): boolean => {
  return active && payload && payload.length > 0;
};

export default DataPointDetails;
