
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { TempleManagement } from "@/components/TempleManagement";
import { VillageManagement } from "@/components/VillageManagement";
import { FamilyManagement } from "@/components/FamilyManagement";
import { DanaManagement } from "@/components/DanaManagement";
import { AssignmentManagement } from "@/components/AssignmentManagement";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "temples":
        return <TempleManagement />;
      case "villages":
        return <VillageManagement />;
      case "families":
        return <FamilyManagement />;
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
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
