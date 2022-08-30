import { Dark, Sun, Close } from "../Icons";
import useToggle from "../../hooks/useToggle";

export default function NavDrawer({ navOpen, isTransitioning, closeNav }) {
  const [secondAccordionOpen, toggleSecondAccordion] = useToggle();

  return (
    <div
      className={`drawer drawer--left ${
        isTransitioning ? `is-transitioning` : ``
      }`}
      id="NavDrawer"
      role="dialog"
      aria-modal={true}
      tabIndex={navOpen ? -1 : 0}
      aria-labelledby="DrawerTitle"
    >
      <div className="drawer__inner-wrapper">
        <div className="drawer__top drawer__inner-top-wrapper">
          <div className="drawer__inner-top">
            <button
              name="button"
              type="button"
              className="drawer__close-button js-drawer-close"
              onClick={closeNav}
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
              <div
                className={`accordion-item drawer-navigation__item ${
                  secondAccordionOpen ? "open" : ""
                }`}
              >
                <button
                  className="accordion-link drawer-navigation__link"
                  id="AccordionItem2"
                  tabIndex={0}
                  aria-controls="AccordionItem3"
                  aria-expanded={secondAccordionOpen}
                  onClick={toggleSecondAccordion}
                >
                  <span className="drawer-navigation__link-content">Menu</span>
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
                  className={`accordion-content drawer-navigation__content 
                    }`}
                  id="AccordionItem3"
                  role="region"
                  aria-labelledby="AccordionItem2"
                  aria-hidden={!secondAccordionOpen}
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
  );
}
