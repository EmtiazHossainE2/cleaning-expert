import React from 'react';
import { RiContactsLine } from 'react-icons/ri';
import { reviewData } from '../../data';

const Review = () => {
  return (
    <div className='container mx-auto px-6'>
      <h2 className='text-center text-3xl font-[500]'>Customer reviews</h2>
      <div className='lg:mx-[350px]'>
        <h2 className='text-3xl font-[500] py-5'>Avg. user rating</h2>
        <h3 className='text-4xl font-[500]'>★ 4.76</h3>
        <p className='text-[#3C3C3C]' style={{ fontFamily: 'Roboto' }}>347K reviews</p>
        <hr className='my-8' />
        {reviewData?.map((review) => (
          <div key={review.id}>
            <div className='flex justify-between pb-3'>
              <div className='flex justify-center items-center space-x-3'>
                <span className='bg-[#D9D9D9] p-3 text-lg rounded-lg'><RiContactsLine /></span>
                <div>
                  <h3 className='text-[18px]'>{review?.name}</h3>
                  <p className='text-[#7D7D7D] text[14px]'>{review?.time}</p>
                </div>
              </div>
              <div className='flex space-x-1'>
                <span>★</span>
                 <span>{review?.rating}</span>
                 </div>
            </div>
            <p>{review?.review}</p>

            <hr className='my-5' />
          </div>
        ))}



      </div>
    </div>
  );
};

export default Review;