import { create } from 'zustand';
import { VariableCategory } from '../types/index';

interface VariablesState {
  // Core state for edit panel
  variableCategories: VariableCategory[];
  selectedVariables: string[];
  isEditingVariables: boolean;
  
  // Actions
  toggleVariableSelected: (id: string) => void;
  toggleEditingVariables: () => void;
}

// Mock data for variables
const initialVariableCategories: VariableCategory[] = [
  {
    id: 'cat1',
    name: 'Variable category 1',
    variables: [
      { id: 'var1', name: 'Carbon 1', category: 'cat1', active: false, description: 'Carbon 1 measures the primary carbon emissions from direct operations. This variable helps optimize for environmental sustainability by tracking the main sources of carbon in the operational process.' },
      { id: 'var2', name: 'Co2 Distribution', category: 'cat1', active: true, description: 'But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you\'re a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.' },
      { id: 'var3', name: 'Fleet sizing', category: 'cat1', active: true, description: 'Fleet sizing determines the optimal number of vehicles required in each zone. This variable balances operational costs with service levels by ensuring adequate coverage without excessive idle resources.' },
    ]
  },
  {
    id: 'cat2',
    name: 'Variable Category 2',
    variables: [
      { id: 'var4', name: 'Parking Rate', category: 'cat2', active: false, description: 'Parking Rate determines the cost structure for vehicle storage. This variable influences both revenue generation and user behavior by setting appropriate pricing for different parking durations and locations.' },
      { id: 'var5', name: 'Border Rate', category: 'cat2', active: true, description: 'Border Rate affects cross-zone operations and pricing. This variable optimizes revenue and resource allocation when vehicles move between different operational zones or jurisdictions.' },
      { id: 'var6', name: 'Request rate', category: 'cat2', active: true, description: 'Request Rate measures demand patterns across different times and locations. This variable helps predict usage peaks and optimize resource allocation for maximum efficiency and user satisfaction.' },
      { id: 'var7', name: 'Utilization Ratio', category: 'cat2', active: false, description: 'Utilization Ratio tracks how effectively resources are being used across the system. This variable identifies inefficiencies and helps maximize the return on infrastructure investments.' },
      { id: 'var8', name: 'Energy Consumption', category: 'cat2', active: true, description: 'Energy Consumption measures the power usage across the network. This variable helps optimize for sustainability and operational costs by identifying opportunities for energy efficiency.' },
    ]
  },
  {
    id: 'cat3',
    name: 'Variable Category 3',
    variables: [
      { id: 'var9', name: 'Maintenance Cost', category: 'cat3', active: false, description: 'Maintenance Cost tracks the expenditure required to keep the system operational. This variable balances preventive and reactive maintenance strategies to minimize downtime while controlling costs.' },
      { id: 'var10', name: 'User Satisfaction', category: 'cat3', active: true, description: 'User Satisfaction measures customer experience and feedback. This variable helps identify service improvements and ensure the system meets user expectations and needs.' },
      { id: 'var11', name: 'Infrastructure Density', category: 'cat3', active: true, description: 'Infrastructure Density determines the optimal distribution of resources across geographical areas. This variable balances accessibility with operational feasibility for maximum coverage efficiency.' },
    ]
  }
];

// Initial selected variables
const initialSelectedVariables = ['var2', 'var3', 'var5', 'var6', 'var8', 'var10', 'var11'];

export const useVariablesStore = create<VariablesState>((set) => ({
  // Initial state
  variableCategories: initialVariableCategories,
  selectedVariables: initialSelectedVariables,
  isEditingVariables: false,
  
  // Actions
  toggleVariableSelected: (id: string) =>
    set((state) => ({
      selectedVariables: state.selectedVariables.includes(id)
        ? state.selectedVariables.filter(varId => varId !== id)
        : [...state.selectedVariables, id]
    })),
    
  toggleEditingVariables: () =>
    set((state) => ({ isEditingVariables: !state.isEditingVariables })),
}));
