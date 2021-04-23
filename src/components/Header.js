import Link from "next/link";
import { Container } from ".";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <a>
              <img src="/assets/images/logo.png" alt="" />
            </a>
          </Link>
          <nav className="flex-none flex items-center">
            <Link href="/shop">
              <a>Shop</a>
            </Link>
          </nav>
          <nav className="flex-none flex items-center">
            <Link href="/shop">
              <a>Shop</a>
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
