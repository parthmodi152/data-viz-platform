import React, { useRef, useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { useDashboardStore } from '../../../../store/dashboardStore';
import { useIsMobile } from '../../../../hooks/use-mobile';
import DataPointDetails from './DataPointDetails';
import { ChevronDown } from 'lucide-react';
import { DataPoint } from '../../../../types';

interface ChartProps {
  className?: string;
}

const Chart: React.FC<ChartProps> = ({ className = '' }) => {
  const { chartData } = useDashboardStore();
  const chartRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Filter data for mobile - show only first 10 datapoints
  const displayData = useMemo(() => {
    if (!isMobile) {
      return chartData.dataPoints;
    }
    
    // Take first 10 datapoints for mobile
    return chartData.dataPoints.slice(0, 10);
    
  }, [chartData.dataPoints, isMobile]);
  
  const formatYAxis = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}k`;
    }
    return `$${value}`;
  };

  const getCurrentMonth = (): string => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'short' });
    return month.slice(0, 3); // Get first 3 letters
  };

  const currentMonth = getCurrentMonth();

  // Custom X-axis tick that renders month labels only for the first week of each month
const CustomXAxisTick = (props: any) => {
  const { x, y, payload } = props;

  // Skip first month
  if (payload.index === 0) {
    return null;
  }

  // Extract the dataPoint ID from payload value
  const dataPointId = payload.value;
  // Find the month from the ID (format: "Month-Week")
  const month = dataPointId.split('-')[0];
  // Extract week number
  const week = parseInt(dataPointId.split('-')[1]);
  
  // Only render labels for first week of each month
  if (week !== 1) {
    return null;
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#FFFFFF" fontSize={12}>
        {month}
      </text>
      {month === currentMonth && (
        <text x={0} y={16} dy={16} textAnchor="middle" fill="#878787" fontSize={10}>
          Now
        </text>
      )}
    </g>
  );
};
  
  return (
    <div ref={chartRef} className={`relative w-full bg-gray-3 rounded-[5px] p-8 border border-gray-1 ${className}`}>
      <div className="absolute top-8 right-8 z-10">
        <div className="bg-[#18181A] rounded-lg border-[#5A5A5A] border px-3 py-2 text-white flex items-center">
          <span className="font-inter text-[14px]">Unsatisfied Demand %</span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={displayData}
          margin={{left: 0, top: 60, right: 30, bottom: 0}}
        >
          <CartesianGrid stroke="#343434" horizontal={true} vertical={false} />
          
          {/* Render reference lines for each data point */}
          {displayData.map((point) => {
            // Create segments for each reference line
            const segment = [
              { x: point.id, y: 0 },
              { x: point.id, y: point.value }
            ];

            // check if point is currentDataPoint
            const isCurrentDataPoint = point.month === currentMonth && point.week === 1;
            
            if (isCurrentDataPoint) {
              return (
                <ReferenceLine 
                  key="current-month-line"
                  x={point.id} 
                  stroke="#363637" 
                  strokeDasharray="4 4" 
                  strokeWidth={1} 
                />
              );
            }
            
            return (
              <ReferenceLine 
                key={`ref-${point.id}`}
                segment={segment}
                stroke="#8AA14F33"
                strokeWidth={2}
              />
            );
          })}
          
          <XAxis
            dataKey="id"
            tick={CustomXAxisTick}
            axisLine={{ stroke: '#575757' }}
            tickLine={false}
            dy={10}
            height={60}
            interval={0}
          />
          <YAxis
            domain={[chartData.minValue, chartData.maxValue]}
            tickFormatter={formatYAxis}
            tick={{ fill: '#FFFFFF', fontSize: 12 }}
            axisLine={{ stroke: '#575757' }}
            tickLine={false}
            dx={-10}
            ticks={[20000, 40000, 60000, 80000, 100000]}
            allowDataOverflow={true}
          />
          <Tooltip
            content={<DataPointDetails />}
            cursor={{ stroke: '#C8E972', strokeDasharray: '4 4', strokeWidth: 2.3 }}
          />
          
          <Line
            type="linear"
            connectNulls
            dataKey="value"
            stroke="#C8E972"
            strokeWidth={2}
            activeDot={{ 
              r: 6, 
              fill: 'gray-3', 
              stroke: '#C8E972', 
              strokeWidth: 2,
              className: "transition-all duration-200 drop-shadow-[0_4px_14.4px_#C8E972]"
            }}
            dot={props => {
              const { cx, cy, payload } = props;
              if (payload.month === getCurrentMonth() && payload.week === 1) {
                return (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={6}
                    fill="gray-3"
                    stroke="#C8E972"
                    strokeWidth={3}
                  />
                );
              }
              return null;
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
