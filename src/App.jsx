import React from 'react';
import './index.css';
import Header from '../src/Header';
import Sidebar from '../src/Sidebar';
import DashboardContent from '../src/DashboardContent';

const App = () => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      {/* Top Black Header */}
      <Header />
      
      {/* Second Horizontal Navigation Header */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <DashboardContent />
    </div>
  );
};

export default App;