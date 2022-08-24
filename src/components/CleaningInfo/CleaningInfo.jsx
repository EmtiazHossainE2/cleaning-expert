import React from 'react';
import { Benefits, Equipment, houseCleaningService, SafetyPrecautions } from '../../data';

const CleaningInfo = () => {
  return (
    <div className='container mx-auto my-12 lg:pt-12'>
      <div className="border px-5 lg:mx-64 pb-12" style={{ fontFamily: 'Mulish' }}>
        <h2 className='font-bold text-xl pt-8 ' >Top 10 House Cleaning Service in Delhi NCR :</h2>

        {/* House Cleaning Service  */}
        <h4 className='font-bold text-lg pt-8'>Services Included in House Cleaning Services:</h4>
        <hr className='my-4'/>
        {houseCleaningService?.map((data , index) => {
          return <p key={data?.id}>
            {index + 1}. {data?.text}
          </p>
        })}

        {/* Equipment  */}
        <h4 className='font-bold text-lg pt-16'>Materials & Equipment's Used In House Cleaning Services:</h4>
        <hr className='my-4'/>
        {Equipment?.map((data , index) => {
          return <p key={data?.id}>
            {index + 1}. {data?.text}
          </p>
        })}

        {/* Benefits Of Booking :  */}
        <h4 className='font-bold text-lg pt-16'>Benefits Of Booking Us For Home Cleaning Services:</h4>
        <hr className='my-4'/>
        {Benefits?.map((data , index) => {
          return <p key={data?.id}>
            {index + 1}. {data?.text}
          </p>
        })}

        {/* Safety Precautions:  */}
        <h4 className='font-bold text-lg pt-16'>Safety Precautions Follows In House Cleaning Services:</h4>
        <hr className='my-4'/>
        {SafetyPrecautions?.map((data , index) => {
          return <p key={data?.id}>
            {index + 1}. {data?.text}
          </p>
        })}
        
      </div>
    </div>
  );
};

export default CleaningInfo;