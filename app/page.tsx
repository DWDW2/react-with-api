'use client'
import { useAuth } from "./context/AuthContext";
import Media from "./components/layout/SkeletonFrame";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


function App() {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);

  return(
    <div>
      <Media loading={true} />
    </div>
  )
}

export default App;

