import React from 'react'
import './testimonials.css'
import AVTR1 from '../../Assets/avatar1.jpg'
import AVTR2 from '../../Assets/avatar2.jpg'
import AVTR3 from '../../Assets/avatar3.jpg'
import AVTR4 from '../../Assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'marai sharapowa',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur laudantium ab labore voluptas recusandae, nemo molestiae voluptate illo adipisci id libero dignissimos repellendus nostrum sit ex facere quas, nesciunt natus esse corporis quisquam modi? Ipsum sunt blanditiis veritatis maiores'
  },
  {
    avatar: AVTR2,
    name: 'jack nickelson',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur laudantium ab labore voluptas recusandae, nemo molestiae voluptate illo adipisci id libero dignissimos repellendus nostrum sit ex facere quas, nesciunt natus esse corporis quisquam modi? Ipsum sunt blanditiis veritatis maiores'
  },
  {
    avatar: AVTR3,
    name: 'mosa lara',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur laudantium ab labore voluptas recusandae, nemo molestiae voluptate illo adipisci id libero dignissimos repellendus nostrum sit ex facere quas, nesciunt natus esse corporis quisquam modi? Ipsum sunt blanditiis veritatis maiores'
  },
  {
    avatar: AVTR4,
    name: 'rose grilish',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur laudantium ab labore voluptas recusandae, nemo molestiae voluptate illo adipisci id libero dignissimos repellendus nostrum sit ex facere quas, nesciunt natus esse corporis quisquam modi? Ipsum sunt blanditiis veritatis maiores'
  },
]

const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials