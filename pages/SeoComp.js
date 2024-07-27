import Head from "next/head";
import React from "react";

function SeoComp({ title, description, image, canonical_slug, slug }) {
  const defaultTitle =
    "TRANSFORM YOUR CAREER INTO SIX FIGURES WITH TS4U'S PRIVATE ONE-ON-ONE BOOTCAMP.";
  const defaultDescription =
    "Transform your career into a six-figure income with TS4U’s Private One-on-One Bootcamp. Discover expert guidance, personalized learning, and a roadmap to success. Learn More!";
  const defaultImage = "/placeholder2.jpg";
  const siteUrl = process.env.NEXT_PUBLIC_CLIENT_URL || "http://localhost:3000";
  const fullSlug = slug ? `${siteUrl}/${slug}` : siteUrl;
  const fullCanonicalSlug = canonical_slug
    ? `${siteUrl}/${canonical_slug}`
    : siteUrl;

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <link rel="canonical" href={fullCanonicalSlug} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullSlug} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        property="og:image"
        content={image || `${siteUrl}${defaultImage}`}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullSlug} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta
        name="twitter:image"
        content={image || `${siteUrl}${defaultImage}`}
      />
    </Head>
  );
}

export default SeoComp;
