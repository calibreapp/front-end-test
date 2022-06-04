import Link from "next/link";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <a aria-label="Calibre">
          <Logo />
        </a>
      </Link>
      <h1>Core Web Vitals Checker</h1>
    </header>
  );
};
