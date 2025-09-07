import s from "./Header.module.css";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Burger from "../Burger/Burger";

import { header } from "../../../data.js";

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleOpenMenu = () => {
    setMenuToggle(true);
  };
  const handleCloseMenu = () => {
    setMenuToggle(false);
  };
  return (
    <header className={s.header}>
      <Link className={s.logo} to="/home">
        <img src={logo} alt="AI Ledger Lab" />
        {header.title}
      </Link>

      <nav className={s.nav}>
        <ul className={s.list}>
          {header.items.map(({ text, url }) => (
            <li key={text} className={s.li}>
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

      <button onClick={handleOpenMenu} className={s.open}>
        <RxHamburgerMenu size={30} />
      </button>

      {menuToggle && (
        <Burger handleCloseMenu={handleCloseMenu} menuToggle={menuToggle} />
      )}
    </header>
  );
}
