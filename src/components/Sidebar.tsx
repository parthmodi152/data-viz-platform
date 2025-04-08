
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserCircle, Menu, ChevronRight, LogOut, Settings } from 'lucide-react';
import { useSidebar } from '../contexts/SidebarContext';
import { NAVIGATION_TABS } from '../constants/navigation';
import { useAuth } from '../contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Sidebar: React.FC = () => {
  const { isExpanded, toggleSidebar, activeTab, setActiveTab } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const currentPath = location.pathname;
  
  // Helper function to determine if a path is active
  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.includes(path);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <aside 
      className={`h-screen bg-theme-darker fixed left-0 flex flex-col items-center py-8 transition-all duration-300 ${isExpanded ? 'w-56' : 'w-20'}`}
    >
      <div className="flex flex-col items-center gap-5 w-full">
        <button 
          onClick={toggleSidebar}
          className="p-2 text-white hover:bg-gray-1 rounded-[10px] transition-colors flex items-center justify-center w-[40px]"
        >
          {isExpanded ? <ChevronRight size={24} /> : <Menu size={24} />}
        </button>

        {NAVIGATION_TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <Link 
              key={tab.id}
              to={tab.path}
              className={`p-2 ${isActive(tab.path) ? 'text-white bg-gray-1' : 'text-[#858882] hover:text-white hover:bg-gray-1'} rounded-[10px] transition-colors flex items-center ${isExpanded ? 'w-[80%] justify-start' : 'justify-center'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={24} />
              {isExpanded && <span className="ml-3 text-sm font-medium">{tab.name}</span>}
            </Link>
          );
        })}
      </div>
      
      {/* User profile at bottom */}
      <div className="mt-auto mb-4 w-full flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className={`p-2 text-white hover:bg-gray-1 rounded-[10px] transition-colors flex items-center ${isExpanded ? 'w-[80%] justify-start' : 'justify-center'}`}>
              <UserCircle size={24} />
              {isExpanded && <span className="ml-3 text-sm font-medium">Profile</span>}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-[#242424] border-[#5A5A5A] text-white" align="end">
            <DropdownMenuLabel className="text-gray-300">My Account</DropdownMenuLabel>
            {user?.email && (
              <div className="px-2 py-1.5 text-sm text-gray-400">{user.email}</div>
            )}
            <DropdownMenuSeparator className="bg-[#5A5A5A]" />
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-[#5A5A5A]/20 text-white"
              onClick={handleSignOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
};

export default Sidebar;
