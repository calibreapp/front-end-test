import Head from "next/head";
import { getCruxResults } from "../utils/crux-results";
import { Metrics } from "../components/Metrics";

export default function Home({ cruxResults }) {
  return (
    <div>
      <Head>
        <title>Calibre | Core Web Vitals Checker</title>
      </Head>
      <main>
        <Metrics cruxResults={cruxResults} />
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
  const cruxResults = getCruxResults(cruxData);

  return {
    props: {
      cruxResults,
    },
    revalidate: 60,
  };
}
