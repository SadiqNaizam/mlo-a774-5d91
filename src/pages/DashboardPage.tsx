import React from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { LogOut } from 'lucide-react';

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Navigate back to the login page as defined in App.tsx
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome to Your Dashboard</CardTitle>
            <CardDescription>You have successfully logged in.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center space-x-4 p-4 border rounded-lg">
              <Avatar>
                {/* Placeholder image, in a real app this would be the user's avatar URL */}
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="font-semibold">Jane Doe</p>
                <p className="text-sm text-muted-foreground">jane.doe@example.com</p>
              </div>
            </div>
            <Button onClick={handleLogout} className="w-full" variant="destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;