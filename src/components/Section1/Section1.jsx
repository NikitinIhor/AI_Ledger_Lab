import sprite from "../../assets/icons/sprite.svg";
import image from "../../assets/images/hero-blockchain.jpg";
import s from "./Section1.module.css";

const descr = `Discover how artificial intelligence can transform
the analysis and management of blockchain data. Simplify complex
processes and gain valuable insights for your projects.`;

export default function Section1() {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s["hero-container"]}>
          <div className={s.content} data-aos="fade-right">
            <h1 className={s.title}>
              <span>Explore</span> The Possibilities Of
              <span>AI and Blockchain</span>
            </h1>
            <p className={s.descr}>{descr}</p>
            <button
              className={s["primary-btn"]}
              onClick={() => (window.location.href = "#contact")}
            >
              GET STARTED NOW
            </button>
          </div>
          <div className={s.wrapper}>
            <img src={image} data-aos="zoom-in" alt="hero" />
            <div className={s.wrap}>
              <svg className={s["curve-icon"]}>
                <use xlinkHref={`${sprite}#curve`}></use>
              </svg>
              <svg className={s["curve2-icon"]}>
                <use xlinkHref={`${sprite}#curve2`}></use>
              </svg>
              <svg className={s["curve3-icon"]}>
                <use xlinkHref={`${sprite}#curve3`}></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
