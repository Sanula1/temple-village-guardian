
import { useState } from "react";
import { HeadMonkSidebar } from "@/components/sidebars/HeadMonkSidebar";
import { Dashboard } from "@/components/Dashboard";
import { TempleManagement } from "@/components/TempleManagement";
import { DanaManagement } from "@/components/DanaManagement";
import { AssignmentManagement } from "@/components/AssignmentManagement";

export const HeadMonkDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "temples":
        return <TempleManagement />;
      case "dana":
        return <DanaManagement />;
      case "assignments":
        return <AssignmentManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex">
      <HeadMonkSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};
