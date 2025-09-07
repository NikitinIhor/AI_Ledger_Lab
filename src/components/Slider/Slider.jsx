import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import s from "./Slider.module.css";

import { Slideritems } from "../../../data.js";

export default function Slider() {
  return (
    <div className={`${s.whyChooseContent} mySwiper`} data-aos="zoom-in-up">
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {Slideritems.map(({ img, alt, title, descr }) => (
          <SwiperSlide key={title}>
            <div className={s.card}>
              <div className={s.imageWrap}>
                <img src={img} alt={alt} />
              </div>
              <h3 className={s.subtitle}>{title}</h3>
              <div className={s.line}></div>
              <p className={s.descr}>{descr}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
