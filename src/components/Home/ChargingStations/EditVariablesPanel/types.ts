// Export common types used across EditVariablesPanel components

export interface Variable {
  id: string;
  name: string;
  category: string;
  description?: string;
}

export interface VariableCategory {
  id: string;
  name: string;
  variables: Variable[];
} 