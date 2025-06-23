
import { useState } from "react";
import { MemberSidebar } from "@/components/sidebars/MemberSidebar";
import { Dashboard } from "@/components/Dashboard";
import { MemberAssignments } from "@/components/MemberAssignments";

export const MemberDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "assignments":
        return <MemberAssignments />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex">
      <MemberSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};
