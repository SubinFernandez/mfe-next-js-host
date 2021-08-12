import Header from '../src/components/header'
import Nav from '../src/components/nav'
import '../styles/globals.css'

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
