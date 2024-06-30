import "../styles/globals.css";

// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

// router
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";

import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { TrackEventGA4, initGA4 } from "../utils";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    initGA4();
    console.log("GA4 initialized");
    TrackEventGA4("page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      referer: document.referrer,
      utm_source: pathname.search("utm_source")
        ? pathname.search("utm_source")
        : null,
    });
  }, []);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
      </Head>
      <Layout>
        {/*<AnimatePresence mode="sync">*/}
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
        {/*</AnimatePresence>*/}
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;
