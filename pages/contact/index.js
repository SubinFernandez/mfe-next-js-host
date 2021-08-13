import Head from 'next/head'
import dynamic from 'next/dynamic'

const RemoteContact = dynamic(() => import("contactApp/contact"), { ssr: false })

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Host MFE | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RemoteContact />
    </>
  )
}

export default ContactPage
