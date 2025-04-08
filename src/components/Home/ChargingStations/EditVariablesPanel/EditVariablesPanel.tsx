import React, { useState } from 'react';
import { useVariablesStore } from '../../../../store/variablesStore';
import { ModalPanel } from '../../../../components/ModalPanel';
import { useIsMobile } from '../../../../hooks/use-mobile';
import ActionBar from './ActionBar';
import VariablesContainer from './VariablesContainer';
import AccordionSection from './AccordionSection';

const EditVariablesPanel: React.FC = () => {
  const { 
    isEditingVariables, 
    toggleEditingVariables,
    variableCategories,
    selectedVariables,
    toggleVariableSelected,
  } = useVariablesStore();
  
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();
  
  const handleClose = () => {
    toggleEditingVariables();
  };

  const handleToggleSelect = (varId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleVariableSelected(varId);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <ModalPanel
      isOpen={isEditingVariables}
      onClose={handleClose}
      title="Edit Variables"
      width={isMobile ? "w-full" : "sm:w-[691px]"}
    >
      <ActionBar 
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      
      <VariablesContainer
        categories={variableCategories}
        selectedVariables={selectedVariables}
        onToggleSelect={handleToggleSelect}
      />
      
      {/* Accordion Sections */}
      <AccordionSection title="Primary Variables" />
      <AccordionSection title="Secondary Variables" />
    </ModalPanel>
  );
};

export default EditVariablesPanel;
