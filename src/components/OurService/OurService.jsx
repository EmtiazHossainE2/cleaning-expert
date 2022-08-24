import React from 'react';
import serviceImg1 from '../../assets/Rectangle 2084.png'
import serviceImg2 from '../../assets/Rectangle 2085.png'
import serviceImg3 from '../../assets/Rectangle 2086.png'
import serviceImg4 from '../../assets/Rectangle 2016.png'

const OurService = () => {
  const customStyle = {
    background: 'linear-gradient(180deg, #3E93AE 0%, #064161 100%) ',
    color: '#fff',
};

return (
  <div className=' pt-16'>
    <h2 className='text-center font-bold text-2xl pb-12' style={{ fontFamily: 'Mulish' }}>Choose Our Services</h2>
    <div className='flex flex-col lg:flex-row justify-center items-center space-x-8'>
      <div className="flex flex-col justify-center items-center">
        <img className='w-[122px] h-[122] mb-[-30px] z-50' src={serviceImg1} alt="" />
        <h2 className='text-center border rounded-t-xl pt-16 px-5 pb-5 font-bold  text-[#222527]'><p>Sofa Cleaning</p> <p>Service</p></h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img className='w-[122px] h-[122] mb-[-30px] z-50' src={serviceImg2} alt="" />
        <h2 className='text-center border rounded-t-xl pt-16 px-5 pb-5 font-bold  text-[#222527]' style={customStyle}><p>House Cleaning</p> <p>Service</p></h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img className='w-[122px] h-[122] mb-[-30px] z-50' src={serviceImg3} alt="" />
        <h2 className='text-center border rounded-t-xl pt-16 px-5 pb-5 font-bold  text-[#222527]'><p>Bathroom Deep</p> <p>Cleaning</p></h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img className='w-[122px] h-[122] mb-[-30px] z-50' src={serviceImg4} alt="" />
        <h2 className='text-center border rounded-t-xl pt-16 px-6 pb-5 font-bold  text-[#222527]'><p>Kitchen Deep</p> <p>Cleaning</p></h2>
      </div>
    </div>
  </div>
);
};

export default OurService;