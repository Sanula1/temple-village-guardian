
import { useState } from "react";
import { Plus, Search, Edit, Trash, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Family {
  id: number;
  familyName: string;
  address: string;
  telephone: string;
  memberCount: number;
  village: string;
}

export const FamilyManagement = () => {
  const [families, setFamilies] = useState<Family[]>([
    {
      id: 1,
      familyName: "Silva Family",
      address: "123 Main Street, Colombo",
      telephone: "+94 11 234 5678",
      memberCount: 4,
      village: "Colombo Village"
    },
    {
      id: 2,
      familyName: "Perera Family",
      address: "456 Temple Road, Kandy",
      telephone: "+94 81 987 6543",
      memberCount: 6,
      village: "Kandy Village"
    },
    {
      id: 3,
      familyName: "Fernando Family",
      address: "789 Buddha Avenue, Galle",
      telephone: "+94 91 555 1234",
      memberCount: 3,
      village: "Galle Village"
    }
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFamilies = families.filter(family =>
    family.familyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    family.village.toLowerCase().includes(searchTerm.toLowerCase()) ||
    family.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Family Management</h2>
          <p className="text-gray-600 mt-1">Manage family information and members</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Family
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search families..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFamilies.map((family) => (
              <Card key={family.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-purple-800 flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {family.familyName}
                    </CardTitle>
                    <Badge variant="secondary">{family.memberCount} members</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-sm font-medium">{family.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Village</p>
                    <p className="text-sm font-medium">{family.village}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-3 w-3 text-gray-400" />
                    <p className="text-sm font-medium">{family.telephone}</p>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                      <Trash className="h-3 w-3" />
                    </Button>
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
