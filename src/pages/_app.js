import "../styles/tailwind.css";
import "../styles/app.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <title>PBL PROJECT 2022</title>
        <meta name="author" content="Aryan Agrawal" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
