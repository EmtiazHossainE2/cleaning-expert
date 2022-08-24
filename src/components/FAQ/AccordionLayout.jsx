import React from 'react';
import { BsChevronRight, BsChevronDown } from 'react-icons/bs'

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {

  const handleSetIndex = (index) => {
    (activeIndex !== index) && setActiveIndex(index)
  };

  return (
    <>
      <div onClick={() => handleSetIndex(index)} className='flex lg:w-1/2 justify-between p-2 mt-2 rounded bg-[#F6F6F6] cursor-pointer'>
        <div className='flex'>
          <div className='text-black font-bold'>{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {
            (activeIndex === index)
              ? <BsChevronDown className='w-4 h-4' />
              : <BsChevronRight className='w-4 h-4' />
          }
        </div>
      </div>

      {(activeIndex === index) && (
        <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;