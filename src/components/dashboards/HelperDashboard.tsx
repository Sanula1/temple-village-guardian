
import { useState } from "react";
import { HelperSidebar } from "@/components/sidebars/HelperSidebar";
import { Dashboard } from "@/components/Dashboard";
import { AssignmentManagement } from "@/components/AssignmentManagement";

export const HelperDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "assignments":
        return <AssignmentManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex">
      <HelperSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};
