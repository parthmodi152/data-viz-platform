import { create } from 'zustand';
import { ChartData, DataPoint, KPI, Scenario } from '../types/index';

interface DashboardState {
  // Chart data
  chartData: ChartData;
  
  // KPIs and scenarios
  kpis: KPI[];
  scenarios: Scenario[];
}

// Initial scenarios
const initialScenarios: Scenario[] = [
  { id: '1', description: 'The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.', zones: 11, poles: 48, type: 'profit' },
  { id: '2', description: 'The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.', zones: 11, poles: 48, type: 'demand' },
];

// Initial KPIs
const initialKPIs: KPI[] = [
  { id: '1', title: 'Infrastructure Units', value: '€421.07', description: 'This describes the total investment in charging infrastructure units across all zones.' },
  { id: '2', title: 'Charging Growth', value: '33.07', description: 'Year-over-year percentage growth in charging station utilization.' },
  { id: '3', title: 'Localization change', value: '21.9%', description: 'Percentage change in optimal localization parameters for charging stations.' },
  { id: '4', title: 'Fleet growth', value: '7.03%', description: 'Annual growth rate of the electric vehicle fleet using the charging network.' },
];

// Mock data for the chart
const generateChartData = (): ChartData => {
  // Only include March to October
  const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  
  let dataPoints: DataPoint[] = [];
  
  months.forEach((month) => {
    // Generate 4 data points for each month (representing weeks)
    for (let week = 1; week <= 4; week++) {
      // Generate random value between 20000 and 100000
      const baseValue = Math.floor(Math.random() * 80000) + 20000;
      
      // Make July a peak month
      const value = month === 'Jul' ? Math.min(baseValue * 1.5, 100000) : baseValue;
      
      const id = `${month}-${week}`;
      
      dataPoints.push({
        id,
        month,
        week,
        value
      });
    }
  });
  
  return {
    dataPoints,
    minValue: 0,    
    maxValue: 120000
  };
};

// Helper to determine current week (1-4) for the month
function getCurrentWeek(): number {
  const day = new Date().getDate();
  // Simple approximation: divide the month into 4 weeks
  return Math.min(Math.ceil(day / 7), 4);
}

export const useDashboardStore = create<DashboardState>((set) => ({
  // Initial state
  chartData: generateChartData(),
  kpis: initialKPIs,
  scenarios: initialScenarios,
})); 