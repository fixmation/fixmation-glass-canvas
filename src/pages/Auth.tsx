
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LoginForm } from '@/components/LoginForm';
import { SignupForm } from '@/components/SignupForm';
import { AdminSignupForm } from '@/components/AdminSignupForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SiteHeader from "@/components/SiteHeader";
import { PasswordRecoveryForm } from '@/components/PasswordRecoveryForm';

const Auth = () => {
  const { session } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('signin');

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-100/60 dark:from-slate-900 dark:via-purple-900/50 dark:to-indigo-950">
      <SiteHeader />
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
              <TabsTrigger value="admin-signup">Admin Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <LoginForm onForgotPassword={() => setActiveTab('recovery')} />
            </TabsContent>
            <TabsContent value="signup">
              <SignupForm />
            </TabsContent>
            <TabsContent value="admin-signup">
              <AdminSignupForm />
            </TabsContent>
            <TabsContent value="recovery">
              <PasswordRecoveryForm onBackToLogin={() => setActiveTab('signin')} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
