import React from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <div className="bg-container">
      <div className="py-16 bg-overlay">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-12 ">
            <div className='flex flex-col justify-center font-bold space-y-2 text-white'>
              <h1 className="text-lg lg:text-2xl ">Top House Cleaning Services </h1>
              <h1 className="text-lg lg:text-2xl lg:pb-0">In Delhi NCR</h1>
            </div>
            <div className='bg-white p-8 rounded-lg mt-12'>
              <form className='space-y-4'>
                <select name="" id="" className='border border-black rounded-md w-full py-1'>
                  <option value="Select Pest Control Options">Select Pest Control Options</option>
                  <option value="Select Pest Control Options">Select Pest Control Options</option>
                  <option value="Select Pest Control Options">Select Pest Control Options</option>
                  <option value="Select Pest Control Options">Select Pest Control Options</option>
                </select>
                <div className='flex flex-col md:flex-row justify-between gap-2'>
                  <input className='border border-[#878686] rounded-md py-1 pl-2 ' type="text" name="name" id="name" placeholder='Enter Name' required/>
                  <input className='border border-[#878686] rounded-md py-1 pl-2 ' type="number" name="number" id="number" placeholder='Phone Number' required/>
                </div>
                <div>
                  <input type="text" placeholder='Pincode or Address' className='w-full border border-[#878686] rounded-md py-1 pl-2 'required />
                </div>
                <div className="flex justify-center">
                  <input type="submit" value="Submit" className='px-12 rounded-lg py-1 bg-[#004C97] text-white text-lg font-bold border cursor-pointer' />
                </div>
                <p className='text-center text-[14px]'>Average call back time : 12 min (Last update 5 mins ago)</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;