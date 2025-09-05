import { Link } from "react-router-dom";
import image from "../../assets/images/notFound.jpg";
import s from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <>
      <div className={s.overflow}></div>
      <div className={s.container}>
        <img src={image} alt="not found page" />
        <Link to="/" className={s.btn}>
          Return Home
        </Link>
      </div>
    </>
  );
}
