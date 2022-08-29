import Image from "next/image";
import Nav from "./Nav";
import podiaLogo from "../public/icons/podia-logo.svg";
import useScreenSize from "../hooks/useScreenSize";
import { useState } from "react";
import { Hamburger, ChevronDown, Magnify, Dark, Sun, Close } from "./Icons";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const windowWidth = useScreenSize();
  const breakPoint = 1000;

  function toggleNav() {
    setNavOpen((prev) => !prev);
  }

  function closeNav() {
    setNavOpen(false);
  }

  return (
    <header id="SiteNavContainer" className="site-nav-container sticky">
      <div className="marketing-nav-wrapper">
        <a className="visuallyhidden" href="#Main">
          Skip to Content
        </a>
        <nav
          className="marketing-nav marketing-nav--primary marketing-nav--skin-light"
          id="ShopifyMainNav"
          aria-label="Main Menu"
        >
          <div className="marketing-nav--mobile-wrapper">
            <button
              name="button"
              type="button"
              className="marketing-nav__hamburger"
              aria-haspopup="dialog"
              aria-expanded={navOpen}
              onClick={toggleNav}
            >
              <Hamburger />
            </button>
            <div className="marketing-nav__logo">
              <a
                href=""
                className="marketing-nav__logo__shopify"
                id="Main Nav Logo"
              >
                <div className="shopify-logo">
                  <span className="visuallyhidden">shopify.dev</span>
                </div>
              </a>
            </div>
          </div>
          <div className="marketing-nav__container">
            <ul className="marketing-nav__items">
              <li>
                <a
                  href=""
                  className="marketing-nav__item marketing-nav__item--primary"
                >
                  Apps
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="marketing-nav__item marketing-nav__item--primary"
                >
                  Themes
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="marketing-nav__item marketing-nav__item--primary"
                >
                  Custom storefronts
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="marketing-nav__item marketing-nav__item--primary"
                >
                  Marketplaces
                </a>
              </li>
              <li>
                <div className="popover-wrapper popover-wrapper--dropdown">
                  <button
                    type="button"
                    className="popover__trigger marketing-nav__item marketing-nav__item--primary"
                    aria-expanded={false}
                    aria-controls="Popover4"
                    aria-current="location"
                  >
                    APIs and references
                    <ChevronDown />
                  </button>
                  <div
                    className="popover popover--position-bottom popover--align-left"
                    id="Popover4"
                  >
                    <div className="popover__content">
                      <ul className="popover__list">
                        <li>
                          <p className="popover__description marketing-nav__item marketing-nav__item--child">
                            Apps
                          </p>
                          <ul className="popover__list">
                            <li>
                              <a
                                href=""
                                className="marketing-nav__item marketing-nav__item--child"
                              >
                                GraphQL Admin API
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                className="marketing-nav__item marketing-nav__item--child"
                              >
                                Rest Admin API
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p className="popover__description marketing-nav__item marketing-nav__item--child">
                            Themes
                          </p>
                          <ul className="popover__list">
                            <li>
                              <a
                                href=""
                                className="marketing-nav__item marketing-nav__item--child"
                              >
                                Liquid
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                className="marketing-nav__item marketing-nav__item--child"
                              >
                                Ajax API
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p className="popover__description marketing-nav__item marketing-nav__item--child">
                            Custom storefronts
                          </p>
                          <ul className="popover__list">
                            <li>
                              <a
                                href=""
                                className="marketing-nav__item marketing-nav__item--child"
                              >
                                Storefront API
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                className="marketing-nav__item marketing-nav__item--child"
                              >
                                Hydrogen
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <ul className="popover__list">
                            <li>
                              <a
                                href=""
                                className="marketing-nav__item marketing-nav__item--child marketing-nav__item--sepereated"
                              >
                                View all
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="search-container" id="searchContainer">
              <form className="search-form" acceptCharset="UTF-8">
                <label className="marketing-input-wrapper search-input-wrapper">
                  <span className="marketing-label marketing-label--hidden visuallyhidden">
                    Search the documentation
                  </span>
                  <input
                    className="marketing-input search-input"
                    id="searchInput"
                    type="search"
                    name="query"
                    placeholder="Search"
                    required
                  />
                </label>
                <button
                  name="button"
                  type="submit"
                  id="searchSubmitButton"
                  className="search-submit-button"
                  aria-label="Search Submit button"
                >
                  <Magnify
                    classname="search-submit-button__icon"
                    hidden="true"
                    focus="false"
                  />
                </button>
              </form>
              <button
                type="button"
                className="search-mobile-button"
                id="searchMobileButton"
              >
                <Magnify
                  classname="icon search-mobile-button__icon"
                  hidden="true"
                  focus="false"
                  id="icon-search-magnify"
                  title="Search"
                />
              </button>
            </div>
            <ul className="marketing-nav__items marketing-nav__user display--expanded-nav">
              <li className="theme-mode-toggle-container">
                <button
                  type="button"
                  name="button"
                  id="theme-mode-toggle"
                  aria-label="View dark mode"
                >
                  <Dark />
                  <Sun />
                </button>
              </li>
              <li>
                <a
                  className="marketing-nav__item marketing-nav__item--user"
                  href=""
                >
                  Log in
                </a>
              </li>
              <li>
                <a
                  className="marketing-nav__item marketing-nav__item--user"
                  href=""
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div
        id="NavDrawer"
        className="drawer drawer--left"
        role="dialog"
        aria-modal={true}
        aria-labelledby="DrawerTitle"
      >
        <div className="drawer__inner-wrapper">
          <div className="drawer__top drawer__inner-top-wrapper">
            <div className="drawer__inner-top">
              <button
                name="button"
                type="button"
                className="drawer__close-button js-drawer-close"
              >
                <Close />
              </button>
              <div className="marketing-nav-logo">
                <a href="" className="marketing-nav__logo__shopify">
                  <div className="shopify-logo">
                    <span className="visuallyhidden">shopify.dev</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="drawer__inner-bottom">
            <nav id="DrawerTitle" aria-label="Main Navigation">
              <div className="drawer-navigation">
                <div className="accordion-item drawer-navigation__item">
                  <button
                    className="accordion-link drawer-navigation__link"
                    id="AccordionItem2"
                    tabIndex={0}
                    aria-controls="AccordionItem3"
                    aria-expanded="false"
                  >
                    <span className="drawer-navigation__link-content">
                      Menu
                    </span>
                    <svg
                      className="icon drawer-navigation__caret"
                      width="24px"
                      height="24px"
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                      />
                    </svg>
                  </button>
                  <div
                    className="accordion-content drawer-navigation__content"
                    id="AccordionItem3"
                    role="region"
                    aria-labelledby="AccordionItem2"
                    aria-hidden={true}
                  >
                    <ul>
                      <li className="drawer-navigation__list">
                        <a href="" className="drawer__item">
                          Apps
                        </a>
                      </li>
                      <li className="drawer-navigation__list">
                        <a href="" className="drawer__item">
                          Themes
                        </a>
                      </li>
                      <li className="drawer-navigation__list">
                        <a href="" className="drawer__item">
                          Custom storefronts
                        </a>
                      </li>
                      <li className="drawer-navigation__list">
                        <a href="" className="drawer__item">
                          Marketplaces
                        </a>
                      </li>
                      <li className="drawer-navigation__list">
                        <a href="" className="drawer__item">
                          APIs and references
                        </a>
                        <ul className="drawer__items drawer__items--nested">
                          <li className="drawer-navigation__list">
                            <ul className="drawer__items drawer__items--nested">
                              <li className="drawer-navigation__list">
                                <a href="" className="drawer__item">
                                  GraphQL Admin API
                                </a>
                              </li>
                              <li className="drawer-navigation__list">
                                <a href="" className="drawer__item">
                                  Rest Admin API
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="drawer-navigation__list">
                            <ul className="drawer__items drawer__items--nested">
                              <li className="drawer-navigation__list">
                                <a href="" className="drawer__item">
                                  Liquid
                                </a>
                              </li>
                              <li className="drawer-navigation__list">
                                <a href="" className="drawer__item">
                                  Ajax API
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="drawer-navigation__list">
                            <ul className="drawer__items drawer__items--nested">
                              <li className="drawer-navigation__list">
                                <a href="" className="drawer__item">
                                  Storefront API
                                </a>
                              </li>
                              <li className="drawer-navigation__list">
                                <a href="" className="drawer__item">
                                  Hydrogen
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="drawer-navigation__list">
                            <ul className="drawer__items drawer__items--nested">
                              <li className="drawer-navigation__list">
                                <a
                                  href=""
                                  className="drawer__item marketing-nav__item--seperated"
                                >
                                  View all
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="drawer-sidebar">
          <ul className="drawer__inner-bottom user-links">
            <li>
              <a href="" className="drawer__item">
                Log in
              </a>
            </li>
            <li>
              <a href="" className="drawer__item">
                Sign up
              </a>
            </li>
            <li className="drawer__item theme-mode-toggle-sidebar-container">
              <button
                type="button"
                name="button"
                id="theme-mode-toggle-sidebar"
                className="theme-mode-button-sidebar"
                aria-label="View dark mode"
              >
                <Dark />
                <Sun />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
