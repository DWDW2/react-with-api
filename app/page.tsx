'use client'
import { useAuth } from "./context/AuthContext";
import SkeletonFrame from "./components/layout/SkeletonFrame";
import { useState } from "react";



function App() {
  const { logout, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);
  if(!isAuthenticated) {
  return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ml-5 mr-5 mt-5">
        <SkeletonFrame loading={loading} />
        <SkeletonFrame loading={loading} />
        <SkeletonFrame loading={loading} />
        <SkeletonFrame loading={loading} />
        <SkeletonFrame loading={loading} />
        <SkeletonFrame loading={loading} />
      </div>
  );
  }else{
    return (
      <div className="App flex-grow">
        <button onClick={() => logout()}>Logout</button>
      </div>
    );
  }
}
export default App;

