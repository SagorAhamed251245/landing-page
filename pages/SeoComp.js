import { NextSeo } from "next-seo";
import React from "react";

function SeoComp({ title, description, image, canonical_slug, slug }) {
  const defaultTitle =
    "TRANSFORM YOUR CAREER INTO SIX FIGURES WITH TS4U'S PRIVATE ONE-ON-ONE BOOTCAMP.";
  const defaultDescription =
    "Transform your career into a six-figure income with TS4U’s Private One-on-One Bootcamp. Discover expert guidance, personalized learning, and a roadmap to success. Learn More!";

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
