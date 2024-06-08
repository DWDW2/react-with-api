// components/PrivateRoute.tsx
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!authContext?.authToken) {
      router.push('/login');
    }
  }, [authContext, router]);

  if (!authContext?.authToken) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
};

export default PrivateRoute;
