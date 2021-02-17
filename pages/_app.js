import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import "styles/globals.css";
import "focus-visible/dist/focus-visible.min.js";

import Layout from "components/Layout";

function HomepageApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo
        title="Ryan Lisse Music Marketing Coach"
        canonical="https://www.ryanlisse.com/"
        description="Self-taught music producer turned full-stack developer."
        openGraph={{
          type: "website",
          description:
            "Self-taught music producer turned full-stack developer.",
          locale: "en_GB",
          url: "https://www.ryanlisse.com/",
          site_name: "Ryan Lisse",
        }}
        twitter={{
          handle: "@ryanlisse",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default HomepageApp;
