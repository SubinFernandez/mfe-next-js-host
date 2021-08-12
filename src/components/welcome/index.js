import styles from './welcome.module.scss'

const Welcome = () => {
  return (
    <div className={styles.container}>
      <section className={styles.root}>
        <img className={styles.hello_img} src="/hello.gif" height="480" width="480" loading="lazy" />
        <p>Hello, I&apos;m the <strong>host</strong> application</p>
        <p>I&apos;m from https://mfe-next-js-host.vercel.app/</p>
      </section>
    </div>
  )
}

export default Welcome
