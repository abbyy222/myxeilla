import React from 'react';
import  DashboardSVG from '../src/svg/Dashboard.jsx';
import { FaTachometerAlt, FaList, FaUsers, FaFolderOpen, FaRegAddressBook } from 'react-icons/fa';

const navItems = [
  { name: 'Dashboard', icon: DashboardSVG, active: true },
  { name: 'Listings', icon: FaList, active: false },
  { name: 'Users', icon: FaUsers, active: false },
  { name: 'Request', icon: FaFolderOpen, active: false },
  { name: 'Applications', icon: FaRegAddressBook, active: false },
];

const SidebarNav = () => {
  return (
    <div className="flex flex-col gap-2">
      {navItems.map((item) => (
        <a
          key={item.name}
          href="#"
          className={`flex items-center gap-2 p-3 rounded-lg font-medium transition-colors
            ${item.active ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
        >
          <item.icon />
          <span>{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SidebarNav;