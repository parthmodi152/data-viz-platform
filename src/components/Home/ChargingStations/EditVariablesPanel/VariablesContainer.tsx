import React, { useState, useRef, useEffect } from 'react';
import { VariableCategory } from './types';
import VariableOption from './VariableOption';
import VariableContext from './VariableContext';
import { useIsMobile } from '../../../../hooks/use-mobile';

export interface VariablesContainerProps {
  categories: VariableCategory[];
  selectedVariables: string[];
  onToggleSelect: (varId: string, e: React.MouseEvent) => void;
}

const VariablesContainer: React.FC<VariablesContainerProps> = ({
  categories,
  selectedVariables,
  onToggleSelect
}) => {
  const [activeContextWindow, setActiveContextWindow] = useState<string | null>(null);
  const [hoverTarget, setHoverTarget] = useState<string | null>(null);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();
  
  // Handle hover with delay (desktop only)
  useEffect(() => {
    // Skip hover logic on mobile
    if (isMobile) return;
    
    // Clear any existing timer
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }

    // If hovering over something, set a timer to show context after delay
    if (hoverTarget) {
      hoverTimerRef.current = setTimeout(() => {
        setActiveContextWindow(hoverTarget);
      }, 1500); // 1.5 second delay
    } else {
      // If not hovering, immediately hide context
      setActiveContextWindow(null);
    }

    // Cleanup on unmount or when dependencies change
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
        hoverTimerRef.current = null;
      }
    };
  }, [hoverTarget, isMobile]);
  
  // Custom toggle handler that also manages context window on mobile
  const handleToggleSelect = (varId: string, e: React.MouseEvent) => {
    onToggleSelect(varId, e);
    
    // On mobile, toggle context window when selecting/deselecting
    if (isMobile) {
      setActiveContextWindow(prevActive => 
        prevActive === varId ? null : varId
      );
    }
  };
  
  // Find the active variable details
  const getActiveVariable = () => {
    if (!activeContextWindow) return null;
    
    for (const category of categories) {
      const variable = category.variables.find(v => v.id === activeContextWindow);
      if (variable) return variable;
    }
    return null;
  };
  
  return (
    <div className="bg-[#161618] border border-gray-1 rounded-[5px] overflow-y-auto flex flex-col">
      <div className="p-[20px] sm:p-[30px]">
        {categories.map(category => (
          <div key={category.id} className="mb-6">
            <h3 className="text-white text-sm mb-3">{category.name}</h3>
            <div className="flex flex-wrap gap-2 sm:gap-5">
              {category.variables.map(variable => (
                <div 
                  key={variable.id} 
                  className="group"
                  onMouseEnter={() => !isMobile && setHoverTarget(variable.id)}
                  onMouseLeave={() => !isMobile && setHoverTarget(null)}
                >
                  <VariableOption
                    name={variable.name}
                    isSelected={selectedVariables.includes(variable.id)}
                    onToggleSelect={(e) => handleToggleSelect(variable.id, e)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Context window that appears based on activeContextWindow state */}
      {activeContextWindow && (() => {
        const activeVariable = getActiveVariable();
        if (!activeVariable) return null;
        
        return (
          <VariableContext 
            key={activeVariable.id}
            name={activeVariable.name}
            description={activeVariable.description}
          />
        );
      })()}
    </div>
  );
};

export default VariablesContainer; 