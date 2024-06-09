'use client'
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const login = async () => {
    try {
      setIsAuthenticated(true);
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: "michaelw",
        password: "michaelwpass",
        expiresInMins: 30 // optional, defaults to 60
      });
      console.log(response.data);
      sessionStorage.setItem('Data token', response.data.token);
      sessionStorage.setItem('Refresh token', response.data.refreshToken);
      sessionStorage.setItem('isAuthenticated', 'true');
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    console.log('logout');
    try {
      setIsAuthenticated(false);
      await axios.post('https://dummyjson.com/auth/refresh', {
        refreshToken: sessionStorage.getItem('Refresh token'),
        expiresInMins: 30 // optional, defaults to 60
      });
      sessionStorage.removeItem('Data token');
      sessionStorage.removeItem('Refresh token');
      sessionStorage.removeItem('isAuthenticated');
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
    if (!authStatus) {
      router.push('/login');
    }
  }, [router]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
