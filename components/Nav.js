import Link from "next/link";
const Nav = () => (
  <div>
    <Link href="/sell">
      <a title="Sell">Sell</a>
    </Link>
    <Link href="/">
      <a title="Home">Home</a>
    </Link>
  </div>
);

export default Nav;
