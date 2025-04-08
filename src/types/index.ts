export interface Variable {
  id: string;
  name: string;
  category: string;
  active: boolean;
  description?: string;
}

export interface DataPoint {
  id: string;
  month: string;
  week: number;
  value: number;
}

export interface ChartData {
  dataPoints: DataPoint[];
  minValue: number;
  maxValue: number;
}

export interface KPI {
  id: string;
  title: string;
  value: string;
  description: string;
}

export interface Scenario {
  id: string;
  description: string;
  zones: number;
  poles: number;
  type: 'profit' | 'demand';
}

export interface VariableCategory {
  id: string;
  name: string;
  variables: Variable[];
}

export type VariableState = 'inactive' | 'active' | 'selected';

export interface VariableOption {
  id: string;
  name: string;
  state: VariableState;
}
