import React from 'react';
import Banner from '../../components/Banner/Banner';
import Cta from '../../components/CTA/Cta';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Banner />
        <Cta />
        <div>
          <hr className='w-full h-2 bg-[#6F6F6F]' />
        </div>
        <div className="flex flex-col space-x-6 justify-center items-center py-16">
          <Form />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;