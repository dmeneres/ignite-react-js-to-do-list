import styles from './Header.module.css'

export function Header() {
  return(
    <header className={styles.header}>
      <img className={styles.logoImg} src="../src/assets/logo-rocket.svg" alt="" />
      <div className={styles.logoText}>
        to<span>do</span>
      </div>
    </header>
  )
}