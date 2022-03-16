import React from 'react'
import Indicator from 'react-carousel-indicator'
import "react-carousel-indicator/dist/index.css";
import main from '../../../assets/home/main.png'
import main1 from '../../../assets/home/main1.png'
import main2 from '../../../assets/home/main2.png'
import main3 from '../../../assets/home/main3.png'
import './Carousel.css'

export const Carousel = () => {
  return (
    <Indicator itemsPerSlide={1} itemGap={10}>
    <div>
      <img className='carouselImg'
        src={main}
        alt="first"
      />
    </div>
    <div>
      <img className='carouselImg'
        src={main1}
        alt="first"
      />
    </div>
    <div>
      <img className='carouselImg'
        src={main2}
        alt="first"
      />
    </div>
    <div>
      <img className='carouselImg'
        src={main3}
        alt="first"
      />
    </div>
  </Indicator>

  )
}
