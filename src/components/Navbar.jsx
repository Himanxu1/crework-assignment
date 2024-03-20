import  { useState } from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
          <img src={logo} alt="logo" className="w-24 h-12 mx-auto" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-slate-300">30 Days of PM</a>
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-slate-300">Newsletter</a>
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-slate-300">Builders Cohort</a>

            </div>
            <div className="md:hidden">
              <button
                className="text-white inline-flex items-center justify-center p-2 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slat-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-slate-300">30 Days of PM</a>
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-slate-300">Newsletter</a>
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-slate-300">Builders Cohort</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
