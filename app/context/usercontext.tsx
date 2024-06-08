import React from 'react';

interface UserContextType {
  name: string;
  age: number;
  updateUser: (name: string, age: number) => void;
}

const UserContext = React.createContext<UserContextType | null>(null);

const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = React.useState<UserContextType>({
      name: 'John Doe',
      age: 30,
      updateUser: (name: string, age: number) => setUser({ name, age }),
    });
  
    return (
      <UserContext.Provider value={user}>
        {children}
      </UserContext.Provider>
    );
  };
  