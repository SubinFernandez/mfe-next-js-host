import Link from 'next/link'

import styles from './nav.module.scss'

const Nav = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <Link className={styles.nav_item} href="/">
          <a className={styles.nav_item}>Home</a>
        </Link>
        <Link className={styles.nav_item} href="/about">
          <a className={styles.nav_item}>About</a>
        </Link>
        <Link className={styles.nav_item} href="/contact">
          <a className={styles.nav_item}>Contact</a>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
