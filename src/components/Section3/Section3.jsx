import sprite from "../../assets/icons/sprite.svg";
import s1 from "../Section2/Section2.module.css";
import Slider from "../Slider/Slider";
import s from "./Section3.module.css";

import { section3 } from "../../../data";

export default function Section3() {
  return (
    <section className={s.why} id="why-choose">
      <div className={s.wrapper}>
        <div className={s.block} data-aos="fade-right">
          <h2 className="title">
            {section3.title} <span>{section3.titleSpan}</span>
          </h2>
          <div className={s1.line}>
            <svg>
              <use xlinkHref={`${sprite}#line-arrow`}></use>
            </svg>
          </div>
        </div>
        <p className={s.descr} data-aos="fade-left">
          {section3.descr}
        </p>
      </div>
      <Slider />
    </section>
  );
}
