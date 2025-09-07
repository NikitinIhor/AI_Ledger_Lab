import { RiCloseLine } from "react-icons/ri";
import { header } from "../../../data.js";
import s from "./Burger.module.css";

export default function Burger({ handleCloseMenu, menuToggle }) {
  return (
    <>
      <div
        className={`${s.overlay} ${menuToggle ? s.active : ""}`}
        onClick={handleCloseMenu}
      ></div>

      <aside className={`${s.menu} ${menuToggle ? s.open : ""}`}>
        <button
          className={s.close}
          onClick={handleCloseMenu}
          aria-label="Close menu"
        >
          <RiCloseLine size={30} />
        </button>

        <ul className={s.list}>
          {header.items.map(({ text, url }) => (
            <li key={text}>
              <a href={url} className={s.a} onClick={handleCloseMenu}>
                {text}
              </a>
            </li>
          ))}
        </ul>

        <a className={s.contact} href="#contact" onClick={handleCloseMenu}>
          {header.contact}
        </a>
      </aside>
    </>
  );
}
