/** @jsxImportSource @emotion/react */
import Link from "next/link";
import { Logo } from "./Logo";
import * as styles from "../styles/styles";

export const Header = () => {
  return (
    <header css={styles.header}>
      <Link href="/">
        <a aria-label="Calibre">
          <Logo />
        </a>
      </Link>
      <h1 css={styles.headerCopy}>Core Web Vitals Checker</h1>
    </header>
  );
};
