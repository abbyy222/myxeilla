import React, { useState } from 'react'; // Import useState
import { FaHeadphonesSimple } from 'react-icons/fa6'; 

// Import SVG icons as React components 
import MyxeillaLogoSVG from '../src/svg/myxeilla_logo.jsx'; 
import NotificationSVG from '../src/svg/notification.jsx'; 
import CalendarSVG from '../src/svg/calender.jsx'; 
import CalculatorSVG from '../src/svg/calculator.jsx'; 
import MessageSVG from '../src/svg/message.jsx'; 

import DSVG from '../src/svg/d_profile.jsx'; 

// Import the new Calendar Modal and Budget Modal component
import CalendarModal from '../src/CalenderModal.jsx'; 
import BudgetModal from '../src/BudgetModal.jsx';

const Header = () => {
  // Use state to track the modal's open/closed status
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
   const [isBudgetOpen, setIsBudgetOpen] = useState(false);

  // Functions to open and close the modal
  const handleOpenCalendar = () => {
    setIsCalendarOpen(true);
  };

  const handleCloseCalendar = () => {
    setIsCalendarOpen(false);
  };
  // Functions to open and close the Budget Modal
  const handleOpenBudget = () => {
    setIsBudgetOpen(true);
  };
  const handleCloseBudget = () => {
    setIsBudgetOpen(false);
  };


  return ( 
    <>
      <div className="flex justify-between items-center w-full px-6 py-4 bg-black text-white"> 
        {/* Left side: Logo and 'Join' */} 
        <div className="flex items-center gap-6"> 
          {/* Myxeilla Logo with Text */} 
          <div className="flex items-center gap-2"> 
            <MyxeillaLogoSVG className="h-6 w-6" /> {/* Adjust size as needed */} 
            <span className="text-xl font-bold">myxeilla</span> 
          </div> 
        </div> 
        
        {/* Right side: Icons and User Profile */} 
        <div className="flex items-center gap-4"> 
          <NotificationSVG className="h-6 w-6" /> 
          
          {/* Calendar Icon - now with a click handler */}
          <div onClick={handleOpenCalendar} className="cursor-pointer">
            <CalendarSVG className="h-6 w-6" /> 
          </div>

          <div onClick={handleOpenBudget} className="cursor-pointer">
            <CalculatorSVG className="h-6 w-6" /> 
          </div>

          <MessageSVG className="h-6 w-6" /> 

          {/* User Profile */} 
          <div className="flex items-center gap-2"> 
            <DSVG className="h-8 w-8" /> 
          </div> 
        </div> 
      </div> 
      
      {/* Render the Calendar Modal and Budget Modal component here */}
      <CalendarModal isOpen={isCalendarOpen} onClose={handleCloseCalendar} />
       <BudgetModal isOpen={isBudgetOpen} onClose={handleCloseBudget} />
    </>
  ); 
}; 

export default Header;