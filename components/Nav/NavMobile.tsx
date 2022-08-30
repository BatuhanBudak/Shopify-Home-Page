import { Hamburger } from "../Icons";

export default function NavMobile({ navOpen, openNav }) {
  return (
    <div className="marketing-nav--mobile-wrapper">
      <button
        name="button"
        type="button"
        className="marketing-nav__hamburger hide--expanded-nav"
        aria-haspopup="dialog"
        aria-expanded={navOpen}
        onClick={openNav}
      >
        <Hamburger />
      </button>
      <div className="marketing-nav__logo">
        <a href="" className="marketing-nav__logo__shopify" id="Main Nav Logo">
          <div className="shopify-logo">
            <span className="visuallyhidden">shopify.dev</span>
          </div>
        </a>
      </div>
    </div>
  );
}
