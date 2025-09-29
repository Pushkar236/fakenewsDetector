import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import ThemeToggle from "@/components/ThemeToggle";
import NewsCheckDetector from "@/components/NewsCheckDetector";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <img
              src="/src/images/newscheck-logo.png"
              alt="NewsCheck Logo"
              className="h-10 w-10"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              NewsCheck - Fake News Detector
            </h1>
          </div>
          <ThemeToggle />
        </header>

        <Routes>
          <Route path="/" element={<NewsCheckDetector />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
