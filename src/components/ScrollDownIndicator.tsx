import React from 'react';

// Define props to accept className
interface ScrollDownIndicatorProps {
  className?: string;
}

const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({ className }) => {
  return (
    <div className={`w-[34px] h-[55px] absolute z-10 ${className}`}>
      <div className="w-[3px] p-[10px_15px] h-[35px] border-2 border-white rounded-[25px] opacity-75 box-content">
        <div className="w-[3px] h-[10px] rounded-[25%] bg-white animate-scroll"></div>
      </div>
    </div>
  );
};

export default ScrollDownIndicator;
