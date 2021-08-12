import dynamic from 'next/dynamic'

const RemoteContact = dynamic(() => import("contactApp/contact"), { ssr: false })

const ContactPage = () => {
  return (
    <RemoteContact />
  )
}

export default ContactPage
