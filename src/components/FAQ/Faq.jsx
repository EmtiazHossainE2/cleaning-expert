import React, { useEffect, useState } from 'react';
import AccordionLayout from './AccordionLayout';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const [faq, setFaq] = useState([])

  useEffect(() => {
    fetch('urbanExpertCleaning-common.json')
      .then(res => res.json())
      .then(data => setFaq(data))
  }, [])

  const showFaq = faq[0]?.faq.slice(0, 4)
  // console.log(showFaq)

  return (
    <div className='text-center'>
      <h2 style={{ fontFamily: 'Montserrat' }} className='text-xl font-bold py-5'>FAQ's Before Home Cleaning Services In Delhi NCR</h2>

      <div className='flex flex-col lg:justify-center lg:items-center px-2'>
        {
          showFaq?.map((f, index) => (
            <AccordionLayout
            key={index}
              title={f.question}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              <p className='container mx-auto lg:px-[300px] text-start '>{f.answer}</p>
            </AccordionLayout>
          ))
        }
      </div>
    </div>
  );
};

export default Faq;