
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Dumbbell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
        <Card className="p-6 backdrop-blur-sm bg-white/90">
          <div className="flex items-center space-x-4 mb-6">
            <User className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold">Welcome back!</h2>
              <p className="text-gray-600">Your fitness journey continues</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 bg-white/50">
              <h3 className="font-medium mb-2">Current Stats</h3>
              <p>Weight: {userData.weight} kg</p>
              <p>Body Fat: {userData.bodyFat}%</p>
            </Card>
            <Card className="p-4 bg-white/50">
              <h3 className="font-medium mb-2">Goal</h3>
              <p>{userData.goal}</p>
            </Card>
            <Card className="p-4 bg-white/50">
              <h3 className="font-medium mb-2">Today's Progress</h3>
              <p>Workout completed: 0/1</p>
            </Card>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 backdrop-blur-sm bg-white/90">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Dumbbell className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Workouts</h3>
              </div>
              <Button onClick={() => navigate("/workouts")}>View All</Button>
            </div>
            <p className="text-gray-600">Create and track your workouts</p>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-white/90">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Activity className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">My Journey</h3>
              </div>
              <Button onClick={() => navigate("/journey")}>View Progress</Button>
            </div>
            <p className="text-gray-600">Track your fitness progress</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
