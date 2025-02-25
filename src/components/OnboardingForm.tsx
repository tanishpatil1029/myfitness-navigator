
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface UserData {
  height: string;
  weight: string;
  bodyFat: string;
  age: string;
  goal: string;
}

export const OnboardingForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<UserData>({
    height: "",
    weight: "",
    bodyFat: "",
    age: "",
    goal: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <Card className="w-full max-w-md p-8 backdrop-blur-sm bg-white/90 shadow-xl animate-fade-in">
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-center mb-6">Basic Information</h2>
              <div>
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  name="height"
                  type="number"
                  required
                  value={userData.height}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  name="weight"
                  type="number"
                  required
                  value={userData.weight}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-center mb-6">More About You</h2>
              <div>
                <Label htmlFor="bodyFat">Body Fat %</Label>
                <Input
                  id="bodyFat"
                  name="bodyFat"
                  type="number"
                  required
                  value={userData.bodyFat}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  required
                  value={userData.age}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-center mb-6">Your Goals</h2>
              <div>
                <Label htmlFor="goal">Fitness Goal</Label>
                <select
                  id="goal"
                  name="goal"
                  required
                  value={userData.goal}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border rounded-md"
                >
                  <option value="">Select a goal</option>
                  <option value="weightLoss">Weight Loss</option>
                  <option value="muscleGain">Muscle Gain</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="endurance">Endurance</option>
                </select>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4">
            {step > 1 && (
              <Button
                type="button"
                onClick={() => setStep(step - 1)}
                variant="outline"
              >
                Previous
              </Button>
            )}
            <Button
              type="submit"
              className="ml-auto bg-primary hover:bg-primary/90"
            >
              {step === 3 ? "Complete" : "Next"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
