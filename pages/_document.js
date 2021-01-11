import Document, { Html, Head, Main, NextScript } from 'next/document'

class HomepageDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='antialiased text-black bg-white dark:bg-black dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default HomepageDocument
