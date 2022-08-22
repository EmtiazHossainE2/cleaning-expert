import React from 'react';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Banner/>
      </div>
    </div>
  );
};

export default Home;