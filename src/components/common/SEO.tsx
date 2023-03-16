import Head from "next/head";
import { FC } from "react";

export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
};

/**
 * Page Head (SEO/Analytics/TPS).
 */
const SEO: FC<SEOProps> = ({ title, description }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
