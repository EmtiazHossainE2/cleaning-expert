import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[80vh]'>
        <h2>This is home page</h2>
      </div>
    </div>
  );
};

export default Home;