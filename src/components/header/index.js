import React from "react"

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <span className={styles.logo}>Micro-frontend in Next.js</span>
      </div>
    </header>
  )
}

export default Header
