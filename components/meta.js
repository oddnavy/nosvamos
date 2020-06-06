import Head from "next/head";
import { HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="theme-color" content="#000" />
      <meta
        name="description"
        content="A sporadic documentation of our journey through some of the most fascinating sights, sounds, and smells in the world"
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} key="og:image" />
    </Head>
  );
}
