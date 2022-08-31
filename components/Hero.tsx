import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-reading">
          <div className="hero__content--container">
            <h1 className="heading--jumbo">
              &quot;Build anything.&quot;
              <br />
              &quot;Reimagine commerce.&quot;
            </h1>
            <p className="heading--excerpt gutter-bottom">
              &quot;Millions of merchants trust Shopify to run their
              business—but they need developers to build the tools that help
              them achieve independence. Access powerful APIs to bring your
              ideas to life on the platform that makes commerce better for
              everyone.&quot;
            </p>
          </div>
        </div>
        <div className="gutter-bottom hide--wide hero-image">
          <div className="hero-2"></div>
        </div>
        <div className="hero-features">
          <ul className="hero__content--container">
            <li className="gutter-bottom">
              <p className="heading--3">
                Develop apps that solve complex merchant problems
              </p>
              <p>
                &quot; Expansive &quot;
                <a href="">GraphQL</a>
                &quot; and &quot;
                <a href="">REST APIs</a>
                &quot; let you integrate into Shopify &apos;s admin, online
                store, checkout, and more. &quot;
              </p>
            </li>
            <li className="gutter-bottom">
              <p className="heading--3">
                Integrate seamlessly into existing workflows
              </p>
              <p>
                &quot; Embed your app’s features with &quot;
                <a href="">App Bridge</a>
                &quot;. Create high quality experiences with the ready-to-build
                &quot;
                <a href="">Polaris</a>
                &quot; component library. &quot;
              </p>
            </li>
            <li className="gutter-bottom">
              <p className="heading--3">Help merchants express themselves</p>
              <p>
                &quot; Use &quot;
                <a href="">Liquid</a>
                &quot;. to build beautiful theme templates. Get started with
                &quot;
                <a href="">Dawn</a>
                &quot;, our blazingly fast, accessible reference theme. &quot;
              </p>
            </li>
            <li className="gutter-bottom">
              <p className="heading--3">Ship custom shopping experiences</p>
              <p>
                &quot; Add Shopify to any web, mobile, or gaming experience with
                the powerful &quot;
                <a href="">Storefront API</a>
                &quot; and SDKs, plus any front-end stack you want. Use &quot;
                <a href="">Marketplace Kit</a>
                &quot;, to connect your platform and its users to millions of
                Shopify merchants and their products. &quot;
              </p>
            </li>
          </ul>
          <div className="hero-actions gutter-bottom">
            <div className="hero__content-container">
              <p className="heading--3">Start building</p>
              <div className="hero-actions__grid">
                <a href="">
                  <div className="docs-card ">
                    <div className="docs-card__body ">
                      <div className="docs-icon docs-icon--48 docs-icon--apps"></div>

                      <div className="docs-card__content">
                        <div className="docs-card__heading  ">
                          <span className="heading--3">Apps</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="docs-card ">
                    <div className="docs-card__body ">
                      <div className="docs-icon docs-icon--48 docs-icon--themes"></div>

                      <div className="docs-card__content">
                        <div className="docs-card__heading  ">
                          <span className="heading--3">Themes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="docs-card ">
                    <div className="docs-card__body ">
                      <div className="docs-icon docs-icon--48 docs-icon--custom-storefronts"></div>

                      <div className="docs-card__content">
                        <div className="docs-card__heading  ">
                          <span className="heading--3">Storefronts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="docs-card ">
                    <div className="docs-card__body ">
                      <div className="docs-icon docs-icon--48 docs-icon--marketplaces"></div>

                      <div className="docs-card__content">
                        <div className="docs-card__heading  ">
                          <span className="heading--3">Marketplaces</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__illustration hero-image">
        <div className="hero-1"></div>
      </div>
    </section>
  );
}
