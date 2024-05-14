// SlideShow.jsx
import React, { useState } from 'react';
import './SlideShow.scss';

const SlideShow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (

    <section className='slider'>
          
{slides.length >  1 && <><button className='left-arrow' onClick={prevSlide}>&#60;	
</button>
      <button className='right-arrow' onClick={nextSlide}>&#62;	
</button></>}
      
      {slides.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (<img src={slide.image} alt='' className='image' />)} 
            {index === current && (<p className='description'>{slide.description}</p>)}
          </div>
        );
      })}
    </section>

  );
};

export default SlideShow;
