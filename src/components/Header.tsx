import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.logoImg}
        src="/static/images/logo-rocket.svg"
        alt=""
      />
      <div className={styles.logoText}>
        to<span>do</span>
      </div>
    </header>
  );
}
