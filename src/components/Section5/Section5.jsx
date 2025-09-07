import sprite from "../../assets/icons/sprite.svg";
import s2 from "../Section2/Section2.module.css";
import ServicesSlider from "../ServicesSlider/ServicesSlider";
import s from "./Section5.module.css";

import { section5 } from "../../../data";

export default function Section5() {
  return (
    <section className={s.services} id="our-services">
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.title} data-aos="fade-right">
            <h2 className="title">
              {section5.title} <span>{section5.titleSpan}</span>
            </h2>
            <div className={s2.line}>
              <svg>
                <use xlinkHref={`${sprite}#line-arrow`}></use>
              </svg>
            </div>
          </div>
          <s className={s.descr} data-aos="fade-left">
            {section5.descr}
          </s>
        </div>

        <ServicesSlider />

        <svg className={s.curve}>
          <use xlinkHref={`${sprite}#curve6`}></use>
        </svg>
      </div>
    </section>
  );
}
