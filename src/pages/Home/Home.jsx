import React from 'react';
import Banner from '../../components/Banner/Banner';
import Carousel from '../../components/Carousel/Carousel';
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
        <Carousel/>
        <div className="flex flex-col container mx-auto space-x-6 justify-center items-center py-16">
          <Form />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;