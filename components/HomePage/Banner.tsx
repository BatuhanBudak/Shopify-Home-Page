import React from "react";

export default function Banner() {
  return (
    <section className="docs-banner">
      <div className="homepage-container docs-banner__container">
        <div className="docs-banner__content">
          <h2 className="gutter-bottom heading--1">
            Launch your app or theme to millions of merchants
          </h2>
          <div className="gutter-bottom">
            <h3>App Store</h3>
            <p>
              Get your app in front of the right merchants. With personalized
              recommendations and multiple billing options, the{" "}
              <a href="https://apps.shopify.com">Shopify App Store</a> is where
              merchants go to find the apps their business needs most.
            </p>
          </div>
          <div className="gutter-bottom">
            <h3>Theme Store</h3>
            <p>
              Sell your theme to merchants building their brands on the{" "}
              <a href="https://themes.shopify.com">Shopify Theme Store</a>,
              which offers flexible pricing and targeted merchandising.
            </p>
          </div>
        </div>
        <ul className="homepage-stats-box">
          <li className="homepage-stats-box__row">
            <div className="docs-icon docs-icon--48 docs-icon--coin"></div>

            <div>
              <span className="heading--4">$12.5B USD</span> Revenue generated
              from the Shopify ecosystem (2020){" "}
            </div>
          </li>
          <li className="homepage-stats-box__row">
            <div className="docs-icon docs-icon--48 docs-icon--hearts"></div>

            <span className="heading--4">3 in 4 merchants use apps</span>
          </li>
          <li className="homepage-stats-box__row">
            <div className="row-icon">
              <div className="docs-icon docs-icon--48 docs-icon--app"></div>

              <sub className="row-icon__helper" aria-hidden="true">
                x6
              </sub>
            </div>
            <span className="heading--4" aria-hidden="true">
              Average number of apps installed per merchant
            </span>
            <span className="visuallyhidden">
              An average of 6 apps are installed per merchant
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
