import sharesPrice from "database/home3/sharesPrice.json";
import countDown from "database/home3/countDown.json";
import products from "database/home3/products.json";

const Homepage3 = () => {
  return (
    <main>
      <div className="uk-section uk-padding-remove-vertical">
        <div className="in-slideshow" data-uk-slideshow>
          <ul className="uk-slideshow-items uk-light">
            <li>
              <div className="uk-position-cover">
                <img
                  src="assets/img/in-slideshow-image-3.jpg"
                  data-src="assets/img/in-slideshow-image-3.jpg"
                  alt="slideshow1"
                  data-uk-cover
                  width={1920}
                  height={700}
                />
              </div>
              <span />
              <div className="uk-container">
                <div className="uk-grid" data-uk-grid>
                  <div className="uk-width-3-5@m">
                    <div className="uk-overlay">
                      <h1>Award-winning Products and Trading platforms</h1>
                      <p className="uk-text-lead uk-visible@m">
                        Tap into the world's markets and explore endless trading
                        opportunities with tight spreads and no commission.
                      </p>
                      <a
                        href="/#"
                        className="uk-button uk-button-primary uk-border-rounded uk-visible@m"
                      >
                        <i className="fas fa-scroll uk-margin-small-right" />
                        Discover it now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-position-cover">
                <img
                  src="assets/img/in-slideshow-image-2.jpg"
                  data-src="assets/img/in-slideshow-image-4.jpg"
                  alt="slideshow2"
                  data-uk-cover
                  width={1920}
                  height={700}
                />
              </div>
              <span />
              <div className="uk-container">
                <div className="uk-grid" data-uk-grid>
                  <div className="uk-width-3-5@m">
                    <div className="uk-overlay">
                      <h1>Your First Steps into the Financial Markets</h1>
                      <p className="uk-text-lead uk-visible@m">
                        A range of cutting-edge educational tools designed to
                        develop your trading skills of the financial markets.
                      </p>
                      <a
                        href="/#"
                        className="uk-button uk-button-primary uk-border-rounded uk-visible@m"
                      >
                        <i className="fas fa-scroll uk-margin-small-right" />
                        Discover it now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-position-cover">
                <img
                  src="assets/img/in-slideshow-image-1.jpg"
                  data-src="assets/img/in-slideshow-image-1.jpg"
                  alt="slideshow3"
                  data-uk-cover
                  width={1920}
                  height={700}
                />
              </div>
              <span />
              <div className="uk-container">
                <div className="uk-grid" data-uk-grid>
                  <div className="uk-width-3-5@m">
                    <div className="uk-overlay">
                      <h1>Trade Shares and Forex with Financial Thinking</h1>
                      <p className="uk-text-lead uk-visible@m">
                        Access 40,000+ instruments – across asset classes – to
                        trade, hedge and invest from a single account.
                      </p>
                      <a
                        href="/#"
                        className="uk-button uk-button-primary uk-border-rounded uk-visible@m"
                      >
                        <i className="fas fa-scroll uk-margin-small-right" />
                        Discover it now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="uk-container uk-light">
            <ul className="uk-slideshow-nav uk-dotnav uk-position-bottom-center" />
          </div>
        </div>
      </div>{" "}
      {/* section content begin */}
      <div className="uk-section uk-section-muted uk-section-xsmall">
        <div className="uk-container">
          <div className="uk-grid">
            <div className="uk-width-1-1">
              <div data-uk-slider="autoplay: true; autoplay-interval: 5000">
                <ul
                  className="uk-grid-divider uk-child-width-1-3@s uk-child-width-1-5@m uk-slider-items"
                  data-uk-grid
                >
                  {sharesPrice.map((share, index) => {
                    return (
                      <li key={index}>
                        <div className="uk-grid uk-grid-small">
                          <div className="uk-width-1-1 uk-text-center">
                            <h5>{share.title}</h5>
                          </div>
                          <div className="uk-width-1-2">
                            <p className="uk-text-small uk-text-uppercase uk-margin-remove">
                              Bid
                            </p>
                            <span
                              className={`uk-label uk-text-small uk-label-${share.bidStatus} uk-border-pill`}
                            >
                              {share.bidTxt}
                            </span>
                          </div>
                          <div className="uk-width-1-2 uk-text-right">
                            <p className="uk-text-small uk-text-uppercase uk-margin-remove">
                              Ask
                            </p>
                            <span
                              className={`uk-label uk-text-small uk-label-${share.askStatus} uk-border-pill`}
                            >
                              {share.askTxt}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
      {/* section content begin */}
      <div className="uk-section uk-padding-large in-wave-12 in-offset-bottom-70">
        <div className="uk-container">
          <div className="uk-grid">
            <div className="uk-width-3-4@m">
              <h1 className="uk-margin-remove-bottom">
                Why traders <span className="in-highlight">choose</span> Wave
                Capital
              </h1>
            </div>
          </div>
          <div
            className="uk-grid-large uk-child-width-1-2@s uk-child-width-1-4@m uk-margin-large-top"
            data-uk-grid
          >
            {countDown.map((card, index) => {
              return (
                <div key={index}>
                  <div className="in-wave-12-counter">
                    <h1 className="uk-heading-medium uk-margin-remove">
                      <span className="count" data-counter-end={card.count}>
                        0
                      </span>
                      <span className="in-wave-12-small">{card.suffix}</span>
                    </h1>
                    <h4 className="uk-margin-top uk-margin-remove-bottom">
                      {card.title}
                    </h4>
                    <p className="uk-text-muted uk-margin-remove-top">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="uk-grid uk-flex uk-flex-center uk-background-contain uk-background-top-center in-testimoni-wrap uk-background-image@m"
            style={{ backgroundImage: "url(img/in-wave-testibg.jpg)" }}
          >
            <div className="uk-width-3-4@m">
              <div className="uk-flex uk-flex-middle" data-uk-grid>
                <div className="uk-width-1-1 uk-width-auto@m uk-flex-last uk-flex-first@m">
                  <img
                    className="uk-align-center uk-margin-remove-bottom"
                    src="assets/img/in-testimoni-1.png"
                    alt="client-testimoni"
                    width={300}
                  />
                </div>
                <div className="uk-width-1-1 uk-width-expand@m">
                  <blockquote>
                    <p className="uk-margin-bottom uk-text-large">
                      It surpassed my expectations. Trading on the platform is
                      excellent and it allows for making accurate graphical
                      analyses of the market.
                    </p>
                    <footer>
                      Anthony Torres
                      <br />
                      <cite className="uk-label uk-text-small uk-border-pill">
                        Customer since 2012
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
      {/* section content begin */}
      <div className="uk-section uk-section-muted uk-padding-large">
        <div className="uk-container in-wave-13">
          <div className="uk-grid-large uk-position-relative" data-uk-grid>
            <div className="uk-position-bottom-right in-wave-mockup">
              <img
                src="assets/img/in-wave-mockup-3.png"
                alt="wave-mockup"
                width={860}
                height={530}
              />
            </div>
            <div className="uk-width-1-2@m">
              <h1 className="uk-text-primary uk-margin-remove">
                Metatrader 5:
              </h1>
              <h2 className="uk-margin-remove-top uk-margin-medium-bottom">
                Your trusted trading platfrom for any trade conditions
              </h2>
              <a
                href="/#"
                className="uk-button uk-button-secondary uk-border-rounded in-button-app"
              >
                <i className="fab fa-google-play fa-2x" />
                <span className="wrapper">
                  Download from<span>Play Store</span>
                </span>
              </a>
              <a
                href="/#"
                className="uk-button uk-button-secondary uk-border-rounded in-button-app uk-margin-small-left in-margin-remove-left@s"
              >
                <i className="fab fa-apple fa-2x" />
                <span className="wrapper">
                  Download from<span>App Store</span>
                </span>
              </a>
              <div
                className="uk-child-width-1-3@m uk-margin-medium-top"
                data-uk-grid
              >
                <div>
                  <img
                    className="uk-margin-remove-bottom"
                    src="assets/img/in-wave-icon-11.svg"
                    alt="wave-icon"
                    width={42}
                  />
                  <h4 className="uk-margin-top">Daily analysis</h4>
                  <p>Ducimus temporibus vel assumenda ad fugit culpa vero.</p>
                </div>
                <div>
                  <img
                    className="uk-margin-remove-bottom"
                    src="assets/img/in-wave-icon-12.svg"
                    alt="wave-icon"
                    width={42}
                  />
                  <h4 className="uk-margin-top">$100 deposit</h4>
                  <p>Vel assumenda ad fugit culpa provident quaemol alias.</p>
                </div>
                <div>
                  <img
                    className="uk-margin-remove-bottom"
                    src="assets/img/in-wave-icon-13.svg"
                    alt="wave-icon"
                    width={42}
                  />
                  <h4 className="uk-margin-top">Low spread</h4>
                  <p>Provident quae vero tenetur alias quod enim voluptates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
      {/* section content begin */}
      <div className="uk-section uk-padding-large">
        <div className="uk-container in-wave-14">
          <div className="uk-grid">
            <div className="uk-width-3-5@m">
              <h1 className="uk-margin-remove-bottom">
                Explore all <span className="in-highlight">products</span>
              </h1>
              <p className="uk-text-lead uk-text-muted">
                Invest in cash products, trade with leveraged products or let
                the experts manage your money.
              </p>
            </div>
            <div className="uk-width-1-1@m">
              <div
                className="uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-4@m uk-margin-medium-top in-wave-14-products"
                data-uk-grid
              >
                {products.map((product, index) => {
                  return (
                    <div key={index}>
                      <div className="uk-card uk-card-body uk-card-small uk-card-default uk-border-rounded uk-flex uk-flex-middle">
                        <div className="uk-margin-small-right">
                          <i
                            className={`in-icon-wrap small ${product.iconColor}`}
                          >
                            {product.iconTxt}
                          </i>
                        </div>
                        <div>
                          <h6 className="uk-margin-remove">{product.title}</h6>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="uk-grid uk-flex uk-flex-center uk-margin-large-top">
                <div className="uk-width-3-5@m">
                  <div className="uk-card uk-card-default uk-card-body uk-text-center uk-border-rounded uk-box-shadow-small in-wave-14-card">
                    <span className="uk-label uk-text-small uk-text-uppercase uk-border-pill uk-margin-small-right">
                      EXPLORE
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing reprehen
                    elit. <a href="/#">Learn more</a>
                  </div>
                  <div
                    className="uk-grid-collapse uk-grid-divider uk-child-width-1-3@m uk-text-center uk-margin-top uk-margin-small-bottom"
                    data-uk-grid
                  >
                    <div>
                      <i className="fas fa-headset fa-lg uk-margin-small-right uk-text-primary" />
                      <p className="uk-margin-remove uk-text-small uk-text-uppercase">
                        Award-winning support
                      </p>
                    </div>
                    <div>
                      <i className="fas fa-university fa-lg uk-margin-small-right uk-text-primary" />
                      <p className="uk-margin-remove uk-text-small uk-text-uppercase">
                        Regulated by the FCA,UK
                      </p>
                    </div>
                    <div>
                      <i className="fas fa-history fa-lg uk-margin-small-right uk-text-primary" />
                      <p className="uk-margin-remove uk-text-small uk-text-uppercase">
                        30 years experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
      {/* section content begin */}
      <div
        className="uk-section uk-section-default in-wave-15 in-offset-bottom-40 uk-background-contain uk-background-center-right uk-background-image@m"
        style={{ backgroundImage: "url(img/in-wave-background-3.png)" }}
      >
        <div className="uk-container">
          <div className="uk-grid uk-flex uk-flex-middle">
            <div className="uk-width-1-3@m">
              <h2>
                Join over <span className="uk-text-primary">1 million</span>{" "}
                traders over the world
              </h2>
              <p>Sign up for your demo account now.</p>
              <form className="uk-grid-small" data-uk-grid>
                <div className="uk-width-1-1 uk-width-expand@m">
                  <input
                    className="uk-input uk-border-rounded"
                    type="text"
                    placeholder="Email address"
                  />
                </div>
                <div className="uk-width-1-1 uk-width-auto@m">
                  <button className="uk-button uk-button-primary uk-border-rounded uk-width-expand">
                    Sign up
                  </button>
                </div>
              </form>
              <div className="uk-margin-top">
                <span className="uk-text-small uk-text-muted uk-margin-small-right">
                  Or sign up with
                </span>
                <a
                  className="uk-button uk-button-small uk-border-rounded in-brand-google"
                  href="/#"
                >
                  <i className="fab fa-google" />
                </a>
                <a
                  className="uk-button uk-button-small uk-border-rounded in-brand-facebook"
                  href="/#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
            <div className="uk-width-expand@m uk-flex uk-flex-center in-margin-medium-top@s">
              <img
                src="assets/img/in-wave-mockup-4.png"
                alt="wave-mockup"
                width={292}
                height={286}
              />
            </div>
            <div className="uk-width-auto@m uk-visible@m">
              <a
                className="uk-flex uk-flex-middle uk-light in-wave-15-button"
                href="/#"
              >
                <h3>
                  Get a taste of the
                  <br />
                  Wave experience
                </h3>
                <i className="fas fa-chevron-right fa-lg uk-margin-left" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
    </main>
  );
};
export default Homepage3;
