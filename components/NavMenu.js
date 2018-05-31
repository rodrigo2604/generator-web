import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const NavMenu = () => (
  <nav className="genNav">
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/band">
      <a style={linkStyle}>The Band</a>
    </Link>
    <Link href="/music">
      <a style={linkStyle}>Music</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>

    <style jsx>
      {`
        .genNav {
          display: flex;
          flex-direction: column;
        }
      `}
    </style>
  </nav>
);

export default NavMenu;
