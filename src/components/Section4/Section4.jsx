import sprite from "../../assets/icons/sprite.svg";
import s from "./Section4.module.css";

import { section4 } from "../../../data";

export default function Section4() {
  return (
    <section className={s.trigger}>
      <div className={s.wrapper}>
        <div className={s.content}>
          <h2 className={s.title}>
            {section4.title}
            <span>{section4.titleSpan}</span>
          </h2>
          <a className={s.link} href="./index.html#contact">
            <svg>
              <use xlinkHref={`${sprite}#check-mark`}></use>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
