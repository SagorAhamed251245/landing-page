import Head from "next/head";
const CustomHead = () => {
  return (
    <Head>
      <title>'inquiry.ts4u.us'</title>
      {/* <meta name="description" content={description} /> */}
      {/* <meta property="og:title" content="inquiry.ts4u.us" /> */}
      {/* <meta property="og:description" content={description} /> */}
      <meta
        property="og:image:url"
        content="http://my.website.com/images/thumb.png"
      />
    </Head>
  );
};

export default CustomHead;
