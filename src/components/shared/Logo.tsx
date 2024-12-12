import React from 'react';
import logo from "./logo .png"
export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src={logo}
        alt="Elevate Her Logo" 
        className="h-10 w-auto"
      />
    </div>
  );
}