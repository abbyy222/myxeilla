import React from 'react';

// Import the new Budget SVG component
import BudgetSVG from '../src/svg/BudgetSVG.jsx';
import AnalysisSVG from '../src/svg/AnalysisSVG.jsx';
import GraphSVG from '../src/svg/GraphSVG.jsx';
import SettingsSVG from '../src/svg/SettingsSVG.jsx';
 // Assuming you've created this file

// NOTE: You will need to create the `BudgetSVG.jsx` file with the SVG code you provided.

// You can also place the SVG code directly in this file if you prefer not to create a new one.
// const BudgetSVG = () => (
//   <svg width="438" height="213" viewBox="0 0 438 213" fill="none" xmlns="http://www.w3.org/2000/svg">
//     ... (paste your SVG code here) ...
//   </svg>
// );


const BudgetModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // Don't render if not open
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Main Modal Container with a flex-column layout */}
      <div className="flex flex-col rounded-lg shadow-lg w-full max-w-sm overflow-hidden">

        {/* Top Section - The dark SVG portion */}
        <div className="relative">
          <BudgetSVG />
          {/* Close Button - positioned absolutely over the SVG */}
          <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl z-10">
            &times;
          </button>
        </div>

        {/* Bottom Section - The white part of the modal */}
        <div className="bg-white p-6 rounded-b-lg text-black">
          {/* Content Section - The features list */}
          <div className="flex flex-col gap-6">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              {/* This SVG will need to be imported or hardcoded */}
               <SettingsSVG className="text-gray-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Set up annual budgets by account category</h3>
                <p className="text-gray-500 text-sm">
                  Allocate funds across income and expense lines with full visibility.
                </p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-start gap-4">
              {/* This SVG will need to be imported or hardcoded */}
              <AnalysisSVG className="text-gray-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Track actuals vs budget in real time</h3>
                <p className="text-gray-500 text-sm">
                  See how your community is performing against plan, month by month.
                </p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-start gap-4">
              {/* This SVG will need to be imported or hardcoded */}
              <GraphSVG className="text-gray-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Adjust figures and forecast with ease</h3>
                <p className="text-gray-500 text-sm">
                  Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8">
            <button className="w-full bg-[#1e1e1e] text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200">
              Create Budget
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetModal;