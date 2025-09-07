import { section2 } from "../../../data.js";
import sprite from "../../assets/icons/sprite.svg";
import image from "../../assets/images/about-blockchain.jpg";
import s from "./Section2.module.css";

export default function Section2() {
  return (
    <section className={s.about} id="about-us">
      <div className={s.wrapper}>
        <div className={s.title} data-aos="fade-right">
          <h2 className={s.title2}>
            {section2.title} <span>{section2.titleSpan}</span>
          </h2>
          <div className={s.line}>
            <svg>
              <use xlinkHref={`${sprite}#line-arrow`}></use>
            </svg>
          </div>
        </div>
        <p className={s.descr} data-aos="fade-left">
          {section2.descr1}
        </p>
      </div>
      <div className={s.content}>
        <img
          className={s.img}
          src={image}
          alt="À propos de nous"
          data-aos="flip-left"
        />
        <div className={s.text} data-aos="flip-right">
          <h2 className={s.title3}>
            <span>{section2.title2}</span>
            {section2.title2Span}
          </h2>
          <p className={s.descr2}>{section2.descr2}</p>
          <a className="primary-btn" href="./index.html#contact">
            {section2.btn}
          </a>
        </div>
      </div>
      <div className={s.curve}>
        <svg className={s.curve5}>
          <use xlinkHref={`${sprite}#curve4`}></use>
        </svg>
        <svg className={s.curve4}>
          <use xlinkHref={`${sprite}#curve5`}></use>
        </svg>
      </div>
    </section>
  );
}
