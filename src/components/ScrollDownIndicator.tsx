import React from 'react';

const ScrollDownIndicator: React.FC = () => {
  return (
    <div className="mb-20 w-[34px] h-[55px]">
      <div className="w-[3px] p-[10px_15px] h-[35px] border-2 border-white rounded-[25px] opacity-75 box-content">
        <div className="w-[3px] h-[10px] rounded-[25%] bg-white animate-scroll"></div>
      </div>
    </div>
  );
};

export default ScrollDownIndicator;
