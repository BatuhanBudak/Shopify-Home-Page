import useScreenSize from "../../hooks/useScreenSize";
import { useState } from "react";
import useTransition from "../../hooks/useTransition";
import NavDrawer from "./NavDrawer";
import MarketingNav from "./MarketingNav";
import NavMobile from "./NavMobile";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [isTransitioning, toggleTransition] = useTransition();
  const windowWidth = useScreenSize();
  const breakPoint = 1000;

  function openNav() {
    setNavOpen(true);
    toggleTransition();
  }

  function closeNav() {
    setNavOpen(false);
    toggleTransition();
  }

  return (
    <header
      id="site-nav-container"
      className={`site-nav-container sticky ${navOpen ? "drawer-open" : ""}`}
    >
      <div className="marketing-nav-wrapper">
        <a className="visuallyhidden" href="#Main">
          Skip to Content
        </a>
        <nav
          className="marketing-nav
          marketing-nav--primary
          marketing-nav--skin-light"
          id="shopify-main-nav"
          aria-label="Main Menu"
        >
          <NavMobile openNav={openNav} navOpen={navOpen} />
          <MarketingNav />
        </nav>
      </div>

      <NavDrawer
        closeNav={closeNav}
        navOpen={navOpen}
        isTransitioning={isTransitioning}
      />
    </header>
  );
}
