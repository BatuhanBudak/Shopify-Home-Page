import Image from "next/image";
import community from "../../public/icon/icon-community-large.png";
import communitySmall from "../../public/icon/icon-community-small.png";
export default function Community() {
  return (
    <section className="homepage-community">
      <section className="section section--tight section--padding-top-only homepage-container">
        <div className="community__grid ">
          <div className="title-card">
            <div className="docs-card docs-card--borderless">
              <div className="docs-card__body ">
                <div className="docs-card__body--image">
                  <Image
                    className="image docs-icon"
                    src={communitySmall}
                    alt=""
                    aria-hidden={true}
                  />
                </div>
                <div className="docs-card__content">
                  <div className="docs-card__heading  ">
                    <h2 className="heading--3">Join a community of builders</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a target="_self" href="https://community.shopify.com">
            <div className="docs-card ">
              <div className="docs-card__body ">
                <div className="docs-icon docs-icon--48 docs-icon--forums"></div>

                <div className="docs-card__content">
                  <div className="docs-card__heading docs-card__heading--secondary docs-card__heading--with-content">
                    <p className="heading--4">Developer forums</p>
                  </div>
                  <p className="docs-card__text">
                    Q&amp;A and advice from Shopify community experts
                  </p>
                </div>
              </div>
            </div>
          </a>{" "}
          <a
            target="_self"
            href="https://join.slack.com/t/shopifypartners/shared_invite/zt-fadywn35-y~7e2MJkJkQ4caIjmbKRpg"
          >
            <div className="docs-card ">
              <div className="docs-card__body ">
                <div className="docs-icon docs-icon--48 docs-icon--slack"></div>

                <div className="docs-card__content">
                  <div className="docs-card__heading docs-card__heading--secondary docs-card__heading--with-content">
                    <p className="heading--4">#development on Slack</p>
                  </div>
                  <p className="docs-card__text">
                    Collaboration and connection with Shopify employees
                  </p>
                </div>
              </div>
            </div>
          </a>{" "}
          <a target="_self" href="https://twitter.com/shopifydevs">
            <div className="docs-card ">
              <div className="docs-card__body ">
                <div className="docs-icon docs-icon--48 docs-icon--twitter"></div>

                <div className="docs-card__content">
                  <div className="docs-card__heading docs-card__heading--secondary docs-card__heading--with-content">
                    <p className="heading--4">@ShopifyDevs on Twitter</p>
                  </div>
                  <p className="docs-card__text">
                    Product announcements, API updates, tips and more
                  </p>
                </div>
              </div>
            </div>
          </a>{" "}
          <a target="_self" href="/changelog">
            <div className="docs-card ">
              <div className="docs-card__body ">
                <div className="docs-icon docs-icon--48 docs-icon--changelog"></div>

                <div className="docs-card__content">
                  <div className="docs-card__heading docs-card__heading--secondary docs-card__heading--with-content">
                    <p className="heading--4">Developer Changelog</p>
                  </div>
                  <p className="docs-card__text">
                    The latest Shopify ecosystem updates
                  </p>
                </div>
              </div>
            </div>
          </a>{" "}
          <a
            target="_self"
            href="https://www.youtube.com/channel/UCcYsEEKJtpxoO9T-keJZrEw"
          >
            <div className="docs-card ">
              <div className="docs-card__body ">
                <div className="docs-icon docs-icon--48 docs-icon--youtube"></div>

                <div className="docs-card__content">
                  <div className="docs-card__heading docs-card__heading--secondary docs-card__heading--with-content">
                    <p className="heading--4">ShopifyDevs YouTube channel</p>
                  </div>
                  <p className="docs-card__text">
                    Tips and insights in dev and design
                  </p>
                </div>
              </div>
            </div>
          </a>{" "}
          <a target="_self" href="https://discord.gg/shopifydevs">
            <div className="docs-card ">
              <div className="docs-card__body ">
                <div className="docs-icon docs-icon--48 docs-icon--discord"></div>

                <div className="docs-card__content">
                  <div className="docs-card__heading docs-card__heading--secondary docs-card__heading--with-content">
                    <p className="heading--4">ShopifyDevs Discord server</p>
                  </div>
                  <p className="docs-card__text">
                    Chat with other Shopify developers
                  </p>
                </div>
              </div>
            </div>
          </a>{" "}
          <a target="_self" href="https://www.shopify.com/partners/blog">
            <div className="docs-card ">
              <div className="docs-card__body ">
                <div className="docs-icon docs-icon--48 docs-icon--shopify"></div>

                <div className="docs-card__content">
                  <div className="docs-card__heading docs-card__heading--secondary docs-card__heading--with-content">
                    <p className="heading--4">Shopify Partners blog</p>
                  </div>
                  <p className="docs-card__text">
                    Educational resources and product previews
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </section>
  );
}
