import React from 'react';
import Form from '../Form/Form';
import './Banner.css'

const Banner = () => {
  return (
    <div className="bg-container">
      <div className="py-16 ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-12 ">
            <div className='flex flex-col justify-center font-bold space-y-2 text-white'>
              <h1 className="text-lg lg:text-4xl ">Top House Cleaning Services </h1>
              <h1 className="text-lg lg:text-4xl lg:pb-0">In Delhi NCR</h1>
            </div>
            <Form/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;