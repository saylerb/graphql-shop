import Nav from "./Nav";
import Link from "next/link";
import styled from "@emotion/styled";

const Logo = styled.h1`
  font-size: 4em;
  margin-left: 2rem;
  /* position: relative; */
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.green};
    color: white;
    text-transform: lowercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const Header = () => (
  <div>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Roots</a>
        </Link>
      </Logo>
      <Nav />
    </div>

    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
