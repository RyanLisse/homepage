import Document, { Html, Head, Main, NextScript } from "next/document";

class HomepageDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />

          <script
            dangerouslySetInnerHTML={{
              __html:
                "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }",
            }}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png?v=oLnz5kRpkO"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png?v=oLnz5kRpkO"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png?v=oLnz5kRpkO"
          />
          <link rel="manifest" href="/site.webmanifest?v=oLnz5kRpkO" />
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg?v=oLnz5kRpkO"
            color="#000000"
          />
          <meta name="msapplication-TileColor" content="#8c22d0" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="antialiased text-black bg-gray-50 dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default HomepageDocument;
