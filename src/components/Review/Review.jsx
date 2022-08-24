import React from 'react';
import { RiContactsLine } from 'react-icons/ri';

const Review = () => {
  return (
    <div className='container mx-auto'>
      <h2 className='text-center text-3xl font-[500]'>Customer reviews</h2>
      <div className='lg:mx-[350px]'>
        <h2 className='text-3xl font-[500] py-5'>Avg. user rating</h2>
        <h3 className='text-4xl font-[500]'>★ 4.76</h3>
        <p className='text-[#3C3C3C]' style={{ fontFamily: 'Roboto' }}>347K reviews</p>
        <hr className='my-8'/>
        <div>
          <div className='flex justify-between pb-3'>
            <div className='flex space-x-3'>
              <span className='bg-[#D9D9D9] px-3 py-4 text-lg rounded-lg'><RiContactsLine /></span>
              <div>
                <h3 className='text-[18px]'>Vijay</h3>
                <p className='text-[#7D7D7D] text[14px]'>July 2022 • Noida, Uttar Pradsh 201301, India</p>
              </div>
            </div>
            <span>★ 5</span>
          </div>
          <p>Good Knowledge of his job, hard working and well mannered</p>

          <hr className='mt-5'/>
        </div>


      </div>
    </div>
  );
};

export default Review;