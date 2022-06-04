import Image from "next/image";
import googleFavicon from "../public/google-favicon.png";

export const Intro = () => {
  return (
    <section>
      <div>
        <Image
          src={googleFavicon}
          role="presentation"
          alt=""
          width={128}
          height={128}
        />
        <h2>google.com</h2>
      </div>
      <p>
        Site speed report for{" "}
        <a href="https://google.com" rel="noopener noreferrer" target="_blank">
          https://google.com
        </a>{" "}
        based on anonymised, real user browsing data from Google Chrome.
      </p>
    </section>
  );
};
