import s from "./Header.module.css";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Burger from "../Burger/Burger";

const title = "AI Ledger Lab";

export const items = [
  { text: "Home", url: "#home" },
  { text: "Why choose us?", url: "#why-choose" },
  { text: "About us", url: "#about-us" },
  { text: "Reviews", url: "#reviews" },
  { text: "Blog", url: "#our-blog" },
  { text: "FAQ", url: "#faq" },
];

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
        {title}
      </Link>

      <nav className={s.nav}>
        <ul className={s.list}>
          {items.map(({ text, url }) => (
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

      <button onClick={handleOpenMenu} className={s.open}>
        <RxHamburgerMenu size={30} />
      </button>

      {menuToggle && (
        <Burger handleCloseMenu={handleCloseMenu} menuToggle={menuToggle} />
      )}
    </header>
  );
}
