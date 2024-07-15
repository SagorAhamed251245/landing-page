import { Html, Head, Main, NextScript } from "next/document";
import SeoComp from "./SeoComp";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <SeoComp
          image={"/images/image/themble.jpg"}
          title={"inquiry.ts4u.us"}
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6L2FSQRWYC"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6L2FSQRWYC');
            `,
          }}
        ></script>
      </Head>

      <body className="max_container">
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '318631454217422');
                fbq('track', 'PageView');
              `,
          }}
        ></script>
      </body>
    </Html>
  );
}
