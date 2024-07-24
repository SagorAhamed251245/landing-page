import { Html, Head, Main, NextScript } from "next/document";
import SeoComp from "./SeoComp";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <SeoComp
          image={"/images/image/themble.jpg"}
          title={
            "TRANSFORM YOUR CAREER INTO SIX FIGURES WITH TS4U'S PRIVATE ONE-ON-ONE BOOTCAMP. HERE'S MORE"
          }
        />
        {/**Canonical */}

        <link rel="canonical" href="https://inquiry.ts4u.us/"></link>

        {/** schema.org */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "Inquiry TS4U",
              url: "https://inquiry.ts4u.us/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://inquiry.ts4u.us/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/**keyword */}

        <meta
          name="keywords"
          content="TS4U,Professional growth,Exclusive program,Career development,Personal development,Financial freedom,Business coaching,Top earners,Make six figures,Entrepreneurship,Wealth building,Wealth creation,High income potential,Success mindset,Online training,Must-Have Perks,Financial success,Income generation,Private Bootcamp,Self-improvement"
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
              gtag('config', 'AW-16520111092');
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
                gtag('event', 'conversion', {'send_to': 'AW-16520111092/lQ8oCP2QjsQZEPTHs8U9'});
              `,
          }}
        ></script>
      </body>
    </Html>
  );
}
