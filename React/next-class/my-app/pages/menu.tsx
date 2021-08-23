import { NextPage } from "next";
import Link from "next/link";

const Menu: NextPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about" passHref>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/about_ssr" passHref>
            <a>About_SSR</a>
          </Link>
        </li>
        <li>
          <Link href="/about_static" passHref>
            <a>About_Static</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
