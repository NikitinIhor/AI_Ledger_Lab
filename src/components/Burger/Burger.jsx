import { RiCloseLargeFill } from "react-icons/ri";
import { headerItems } from "../Header/Header";
import s from "./Burger.module.css";

export default function Burger({ handleCloseMenu, menuToggle }) {
  return (
    <>
      <div
        className={`${s.overlay} ${menuToggle ? s.active : ""}`}
        onClick={handleCloseMenu}
      ></div>

      <div className={`${s.menu} ${menuToggle ? s.open : ""}`}>
        <button className={s.close} onClick={handleCloseMenu}>
          <RiCloseLargeFill size={30} />
        </button>

        <nav className={s.nav}>
          <ul className={s.list}>
            {headerItems.map(({ text, url }) => (
              <li key={text} className={s.li}>
                <a href={url} className={s.a}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className={s.contact} href="#contact">
          Contact
        </a>
      </div>
    </>
  );
}
