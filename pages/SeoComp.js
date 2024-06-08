import { NextSeo } from "next-seo";
import React from "react";

function SeoComp({ title, description, url, image, canonical_slug, slug }) {
  let defaultTitle = "inquiry.ts4u.us";
  let defaultDescription =
    "inquiry.ts4u.us is AI-Powered, Automated Solutions For Schools and Students. Learn to grow and Earn";

  return (
    <NextSeo
      title={title || defaultTitle}
      description={description || defaultDescription}
      canonical={`${
        canonical_slug
          ? `${process.env.NEXT_PUBLIC_CLIENT_URL}/${canonical_slug}`
          : `${process.env.NEXT_PUBLIC_CLIENT_URL}`
      }`}
      openGraph={{
        url: slug
          ? `${process.env.NEXT_PUBLIC_CLIENT_URL}/${slug}`
          : process.env.NEXT_PUBLIC_CLIENT_URL,
        title: title || defaultTitle,
        description: description || defaultDescription,
        images: [
          {
            url:
              image || `${process.env.NEXT_PUBLIC_CLIENT_URL}/placeholder2.jpg`,
            width: 800,
            height: 600,
            alt: "Og Image Alt",
          },
        ],
        site_name: "inquiry.ts4u.us",
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
      linkedin={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
      facebook={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
      messenger={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
}

export default SeoComp;
