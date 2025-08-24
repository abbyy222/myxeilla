import React from 'react';
import { FaChartLine, FaUsers, FaHome } from 'react-icons/fa';

import  ListingSVG from '../src/svg/listingOver.jsx';
import  UserSVG from '../src/svg/UsersOver.jsx';
import MostClicked from "./assets/MostClicked.png";
import HottestL from "./assets/HottestL.jpg";
import MostWatched from "./assets/MostWatched.png";


import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Data to populate the chart
const chartData = [
  { month: 'Jan', green: 36, blue: 28, red: 10 },
  { month: 'Feb', green: 5, blue: 28, red: 10 },
  { month: 'Mar', green: 15, blue: 5, red: 2 },
  { month: 'Apr', green: 15, blue: 27, red: 10 },
  { month: 'May', green: 10, blue: 3, red: 7 },
  { month: 'Jun', green: 36, blue: 50, red: 10 },
  { month: 'Jul', green: 25, blue: 36, red: 15 },
  { month: 'Aug', green: 25, blue: 5, red: 15 },
  { month: 'Sep', green: 36, blue: 34, red: 5 },
];

const DashboardContent = () => {
  return (
    <div className="p-6">
      {/* Welcome Section */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome, Ahmed</h2>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sales Overview Section (Left Column) */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-medium">Sales Overview</h3>
            <button className="text-sm px-6 py-2 rounded-full border border-gray-300">View Transactions</button>
          </div>
          <p className="text-sm text-gray-500 mb-4">Showing overview Jan 2022 - Sep 2022</p>
          
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Chart Container - Now with a fixed width */}
            <div className="flex flex-col items-start w-full md:w-[60%]">
              <div className="flex justify-between items-center w-full mb-2">
                <span className="text-sm text-gray-500">₦ (Millions)</span>
                <div className="flex gap-2 text-sm text-gray-500">
                  <span className="px-2 py-1 rounded-md">1 Week</span>
                  <span className="px-2 py-1 rounded-md">1 Month</span>
                  <span className="px-2 py-1 rounded-md bg-gray-200">1 Year</span>
                </div>
              </div>
              <div className="w-full h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{ top: 5, right: 0, left: -20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis tickFormatter={(value) => `${value}m`} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Bar dataKey="green" fill="#00A76F" />
                    <Bar dataKey="blue" fill="#007BFF" />
                    <Bar dataKey="red" fill="#FF5630" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Metric Cards Container - Now using flex-grow */}
<<<<<<< Updated upstream
   <div className="grid grid-cols-2 gap-4 flex-grow">
=======
        <div className="grid grid-cols-2 gap-4 flex-grow">
>>>>>>> Stashed changes
    <div className="bg-white rounded-xl border border-gray-200 px-2 sm:px-4 py-2">
        <p className="text-sm sm:text-base md:text-lg font-bold text-blue-500">₦120,000,000.00</p>
        <p className="text-xs text-gray-500">Total Inflow <span className="text-green-500">3.6%</span></p>
    </div>
    <div className="bg-white rounded-xl border border-gray-200 px-2 sm:px-4 py-2">
        <p className="text-sm sm:text-base md:text-lg font-bold text-green-500">₦50,000,000.00</p>
        <p className="text-xs text-gray-500">MRR <span className="text-green-500">2.5%</span></p>
    </div>
    <div className="bg-white rounded-xl border border-gray-200 px-2 sm:px-4 py-2">
        <p className="text-sm sm:text-base md:text-lg font-bold text-green-500">₦200,000,000.00</p>
        <p className="text-xs text-gray-500">Commission Revenue <span className="text-green-500">0.8%</span></p>
    </div>
    <div className="bg-white rounded-xl border border-gray-200 px-2 sm:px-4 py-2">
        <p className="text-sm sm:text-base md:text-lg font-bold text-red-500">₦100,000,000.00</p>
        <p className="text-xs text-gray-500">GMV <span className="text-red-500">0.6%</span></p>
    </div>
</div>
          </div>
        </div>

        {/* Right-side Columns */}
        <div className="flex flex-col gap-6">
          {/* Listings Overview Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <ListingSVG className="bg-blue-500" />
                <h3 className="text-xl font-medium">Listings Overview</h3>
              </div>
              <span className="text-sm text-blue-500 cursor-pointer">View all &gt;</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="font-semibold text-lg">1.8k</p>
                <p className="text-xs text-gray-500">Total</p>
              </div>
              <div>
                <p className="font-semibold text-lg">80</p>
                <p className="text-xs text-gray-500">Active</p>
              </div>
              <div>
                <p className="font-semibold text-lg">1k</p>
                <p className="text-xs text-gray-500">Archived</p>
              </div>
            </div>
          </div>
          
          {/* Users Overview Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <UserSVG className="text-purple-500" />
                <h3 className="text-xl font-medium">Users Overview</h3>
              </div>
              <span className="text-sm text-blue-500 cursor-pointer">View all &gt;</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="font-semibold text-lg">20.7k</p>
                <p className="text-xs text-gray-500">Total</p>
              </div>
              <div>
                <p className="font-semibold text-lg">8.5k</p>
                <p className="text-xs text-gray-500">Riders</p>
              </div>
              <div>
                <p className="font-semibold text-lg">7.5k</p>
                <p className="text-xs text-gray-500">Subscribers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Listings Section */}
      <div className="mt-6">
        <h3 className="text-xl font-medium mb-4">Featured Listings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Placeholder for image cards */}
          <div className="h-70  rounded-lg overflow-hidden relative">
            <img src={MostClicked}  className="object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
              
            </div>
          </div>
          <div className="h-70  rounded-lg overflow-hidden relative">
            <img src={MostWatched}   className="object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
             
            </div>
          </div>
          <div className="h-70 bg-gray-200 rounded-lg overflow-hidden relative">
            <img src={HottestL}   className="object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
