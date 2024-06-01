import { Html, Head, Main, NextScript } from "next/document";
import CustomHead from "./CustomHead";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>inquiry.ts4u.us</title>
        {/* Other meta tags */}
        <meta property="og:image:url" content="/images/image/themble.jpg" />
      </Head>
      {/* <CustomHead /> */}
      <body className="max_container">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
