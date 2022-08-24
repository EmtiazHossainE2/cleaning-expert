import React from 'react';
import { houseCleaningService } from '../../data';

const CleaningInfo = () => {
  return (
    <div className='container mx-auto my-12 lg:pt-12'>
      <div className="border px-5 lg:mx-64 pb-20" style={{ fontFamily: 'Mulish' }}>
        <h2 className='font-bold text-xl pt-8 pb-10' >Top 10 House Cleaning Service in Delhi NCR :</h2>
        <h4 className='font-bold text-lg'>Services Included in House Cleaning Services:</h4>
        <hr className='my-4'/>
        {houseCleaningService?.map((data , index) => {
          return <p key={data?.id}>
            {index + 1}. {data?.text}
          </p>
        })}
        
      </div>
    </div>
  );
};

export default CleaningInfo;