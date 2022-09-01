import React from "react";

export default function Footer() {
  return (
    <footer
      className="footer--light"
      role="contentinfo"
      id="PageContainerFooter"
    >
      <div className="footer-top">
        <div className="grid">
          <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-2">
            <h3 className="footer-subhead heading--5 ">News and updates</h3>
            <ul className="footer-top--list" role="list">
              <li>
                <a className="footer-link" href="/changelog">
                  Developer changelog
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="https://www.shopifystatus.com/"
                >
                  Shopify status
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-2">
            <h3 className="footer-subhead heading--5 ">Blogs</h3>
            <ul className="footer-top--list" role="list">
              <li>
                <a
                  className="footer-link"
                  href="https://www.shopify.com/partners/blog"
                >
                  Partner blog
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://shopify.engineering/">
                  Engineering blog
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://ux.shopify.com/">
                  UX blog
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-2">
            <h3 className="footer-subhead heading--5 ">Community</h3>
            <ul className="footer-top--list" role="list">
              <li>
                <a
                  className="footer-link"
                  href="https://community.shopify.com/c/App-Partner-Platform/ct-p/appdev"
                >
                  Developer forums
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="https://discord.gg/shopifydevs"
                >
                  Devs Discord
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="https://www.facebook.com/shopifypartners/"
                >
                  Facebook group
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-2">
            <h3 className="footer-subhead heading--5 ">Social</h3>
            <ul className="footer-top--list" role="list">
              <li>
                <a
                  className="footer-link footer-link--social footer-link--twitch"
                  href="https://www.twitch.tv/shopifydevs"
                >
                  Twitch
                </a>
              </li>
              <li>
                <a
                  className="footer-link footer-link--social footer-link--youtube"
                  href="https://www.youtube.com/c/shopifydevs"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  className="footer-link footer-link--social footer-link--twitter"
                  href="https://twitter.com/ShopifyDevs"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-2">
            <h3 className="footer-subhead heading--5 ">Events</h3>
            <ul className="footer-top--list" role="list">
              <li>
                <a className="footer-link" href="https://unite.shopify.com/">
                  Unite
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="https://events.shopify.com/partners"
                >
                  Meetups
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="https://events.shopify.com/partnertownhall"
                >
                  Partner Town Hall
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-2">
            <h3 className="footer-subhead heading--5 ">Legal</h3>
            <ul className="footer-top--list" role="list">
              <li>
                <a
                  className="footer-link"
                  href="https://www.shopify.com/legal/terms"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="https://www.shopify.com/legal/api-terms"
                >
                  API Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="https://www.shopify.com/legal/privacy"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="https://www.shopify.com/partners/terms"
                >
                  Partner program agreement
                </a>
              </li>
            </ul>
          </div>
        </div>{" "}
      </div>

      <div className="footer-bottom">
        <div className="grid grid--vertically-centered">
          <div className="grid__item">
            <nav className="footer-nav" aria-label="Footer menu">
              <ul className="footer-nav__list" role="list">
                <li className="footer-nav__list-item">
                  <a href="https://www.shopify.com/about">About Shopify</a>
                </li>
                <li className="footer-nav__list-item">
                  <a href="https://www.shopify.com/plus">Shopify Plus</a>
                </li>
                <li className="footer-nav__list-item">
                  <a href="https://www.shopify.com/careers">Careers</a>
                </li>
                <li className="footer-nav__list-item">
                  <a href="https://investors.shopify.com/">Investors</a>
                </li>
                <li className="footer-nav__list-item">
                  <a href="https://www.shopify.com/press">Press and Media</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>{" "}
      </div>
    </footer>
  );
}
