import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Session, User } from '@supabase/supabase-js';

type AppRole = 'admin' | 'user';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  userRole: AppRole | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<AppRole | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchUserRole = async (userId: string) => {
        try {
            // The (supabase as any) cast is a workaround for stale Supabase types.
            const { data, error } = await (supabase as any)
                .from('user_roles')
                .select('role')
                .eq('user_id', userId);

            if (error) throw error;

            if (data?.some((roleObj: { role: string }) => roleObj.role === 'admin')) {
                setUserRole('admin');
            } else if (data && data.length > 0) {
                setUserRole('user');
            } else {
                setUserRole(null);
            }
        } catch (error) {
            console.error("Error fetching user role", error);
            setUserRole(null);
        }
    };
    
    const setSessionData = (session: Session | null) => {
        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
            return fetchUserRole(session.user.id);
        } else {
            setUserRole(null);
            return Promise.resolve();
        }
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
        setSessionData(session).finally(() => setLoading(false));
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSessionData(session);
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const value = {
    session,
    user,
    userRole,
    loading,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
