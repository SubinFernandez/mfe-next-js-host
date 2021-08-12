import Document, { Html, Head, Main, NextScript } from 'next/document'
import { v4 as uuid } from 'uuid'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <script src={`${process.env.REMOTE_APP_URL__ABOUT}?rnd=${uuid().replace(/-/gi, "")}`} />
        <script src={`${process.env.REMOTE_APP_URL__CONTACT}?rnd=${uuid().replace(/-/gi, "")}`} />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
