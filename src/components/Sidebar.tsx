
import { Building, Home, Users, Heart, Calendar, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "temples", label: "Temples", icon: Building },
    { id: "villages", label: "Villages", icon: Home },
    { id: "families", label: "Families", icon: Users },
    { id: "dana", label: "Dana Types", icon: Heart },
    { id: "assignments", label: "Assignments", icon: Calendar },
  ];

  return (
    <div className="w-64 bg-white shadow-lg border-r border-orange-200">
      <div className="p-6 border-b border-orange-200">
        <h1 className="text-2xl font-bold text-orange-800">Dana Manager</h1>
        <p className="text-sm text-orange-600 mt-1">Temple Management System</p>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center px-6 py-3 text-left transition-colors",
                "hover:bg-orange-50 hover:text-orange-700",
                activeTab === item.id
                  ? "bg-orange-100 text-orange-800 border-r-2 border-orange-500"
                  : "text-gray-600"
              )}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
