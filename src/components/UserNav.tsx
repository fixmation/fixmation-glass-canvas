
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export function UserNav() {
  const { session } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Signed out successfully!');
      navigate('/');
    }
  };

  return (
    <div className="flex items-center gap-4">
      {session ? (
        <>
          <span className="hidden sm:inline-block text-sm font-medium text-gray-700 dark:text-gray-200">
            {session.user.email}
          </span>
          <Button onClick={handleLogout} variant="outline">Logout</Button>
        </>
      ) : (
        <Button asChild>
          <Link to="/auth">Login / Sign Up</Link>
        </Button>
      )}
    </div>
  );
}
