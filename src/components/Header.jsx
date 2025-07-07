import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center sm:flex-col sm:justify-center md:px-6 md:grid md:grid-cols-[auto,1fr,auto] md:gap-4">
        <h1 className="order-1">
          <a href="/" className="logo">
            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="Ramzi Haj massoud"
            />
          </a>
        </h1>
        <div className="relative order-3 sm:order-2 md:order-2 md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
            <span className="material-symbols-rounded">{navOpen ? 'close' : 'menu'}</span>
          </button>
          <Navbar navOpen={navOpen} className="hidden sm:block md:flex" />
        </div>
      </div>
    </header>
  );
};

export default Header;