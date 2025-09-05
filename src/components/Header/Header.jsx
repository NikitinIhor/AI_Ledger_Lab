import s from "./Header.module.css";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const title = "AI Ledger Lab";

const items = [
  { text: "Home", url: "#home" },
  { text: "Why choose us?", url: "#why-choose" },
  { text: "About us", url: "#about-us" },
  { text: "Reviews", url: "#reviews" },
  { text: "Blog", url: "#our-blog" },
  { text: "FAQ", url: "#faq" },
];

export default function Header() {
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

      {/* <button class="burger-btn burgerBtn">
        <svg>
          <use href="./images/sprite.svg#burger"></use>
        </svg>
      </button>
      <div class="mobile-menu mobileMenu">
        <button class="close-btn closeBtn">
          <svg>
            <use href="./images/sprite.svg#cross"></use>
          </svg>
        </button>
        <nav class="mobile-nav">
          <ul class="mobile-nav-list">
            <li>
              <a class="mobile-nav-link" href="./index.html">
                Accueil
              </a>
            </li>
            <li>
              <a class="mobile-nav-link" href="./index.html#why-choose">
                Pourquoi nous choisir ?
              </a>
            </li>
            <li>
              <a class="mobile-nav-link" href="./index.html#about-us">
                À propos de nous
              </a>
            </li>
            <li>
              <a class="mobile-nav-link" href="./index.html#reviews">
                Avis
              </a>
            </li>
            <li>
              <a class="mobile-nav-link" href="./index.html#our-blog">
                Blog
              </a>
            </li>
            <li>
              <a class="mobile-nav-link" href="./index.html#faq">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
        <a class="primary-btn mobile-nav-link" href="./index.html#contact">
          Contact
        </a>
      </div> */}
    </header>
  );
}
