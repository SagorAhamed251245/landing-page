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

        {/** schema.org start */}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://inquiry.ts4u.us/",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://inquiry.ts4u.us/",
              },
              headline:
                "Transform your career into a six-figure income with TS4U’s Private One-on-One Bootcamp",
              description:
                "Transform your career into a six-figure income with TS4U’s Private One-on-One Bootcamp. Discover expert guidance, personalized learning, and a roadmap to success. Learn More!",
              image:
                "https://inquiry.ts4u.us/_next/image?url=%2Fimages%2Fsvg%2Flogo.png&w=128&q=75",
              author: {
                "@type": "Person",
                name: "Shiblu Ahmad",
                url: "https://www.schoolshub.ai/founder",
              },
              publisher: {
                "@type": "Organization",
                name: "TS4U",
                logo: {
                  "@type": "ImageObject",
                  url: "https://ts4u.us/new-logo/new-logo.svg",
                },
              },
              datePublished: "2024-07-01",
              dateModified: "2041-12-28",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Private One-on-One Bootcamp",
              image:
                "https://inquiry.ts4u.us/_next/image?url=%2Fimages%2Fsvg%2Flogo.png&w=128&q=75",
              "@id": "",
              url: "https://inquiry.ts4u.us/",
              telephone: "+1 (586) 276-7347",
              address: {
                "@type": "PostalAddress",
                streetAddress: "30500 Van Dyke, Ste- 201",
                addressLocality: "Warren",
                addressRegion: "MI",
                postalCode: "48093",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 42.51793989999999,
                longitude: -83.0278453,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://www.facebook.com/ts4u.us",
                "https://www.instagram.com/ts4uservices/",
                "https://www.youtube.com/@ts4uITbootcamp",
                "https://www.linkedin.com/company/31284119/",
                "https://inquiry.ts4u.us/",
              ],
            }),
          }}
        />
        {/** schema.org end */}
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
      <body>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WNCJXR4G');
            `,
          }}
        ></script>
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNCJXR4G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        
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
