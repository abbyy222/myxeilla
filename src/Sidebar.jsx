import React from 'react';
import DashboardSVG from '../src/svg/Dashboard.jsx';
import ListingSVG from '../src/svg/Listings.jsx';
import UserSVG from '../src/svg/Users.jsx';
import RequestSVG from '../src/svg/Request.jsx';
import ApplicationSVG from '../src/svg/Application.jsx';

const navItems = [
  { name: 'Dashboard', icon: DashboardSVG, active: true },
  { name: 'Listings', icon: ListingSVG, active: false },
  { name: 'Users', icon: UserSVG, active: false },
  { name: 'Request', icon: RequestSVG, active: false },
  { name: 'Applications', icon: ApplicationSVG, active: false },
];

const SecondaryHeader = () => {
  return (
    // The main container. Use `flex-wrap` to allow items to wrap on smaller screens.
    // The `lg:justify-between` and `lg:items-center` will restore the desktop layout.
    <div className="flex flex-wrap lg:justify-between lg:items-center w-full bg-white px-4 md:px-6 py-2 border-b border-gray-200">
      
      {/* Navigation Items */}
      {/* This container will wrap its items onto multiple lines if they don't fit. 
        `gap-1` and smaller horizontal padding (`px-2`) on mobile screens keep the items from overflowing.
        `flex-grow` allows the items to take up the full available width on mobile. */}
      <div className="flex flex-wrap items-center gap-1 md:gap-4 flex-grow">
        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center gap-1 md:gap-2 px-2 py-2 md:p-3 rounded-lg font-medium transition-colors text-sm md:text-base
              ${item.active ? 'bg-gray-200 text-black-600' : 'text-gray-600 hover:bg-gray-200'}`}
          >
            <item.icon className="h-4 w-4 md:h-5 md:w-5" />
            <span className="hidden md:inline">{item.name}</span>
          </a>
        ))}
      </div>
      
      {/* Search Bar */}
      {/* This is a crucial change: on small screens, the search bar is hidden completely.
        On large screens and up, it becomes a block element.
        The `w-full mt-2 lg:w-auto lg:mt-0` classes ensure the search bar takes up
        the full width and adds a top margin when on its own line on a small screen. */}
      <div className="hidden lg:block relative w-full mt-2 lg:w-auto lg:mt-0">
        <input 
          type="text" 
          placeholder="Search listings, users here..." 
          className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default SecondaryHeader;
