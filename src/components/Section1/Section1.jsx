import sprite from "../../assets/icons/sprite.svg";
import heroImage from "../../assets/images/hero-blockchain.jpg";

import { section1 } from "../../../data.js";

import s from "./Section1.module.css";

export default function Section1() {
  return (
    <section className={s.hero}>
      <div className={s.heroContainer}>
        <div className={s.content} data-aos="fade-right">
          <h1 className={s.title}>
            <span className={s.highlight}>{section1.titleSpan1}</span>{" "}
            {section1.title}{" "}
            <span className={s.highlight}>{section1.titleSpan2}</span>
          </h1>
          <p className={s.descr}>{section1.descr}</p>
          <button
            className={s.primaryBtn}
            onClick={() => (window.location.href = "#contact")}
          >
            {section1.btn}
          </button>
        </div>

        <div className={s.imageWrapper}>
          <img
            src={heroImage}
            alt="Blockchain Hero"
            className={s.heroImg}
            data-aos="zoom-in"
          />

          <div className={s.curveWrap}>
            <svg className={s.curve}>
              <use xlinkHref={`${sprite}#curve`} />
            </svg>
            <svg className={s.curve2}>
              <use xlinkHref={`${sprite}#curve2`} />
            </svg>
            <svg className={s.curve3}>
              <use xlinkHref={`${sprite}#curve3`} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
