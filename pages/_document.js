import { Html, Head, Main, NextScript } from "next/document";
import SeoComp from "./SeoComp";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>inquiry.ts4u.us</title>

        {/* <meta property="og:image" content="public/images/image/themble.jpg" /> */}
      </Head>
      <SeoComp image={"/images/image/themble.jpg"} />

      <body className="max_container">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
