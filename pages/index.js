import Head from "next/head";
import { Metrics } from "../components/Metrics";

export default function Home({ cruxData }) {
  return (
    <div>
      <Head>
        <title>Calibre | Core Web Vitals Checker</title>
      </Head>
      <main>
        <Metrics />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=${process.env.CRUX_API_KEY}`,
    {
      method: "POST",
      body: JSON.stringify({ origin: "https://google.com" }),
    }
  );
  const cruxData = await response.json();

  return {
    props: {
      cruxData,
    },
    revalidate: 60,
  };
}
