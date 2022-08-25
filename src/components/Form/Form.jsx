import React from 'react';

const Form = () => {
  return (
    <div className='bg-white p-8 rounded-lg mt-12 border'>
      <form className='space-y-4'>
        <select name="" id="" className='border border-black rounded-md w-full py-1'>
          <option value="Select Pest Control Options">Select Pest Control Options</option>
          <option value="Deep Home Cleaning - 1 BHK Vacant">Deep Home Cleaning - 1 BHK Vacant</option>
          <option value="Deep Home Cleaning - 2 BHK Vacant">Deep Home Cleaning - 2 BHK Vacant</option>
          <option value="Deep Home Cleaning - 3 BHK Vacant">Deep Home Cleaning - 3 BHK Vacant</option>
          <option value="Deep Home Cleaning - 4 BHK Vacant">Deep Home Cleaning - 4 BHK Vacant</option>
          <option value="Deep Home Cleaning - 5 BHK Vacant">Deep Home Cleaning - 5 BHK Vacant</option>
          <option value="Deep Home Cleaning - 1 BHK Occupied">Deep Home Cleaning - 1 BHK Occupied</option>
          <option value="Deep Home Cleaning - 2 BHK Occupied">Deep Home Cleaning - 2 BHK Occupied</option>
          <option value="Deep Home Cleaning - 3 BHK Occupied">Deep Home Cleaning - 3 BHK Occupied</option>
          <option value="Deep Home Cleaning - 4 BHK Occupied">Deep Home Cleaning - 4 BHK Occupied</option>
          <option value="Deep Home Cleaning - 5 BHK Occupied">Deep Home Cleaning - 5 BHK Occupied</option>
          <option value="Deep Home Cleaning - 1 Room Kitchen Set">Deep Home Cleaning - 1 Room Kitchen Set</option>
          <option value="Deep Home Cleaning - 1 Room (upto 200sq ft)">Deep Home Cleaning - 1 (upto 200sq ft)</option>
          <option value="Deep Home Cleaning - 1 Room 1 Bathroom">Deep Home Cleaning - 1 Room 1 Bathroom</option>
          <option value="Deep Home Cleaning - 1 Room 1 Balcony">Deep Home Cleaning - 1 Room 1 Balcony</option>
          <option value="Deep Home Cleaning Villa - 2K-3K sqft">Deep Home Cleaning  Villa - 2K-3K sqft</option>
          <option value="Deep Home Cleaning Villa - 3K-4K sqft">Deep Home Cleaning  Villa - 3K-4K sqft</option>
          <option value="Deep Home Cleaning Villa - 4K-5K sqft">Deep Home Cleaning  Villa - 4K-5K sqft</option>
          <option value="Deep Home Cleaning Villa - 5K-6K sqft">Deep Home Cleaning  Villa - 5K-6K sqft</option>
        </select>
        <div className='flex flex-col md:flex-row justify-between gap-2'>
          <input className='border border-[#878686] rounded-md py-1 pl-2 ' type="text" name="name" id="name" placeholder='Enter Name' required />
          <input className='border border-[#878686] rounded-md py-1 pl-2 ' type="number" name="number" id="number" placeholder='Phone Number' required />
        </div>
        <div>
          <input type="text" placeholder='Pincode or Address' className='w-full border border-[#878686] rounded-md py-1 pl-2 ' required />
        </div>
        <div className="flex justify-center">
          <input type="submit" value="Submit" className='px-12 rounded-lg py-1 bg-[#004C97] text-white text-lg font-bold border cursor-pointer' />
        </div>
        <p className='text-center text-[14px]'>Average call back time : 12 min (Last update 5 mins ago)</p>
      </form>
    </div>
  );
};

export default Form;