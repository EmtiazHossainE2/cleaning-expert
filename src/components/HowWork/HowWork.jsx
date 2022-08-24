import React from 'react';
import vector1 from '../../assets/Vector-1.png'
import vector2 from '../../assets/Group.png'
import vector3 from '../../assets/Vector-2.png'
import vector4 from '../../assets/Group-1.png'

const HowWork = () => {
  const customStyle = {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: '18px'
  }
  return (
    <div className='my-32 flex flex-col justify-center items-center'>
      <div className='pb-5'>
        <h2 className='text-center text-[#025B5D] font-bold text-[22px]'>How it Works</h2>
        <div className='h-[2px] w-36 bg-[#757575] pt-0'></div>
      </div>
      <div className='flex space-x-5'>
        <div className='flex flex-col justify-center items-center'>
          <img className='w-12 h-12 border-2 p-2 rounded-full' src={vector1} alt="icon1" />
          <div className='flex justify-start items-start text-[#757575] text-xl'>|</div>
        </div>
        <div>
          <h3 style={customStyle}>Choose the Appliances</h3>
          <p className='text-[#757575]'>Select Service required</p>
        </div>
      </div>

      <div className='flex space-x-5'>
        <div className='flex flex-col justify-center items-center'>
          <img className='w-12 h-12 border-2 p-2 rounded-full' src={vector2} alt="icon2" />
          <div className='flex justify-start items-start text-[#757575] text-xl'>|</div>
        </div>
        <div>
          <h3 style={customStyle}>Choose your time-slot</h3>
          <p className='text-[#757575]'>We serve from 9am-9pm</p>
        </div>
      </div>
      <div className='flex space-x-5'>
        <div className='flex flex-col justify-center items-center'>
          <img className='w-12 h-12 border-2 p-2 rounded-full' src={vector4} alt="icon4" />
          <div className='flex justify-start items-start text-[#757575] text-xl'>|</div>
        </div>
        <div>
          <h3 style={customStyle}>Hassle Free services</h3>
          <p className='text-[#757575]'>24h,verifed professionals</p>
        </div>
      </div>
      <div className='flex space-x-5'>
        <img className='w-12 h-12 border-2 p-2 rounded-full' src={vector3} alt="icon3" />
        <div>
          <h3 style={customStyle}>Choose from  partners</h3>
          <p className='text-[#757575]'>Verified Professionals</p>
        </div>
      </div>
    </div>
  );
};

export default HowWork;