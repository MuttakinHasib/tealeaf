import Link from "next/link";
import {
  HeartIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { Container } from ".";

const Header = () => {
  return (
    <header className="bg-darkBlue-50 sticky top-0 w-full">
      <Container>
        <div className="flex items-center justify-between">
          <button className="outline-none px-4 py-3 lg:hidden">
            <MenuIcon className="h-6 w-6 text-darkBlue-500" />
          </button>
          <Link href="/">
            <a>
              <img className="w-24" src="/assets/images/logo.png" alt="" />
            </a>
          </Link>
          <nav className="hidden flex-none lg:flex items-center space-x-3 text-darkBlue-900">
            <Link href="/shop">
              <a className="px-4 py-3">Shop</a>
            </Link>
            <Link href="/shop">
              <a className="px-4 py-3">Delivery</a>
            </Link>
            <Link href="/shop">
              <a className="px-4 py-3">FAQ</a>
            </Link>
            <Link href="/shop">
              <a className="px-4 py-3">Sales</a>
            </Link>
            <Link href="/shop">
              <a className="px-4 py-3">Contacts</a>
            </Link>
          </nav>
          <nav className="flex-none flex items-center space-x-3 text-darkBlue-500">
            <Link href="/shop">
              <a className="p-3 hidden sm:inline-block">
                <SearchIcon className="h-6 w-6 text-darkBlue-500" />
              </a>
            </Link>
            <Link href="/shop">
              <a className="p-3 hidden sm:inline-block">
                <UserIcon className="h-6 w-6 text-darkBlue-500" />
              </a>
            </Link>
            <Link href="/shop">
              <a className="p-3 hidden sm:inline-block">
                <HeartIcon className="h-6 w-6 text-darkBlue-500" />
              </a>
            </Link>
            <Link href="/shop">
              <a className="p-3 relative">
                <ShoppingBagIcon className="h-6 w-6 text-darkBlue-500" />
                <div className="absolute top-0 right-0 bg-red-500 px-1 h-5 flex justify-center items-center text-xs rounded-full text-white">
                  0
                </div>
              </a>
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
