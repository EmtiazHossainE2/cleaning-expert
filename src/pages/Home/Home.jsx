import React from 'react';
import Banner from '../../components/Banner/Banner';
import Carousel from '../../components/Carousel/Carousel';
import CleaningInfo from '../../components/CleaningInfo/CleaningInfo';
import Cta from '../../components/CTA/Cta';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import Navbar from '../../components/Navbar/Navbar';
import Faq from '../../components/FAQ/Faq'
import OurService from '../../components/OurService/OurService';
import HowWork from '../../components/HowWork/HowWork';
import Review from '../../components/Review/Review';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Banner />
        <Cta />
        <div><hr className='w-full h-2 bg-[#6F6F6F]' /></div>
        <Carousel />
        <CleaningInfo />
        <Faq />
        <OurService />
        <HowWork />
        <Review/>
        <div className="flex flex-col container mx-auto space-x-6 justify-center items-center py-16">
          <Form />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;