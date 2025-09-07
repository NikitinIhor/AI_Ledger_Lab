import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { header } from "../../../data.js";
import logo from "../../assets/images/logo.png";
import Burger from "../Burger/Burger";
import s from "./Header.module.css";

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleOpenMenu = () => setMenuToggle(true);
  const handleCloseMenu = () => setMenuToggle(false);

  return (
    <header className={s.header}>
      <a className={s.logo} href="#">
        <img src={logo} alt="AI Ledger Lab Logo" />
        {header.title}
      </a>

      <nav className={s.nav}>
        <ul className={s.list}>
          {header.items.map(({ text, url }) => (
            <li key={text}>
              <a href={url} className={s.a}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a className={s.contact} href="#contact">
        {header.contact}
      </a>

      <button
        onClick={handleOpenMenu}
        className={s.open}
        aria-label="Open menu"
        aria-expanded={menuToggle}
      >
        <RxHamburgerMenu size={30} />
      </button>

      {menuToggle && (
        <Burger handleCloseMenu={handleCloseMenu} menuToggle={menuToggle} />
      )}
    </header>
  );
}
