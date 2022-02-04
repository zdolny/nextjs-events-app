import Layout from "../components/layout/layout";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>HxC Events</title>
        <meta name="description" content="Find awesome hardcore gigs" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
