import { useEffect, useRef, useState } from "react";
import useToggle from "../../hooks/useToggle";
import { ChevronDown, Magnify, Dark, Sun, BackSlash } from "../Icons";

export default function MarketingNav() {
  const [searchFormVisible, toggleSearchForm] = useToggle();
  const [accordionVisible, toggleAccordion] = useToggle();
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();
  const accordionRef = useRef();
  const buttonRef = useRef();

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function handleModalClick(e) {
    if (e.target === inputRef.current) {
      return;
    }
    toggleSearchForm();
  }

  useEffect(() => {
    const accordionBtn = buttonRef.current;
    const accordion = accordionRef.current;

    function handleDocumentClick(e) {
      if (accordionBtn && accordion && accordionVisible) {
        if (e.target === accordion || e.target === accordionBtn) {
          return;
        } else {
          toggleAccordion();
        }
      }
      return;
    }
    document.body.addEventListener("click", (e) => handleDocumentClick(e));

    return () => {
      document.body.removeEventListener("click", handleDocumentClick);
    };
  }, [accordionVisible, toggleAccordion]);

  return (
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
              aria-expanded={accordionVisible}
              aria-controls="popover-4"
              aria-current="location"
              onClick={toggleAccordion}
              ref={buttonRef}
            >
              APIs and references
              <ChevronDown />
            </button>
            {accordionVisible && (
              <div
                className="popover popover--position-bottom popover--align-left"
                id="popover-4"
                ref={accordionRef}
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
                            className="marketing-nav__item marketing-nav__item--child marketing-nav__item--seperated"
                          >
                            View all
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </li>
      </ul>
      <div className="search-container" id="searchContainer">
        <button
          type="button"
          className="search-mobile-button"
          id="open-search"
          onClick={toggleSearchForm}
          aria-controls="search-modal"
        >
          <span className="search-mobile-button-icon-container-big">
            <Magnify
              classname="icon search-mobile-button__icon"
              hidden="true"
              focus="false"
              id="icon-search-magnify"
              title="Search"
            />
          </span>
          <span className="search-label">Search</span>
          <span className="backslash-icon-container">
            <BackSlash />
          </span>
          <span className="search-mobile-button-icon-container">
            <Magnify
              classname="icon search-mobile-button__icon"
              hidden="true"
              focus="false"
              id="icon-search-magnify"
              title="Search"
            />
          </span>
        </button>
        {searchFormVisible && (
          <div
            className="search-modal-wrapper"
            id="search-modal"
            aria-hidden={!searchFormVisible}
            onClick={(e) => handleModalClick(e)}
          >
            <div
              className="search-modal-container"
              id="search-modal"
              tabIndex={-1}
            >
              <div className="search-modal">
                <div className="search-modal__inner">
                  <span className="search-span">
                    <Magnify
                      classname="search-span__icon"
                      hidden="true"
                      focus="false"
                    />
                  </span>
                  <label htmlFor="search-input" id="search-input-label">
                    <span className="visuallyhidden">Search</span>
                  </label>
                  <input
                    className="search-input"
                    id="search-input"
                    type="search"
                    name="query"
                    value={searchValue}
                    onChange={(e) => handleChange(e)}
                    ref={inputRef}
                    placeholder="Search"
                    aria-labelledby="search-input-label"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <ul className="marketing-nav__items marketing-nav__user display--expanded-nav">
        <li className="theme-mode-toggle-container">
          <button
            type="button"
            name="button"
            id="theme-mode-toggle"
            className="theme-mode-button"
            aria-label="View dark mode"
          >
            <Dark />
            <Sun />
          </button>
        </li>
        <li>
          <a className="marketing-nav__item marketing-nav__item--user" href="">
            Log in
          </a>
        </li>
        <li>
          <a className="marketing-nav__item marketing-nav__item--user" href="">
            Sign up
          </a>
        </li>
      </ul>
    </div>
  );
}
