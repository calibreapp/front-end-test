/** @jsxImportSource @emotion/react */
import Image from "next/image";
import googleFavicon from "../public/google-favicon.png";
import * as styles from "../styles/styles";

export const Intro = () => {
  return (
    <section css={styles.intro}>
      <div css={styles.introSite}>
        <div css={styles.introFavicon}>
          <Image
            src={googleFavicon}
            role="presentation"
            alt=""
            width={128}
            height={128}
          />
        </div>
        <h2 css={styles.introHeading}>google.com</h2>
      </div>
      <p css={styles.introCopy}>
        Site speed report for{" "}
        <a href="https://google.com" rel="noopener noreferrer" target="_blank">
          https://google.com
        </a>{" "}
        based on anonymised, real user browsing data from Google Chrome.
      </p>
    </section>
  );
};
