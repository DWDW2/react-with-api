'use client'
import { useAuth } from "./context/AuthContext";
import Media from "./components/layout/SkeletonFrame";
import { useState, useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

function App() {
    const {isAuthenticated, login, logout} = useAuth();
    const router = useRouter()
    useEffect(() => {
      if(!isAuthenticated) {
        router.refresh()
      }
    })
  return (
    <div className="flex-grow dark:bg-slate-900"> 
      <header className="bg-white shadow dark:bg-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome to ArticlesSite
        </h1>
        <p className="mt-2 text-lg text-gray-600">Discover a wealth of knowledge and insights through our carefully curated articles. To get started you need to login! </p>
      </div>
      </header>
    </div>
  );
}

export default App;

