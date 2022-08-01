import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, vero cum, reiciendis amet consequatur optio modi corporis voluptates quidem maxime repellat voluptatem! Ipsum doloremque magni quasi dignissimos enim cumque autem.",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet similique iste error quas a cupiditate neque dolorem aperiam accusamus maxime quisquam dolorum consectetur delectus culpa recusandae dolor consequuntur?",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae molestias ipsa velit pariatur beatae reiciendis, sint, nulla ut quas sapiente atque maiores, placeat sunt alias! Quos, quis illum.",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nostrum soluta exercitationem ab consequuntur harum modi incidunt reprehenderit saepe quasi quia perspiciatis maiores quaerat placeat repellendus.",
  },
];

const Testimoinals = () => {
  return (
    <section id="testimoinals">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container" 
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimoinals;
