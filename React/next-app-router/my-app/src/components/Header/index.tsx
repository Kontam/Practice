import { NextPage } from "next";
import Link from "next/link";

export const Header: NextPage = () => {
  return (
    <header>
			<ul>
				<li><Link href="/top">Top</Link></li>
				<li><Link href="/about">About</Link></li>
				<li><Link href="/todos">Todos</Link></li>
			</ul>
    </header>
  );
};

export default Header;