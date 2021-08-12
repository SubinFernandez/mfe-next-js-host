import Header from '../src/components/header'
import Nav from '../src/components/nav'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
