
import { useState } from "react";
import { Plus, Search, Calendar, CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Assignment {
  id: number;
  family: string;
  temple: string;
  dana: string;
  date: string;
  isConfirmed: boolean;
  confirmationDate?: string;
}

export const AssignmentManagement = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: 1,
      family: "Silva Family",
      temple: "Sri Maha Bodhi Temple",
      dana: "Morning Dana",
      date: "2024-12-24",
      isConfirmed: true,
      confirmationDate: "2024-12-20"
    },
    {
      id: 2,
      family: "Perera Family",
      temple: "Temple of Peace",
      dana: "Evening Dana",
      date: "2024-12-25",
      isConfirmed: false
    },
    {
      id: 3,
      family: "Fernando Family",
      temple: "Sri Maha Bodhi Temple",
      dana: "Special Dana",
      date: "2024-12-26",
      isConfirmed: true,
      confirmationDate: "2024-12-21"
    },
    {
      id: 4,
      family: "Wijesinghe Family",
      temple: "Temple of Peace",
      dana: "Afternoon Dana",
      date: "2024-12-27",
      isConfirmed: false
    }
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAssignments = assignments.filter(assignment =>
    assignment.family.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assignment.temple.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assignment.dana.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleConfirmAssignment = (id: number) => {
    setAssignments(prev => prev.map(assignment => 
      assignment.id === id 
        ? { ...assignment, isConfirmed: true, confirmationDate: new Date().toISOString().split('T')[0] }
        : assignment
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Assignment Management</h2>
          <p className="text-gray-600 mt-1">Manage dana assignments and schedules</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <Plus className="h-4 w-4 mr-2" />
          Create Assignment
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search assignments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredAssignments.map((assignment) => (
              <Card key={assignment.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-purple-600" />
                          <span className="font-semibold text-purple-800">{assignment.family}</span>
                        </div>
                        <Badge 
                          variant={assignment.isConfirmed ? "default" : "secondary"}
                          className={assignment.isConfirmed ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                        >
                          {assignment.isConfirmed ? (
                            <>
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Confirmed
                            </>
                          ) : (
                            <>
                              <Clock className="h-3 w-3 mr-1" />
                              Pending
                            </>
                          )}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Temple</p>
                          <p className="font-medium">{assignment.temple}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Dana Type</p>
                          <p className="font-medium">{assignment.dana}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Date</p>
                          <p className="font-medium flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(assignment.date).toLocaleDateString()}
                          </p>
                        </div>
                        {assignment.confirmationDate && (
                          <div>
                            <p className="text-gray-500">Confirmed On</p>
                            <p className="font-medium">{new Date(assignment.confirmationDate).toLocaleDateString()}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      {!assignment.isConfirmed && (
                        <Button 
                          size="sm" 
                          onClick={() => handleConfirmAssignment(assignment.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Confirm
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
