import Head from "next/head";
import { METADATA } from "../../constants";

const Meta = () => (
  <Head>
    <title>{METADATA.title}</title>
    <meta name="description" content={METADATA.description} />
    <meta name="keywords" content={METADATA.keywords} />
    <meta name="robots" content="index,follow" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content={METADATA.language} />
    <meta name="author" content={METADATA.author} />
    <meta name="theme-color" content={METADATA.themeColor} />
    <meta httpEquiv="content-language" content={METADATA.language} />
    <link rel="canonical" href={METADATA.siteUrl} />

    {/* Open Graph / Facebook */}
    <meta property="og:locale" content="zh_CN" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={METADATA.title} />
    <meta property="og:description" content={METADATA.description} />
    <meta property="og:image" content={METADATA.image} />
    <meta property="og:url" content={METADATA.siteUrl} />
    <meta property="og:site_name" content={METADATA.title} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={METADATA.title} />
    <meta name="twitter:description" content={METADATA.description} />
    <meta name="twitter:site" content={METADATA.twitterHandle} />
    <meta name="twitter:creator" content={METADATA.twitterHandle} />
    <meta name="twitter:url" content={METADATA.siteUrl} />
    <meta name="twitter:image" content={METADATA.image} />

    {/* 站点图标：裁边版个人 logo（SVG 矢量为主，PNG/ICO 兜底） */}
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
    <meta name="msapplication-TileColor" content="#1a5fa8" />
    <link rel="manifest" href="/manifest.json" />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: METADATA.author,
          url: METADATA.siteUrl,
          jobTitle: "全栈开发工程师",
          address: {
            "@type": "PostalAddress",
            addressLocality: "深圳市",
            addressRegion: "广东省",
            addressCountry: "CN",
          },
          email: "yinsh9248@gmail.com",
          telephone: "+86-18873172560",
          sameAs: ["https://github.com/CHN-yin"],
        }),
      }}
    />
  </Head>
);

export default Meta;
