import React from 'react';
import  DashboardSVG from '../src/svg/Dashboard.jsx';
import  ListingSVG from '../src/svg/Listings.jsx';
import  UserSVG from '../src/svg/Users.jsx';
import  RequestSVG from '../src/svg/Request.jsx';
import  ApplicationSVG from '../src/svg/Application.jsx';



const navItems = [
  { name: 'Dashboard', icon: DashboardSVG, active: true },
  { name: 'Listings', icon: ListingSVG, active: false },
  { name: 'Users', icon: UserSVG, active: false },
  { name: 'Request', icon: RequestSVG, active: false },
  { name: 'Applications', icon: ApplicationSVG, active: false },
];

const SecondaryHeader = () => {
  return (
    <div className="flex justify-between items-center w-full bg-white px-6 py-2 border-b border-gray-200">
      <div className="flex items-center gap-4">
        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center gap-2 p-3 rounded-lg font-medium transition-colors
              ${item.active ? 'bg-gray-200 text-black-600' : 'text-gray-600 hover:bg-gray-200'}`}
          >
            <item.icon />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
      
      {/* Search Bar */}
      <div className="hidden lg:block relative">
        <input 
          type="text" 
          placeholder="Search listings, users here..." 
          className="pl-4 pr-10 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        {/* Search Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default SecondaryHeader;