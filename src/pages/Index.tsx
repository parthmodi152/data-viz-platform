import React from 'react';
import { useLocation } from 'react-router-dom';
import { useVariablesStore } from '../store/variablesStore';
import { useSidebar } from '../contexts/SidebarContext';
import Sidebar from '../components/Sidebar';
import TopNavigation from '../components/TopNavigation';
import PageHeader from '../components/Home/ChargingStations/PageHeader';
import ScenarioSection from '../components/Home/ChargingStations/ScenarioSection/ScenarioSection';
import KPISection from '../components/Home/ChargingStations/KPISection/KPISection';
import GraphSection from '../components/Home/ChargingStations/GraphSection/GraphSection';
import EditVariablesPanel from '../components/Home/ChargingStations/EditVariablesPanel/EditVariablesPanel';
import { getTopbarNavigation, getPageInfo } from '../constants/navigation';

const Index: React.FC = () => {
  const { toggleEditingVariables } = useVariablesStore();
  
  const { isExpanded } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Get topbar navigation items based on the current path
  const topbarItems = getTopbarNavigation(currentPath);
  
  // Get the page information (icon and title) based on current path
  const pageInfoData = getPageInfo(currentPath);
  const PageIcon = pageInfoData.icon;
  const pageTitle = pageInfoData.title;
  
  return <div>
      <Sidebar />
      <EditVariablesPanel />
      
      {/* Main content */}
      <div className={`transition-all duration-300 ${isExpanded ? 'ml-56' : 'ml-[80px]'}`}>
        {/* Top navigation */}
        <TopNavigation items={topbarItems} />
        
        {/* Main dashboard content */}
        <main className="p-10 bg-[#161618] min-h-screen border-t border-l rounded-[5px]">
          <PageHeader 
            icon={PageIcon}
            title={pageTitle}
            onEditVariablesClick={toggleEditingVariables}
          />
          
          {/* Best Scenario Results */}
          <ScenarioSection />
          
          {/* Dashboard Grid */}
          <div className="flex flex-col lg:flex-row gap-[20px]">
            {/* Graphs section - takes 60% width */}
            <GraphSection className="lg:w-[60%]" />
            
            {/* KPI section - takes 40% width */}
            <KPISection className="lg:w-[40%]" />
          </div>
        </main>
      </div>
    </div>;
};

export default Index;
