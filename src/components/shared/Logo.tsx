import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src="/logo.png"
        alt="Elevate Her Logo" 
        className="h-10 w-auto"
      />
    </div>
  );
}