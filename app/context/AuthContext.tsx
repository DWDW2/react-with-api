'use client'
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
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

  const login = () => {
    axios.post('https://dummyjson.com/auth/login', {
      username: "michaelw",
      password: "michaelwpass",
      expiresInMins: 30 // optional, defaults to 60
    })
    .then(response => {
      console.log(response.data)
      sessionStorage.setItem('Data token', response.data.token)
      sessionStorage.setItem('Refresh token', response.data.refreshToken);
    })
    .catch(error => {
      console.error(error);
    });
    setIsAuthenticated(true);
    sessionStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    axios.post('https://dummyjson.com/auth/refresh', {
      refreshToken: sessionStorage.getItem('Refresh token'),
      expiresInMins: 30 // optional, defaults to 60
    }
  ).then(response => {
    sessionStorage.removeItem('Data token');
    sessionStorage.removeItem('Refresh token');
  })
  .catch(error => {
    console.error(error);
  });
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem('isAuthenticated')) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

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
