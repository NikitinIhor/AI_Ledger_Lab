import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import { services } from "../../../data";
import s from "./ServicesSlider.module.css";

export default function ServicesSlider() {
  return (
    <section className={s.services}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1240: { slidesPerView: 4 },
        }}
        className={s.mySwiper}
      >
        {services.map(({ id, number, title, descr }) => (
          <SwiperSlide key={id}>
            <div className={s["our-services-list-wrap"]}>
              <p>{number}</p>
            </div>
            <h3 className={s.subttile}>{title}</h3>
            <p className={s.descr}>{descr}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
