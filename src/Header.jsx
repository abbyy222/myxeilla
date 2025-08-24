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
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);

  const handleOpenCalendar = () => {
    setIsCalendarOpen(true);
  };
  const handleCloseCalendar = () => {
    setIsCalendarOpen(false);
  };
  const handleOpenBudget = () => {
    setIsBudgetOpen(true);
  };
  const handleCloseBudget = () => {
    setIsBudgetOpen(false);
  };

  return ( 
    <>
      {/* The main header container. Added `md:px-6` to have consistent padding on medium screens and up.
        `flex-wrap` is added to allow items to wrap to a new line on smaller screens if they don't fit. */}
      <div className="flex flex-wrap justify-between items-center w-full px-4 md:px-6 py-4 bg-black text-white"> 
        {/* Left side: Logo and 'Join' */} 
        <div className="flex items-center gap-2 md:gap-6"> 
          <div className="flex items-center gap-1 md:gap-2"> 
            <MyxeillaLogoSVG className="h-6 w-6" /> 
            <span className="text-lg md:text-xl font-bold">myxeilla</span> 
          </div> 
        </div> 
        
        {/* Right side: Icons and User Profile */} 
        {/* Added `flex-wrap` to this container as well, so icons can wrap if needed. */}
        <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-2 md:mt-0"> 
          <NotificationSVG className="h-5 w-5 md:h-6 md:w-6" /> 
          
          <div onClick={handleOpenCalendar} className="cursor-pointer">
            <CalendarSVG className="h-5 w-5 md:h-6 md:w-6" /> 
          </div>

          <div onClick={handleOpenBudget} className="cursor-pointer">
            <CalculatorSVG className="h-5 w-5 md:h-6 md:w-6" /> 
          </div>

          <MessageSVG className="h-5 w-5 md:h-6 md:w-6" /> 

          {/* User Profile */} 
          <div className="flex items-center gap-2"> 
            <DSVG className="h-7 w-7 md:h-8 md:w-8" /> 
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
