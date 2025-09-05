import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={s.wrapper}>
      <div className={s.loader}></div>
    </div>
  );
}
