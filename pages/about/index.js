import dynamic from 'next/dynamic'

const RemoteAbout = dynamic(() => import("aboutApp/about"), { ssr: false })

const AboutPage = () => {
  return (
    <RemoteAbout />
  )
}

export default AboutPage
