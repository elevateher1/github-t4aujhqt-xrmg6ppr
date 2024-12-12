import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollControlsProps {
  showLeft: boolean;
  showRight: boolean;
  onScroll: (direction: 'left' | 'right') => void;
}

export function ScrollControls({ showLeft, showRight, onScroll }: ScrollControlsProps) {
  return (
    <>
      {showLeft && (
        <button
          onClick={() => onScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
      )}
      {showRight && (
        <button
          onClick={() => onScroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      )}
    </>
  );
}