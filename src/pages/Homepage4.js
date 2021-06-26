import brands from "database/home4/brands.json";
import services from "database/home4/services.json";
const Homepage4 = () => {
  return (
    <main>
      <div className="uk-section uk-padding-remove-vertical">
        <div className="in-slideshow" data-uk-slideshow>
          <ul className="uk-slideshow-items uk-light">
            <li>
              <div className="uk-position-cover">
                <img
                  src="assets/img/in-slideshow-image-1.jpg"
                  data-src="assets/img/in-slideshow-image-1.jpg"
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
                  src="assets/img/in-slideshow-image-2.jpg"
                  data-src=""
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
            <li>
              <div className="uk-position-cover">
                <img
                  src="assets/img/in-slideshow-image-3.jpg"
                  data-src=""
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
                      <h1>Multi-regulated Global Forex and Shares Broker</h1>
                      <p className="uk-text-lead uk-visible@m">
                        A trusted destination for traders worldwide, Authorised
                        by FCA, ASIC &amp; FSCA with multi-lingual support 24/5.
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
      <div className="uk-section uk-padding-large">
        <div className="uk-container">
          <div className="uk-grid">
            <div className="uk-width-1-1 in-wave-16">
              <div className="uk-card uk-card-default uk-box-shadow-small uk-border-rounded in-margin-medium-top@s">
                <div className="uk-grid" data-uk-grid>
                  <div className="uk-width-expand@s uk-width-2-5@m uk-card-media-right uk-cover-container">
                    <img
                      className="uk-width-1-1 uk-margin-remove-bottom"
                      src="assets/img/in-wave-image-2.jpg"
                      alt="sample"
                    />
                  </div>
                  <div className="uk-width-1-2@s uk-width-expand@m uk-flex uk-flex-middle">
                    <div className="uk-card-body">
                      <h1>
                        Trusted for more than
                        <br />
                        <span className="in-highlight">20 years</span>
                      </h1>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit
                        aut fugit sed quia consequuntur.
                      </p>
                      <h4 className="uk-margin-remove-bottom uk-visible@m">
                        Multi-award winner
                      </h4>
                      <hr className="uk-visible@m" />
                      <div
                        className="uk-child-width-1-3@m uk-text-center uk-visible@m"
                        data-uk-grid
                      >
                        <div>
                          <img
                            src="assets/img/in-wave-award.svg"
                            alt="wave-award"
                          />
                          <h6 className="uk-margin-small-top uk-margin-remove-bottom">
                            Best CFD Broker
                          </h6>
                          <p className="uk-text-small uk-margin-remove-top">
                            TradeON Summit 2020
                          </p>
                        </div>
                        <div>
                          <img
                            src="assets/img/in-wave-award.svg"
                            alt="wave-award"
                          />
                          <h6 className="uk-margin-small-top uk-margin-remove-bottom">
                            Best Trading Experience
                          </h6>
                          <p className="uk-text-small uk-margin-remove-top">
                            Jordan Forex EXPO 2020
                          </p>
                        </div>
                        <div>
                          <img
                            src="assets/img/in-wave-award.svg"
                            alt="wave-award"
                          />
                          <h6 className="uk-margin-small-top uk-margin-remove-bottom">
                            Best Execution Broker
                          </h6>
                          <p className="uk-text-small uk-margin-remove-top">
                            Forex EXPO Dubai 2020
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-width-1-1 uk-margin-medium-top">
              <div className="uk-grid-divider" data-uk-grid>
                <div className="uk-width-auto@m uk-flex uk-flex-middle">
                  <p className="uk-text-lead uk-text-muted uk-margin-right">
                    As seen on
                  </p>
                </div>
                <div className="uk-width-expand@m">
                  <div
                    className="uk-grid-medium uk-child-width-1-4@s uk-child-width-1-5@m uk-text-center in-client-logo-3"
                    data-uk-grid
                  >
                    {brands.map((brand, index) => {
                      return (
                        <div key={index} className="uk-tile uk-tile-default">
                          <img
                            className="uk-margin-remove"
                            src={brand}
                            alt="client-logo"
                            width={147}
                            height={42}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
      {/* section content begin */}
      <div className="uk-section in-wave-17 in-offset-top-20 in-offset-bottom-40">
        <div className="uk-container">
          <div className="uk-grid" data-uk-grid>
            <div className="uk-width-1-3@m">
              <h1>
                A partner invested in your
                <br />
                <span className="in-highlight">success</span>
              </h1>
              <p>
                Trade with confidence and benefit from the reliability of a
                trusted broker with a proven record of stability, security and
                strength.
              </p>
              <a
                className="uk-button uk-button-primary uk-border-rounded"
                href="/#"
              >
                Open an Account
              </a>
              <p className="uk-text-small">
                Not ready? <a href="/#">Sign up for a demo account.</a>
              </p>
            </div>
            <div className="uk-width-expand@m">
              <div className="uk-grid uk-grid-collapse uk-child-width-1-3@m uk-child-width-1-2@s uk-text-center">
                {services.map((service, index) => {
                  return (
                    <div key={index} className="uk-tile uk-tile-default">
                      <img
                        className="uk-margin-remove-bottom"
                        src={service.icon}
                        alt="wave-icon"
                        width={64}
                      />
                      <h5 className="uk-margin-small-top">{service.title}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="in-price-list">
          <div className="uk-container">
            <div className="uk-grid">
              <div className="uk-width-1-1">
                <div data-uk-slider="autoplay: true; autoplay-interval: 5000">
                  <ul
                    className="uk-slider-items uk-child-width-1-5@m uk-text-small uk-text-center"
                    data-uk-grid
                  >
                    <li>
                      XAUUSD{" "}
                      <span className="uk-label uk-label-success uk-border-pill uk-margin-small-left">
                        <i className="fas fa-caret-up" /> 1478.81 &nbsp;(+0.28%)
                      </span>
                    </li>
                    <li>
                      GBPUSD{" "}
                      <span className="uk-label uk-label-danger uk-border-pill uk-margin-small-left">
                        <i className="fas fa-caret-down" /> 1.3191
                        &nbsp;(-1.07%)
                      </span>
                    </li>
                    <li>
                      EURUSD{" "}
                      <span className="uk-label uk-label-danger uk-border-pill uk-margin-small-left">
                        <i className="fas fa-caret-down" /> 1.1159
                        &nbsp;(-0.11%)
                      </span>
                    </li>
                    <li>
                      USDJPY{" "}
                      <span className="uk-label uk-label-success uk-border-pill uk-margin-small-left">
                        <i className="fas fa-caret-up" /> 109.59 &nbsp;(+0.05%)
                      </span>
                    </li>
                    <li>
                      USDCAD{" "}
                      <span className="uk-label uk-label-success uk-border-pill uk-margin-small-left">
                        <i className="fas fa-caret-up" /> 1.3172 &nbsp;(+0.18%)
                      </span>
                    </li>
                    <li>
                      USDCHF{" "}
                      <span className="uk-label uk-label-success uk-border-pill uk-margin-small-left">
                        <i className="fas fa-caret-up" /> 0.9776 &nbsp;(+0.06%)
                      </span>
                    </li>
                    <li>
                      AUDUSD{" "}
                      <span className="uk-label uk-label-danger uk-border-pill uk-margin-small-left">
                        <i className="fas fa-caret-down" /> 0.67064
                        &nbsp;(-0.08%)
                      </span>
                    </li>
                    <li>
                      GBPJPY{" "}
                      <span className="uk-label uk-label-success uk-border-pill uk-margin-small-left">
                        <i className="fas fa-caret-up" /> 141.91 &nbsp;(+0.12%)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
      {/* section content begin */}
      <div
        className="uk-section uk-section-muted uk-padding-remove-vertical uk-background-contain uk-background-center-right uk-background-image@m"
        style={{ backgroundImage: "url(img/in-wave-platformbg.jpg)" }}
      >
        <div className="uk-container in-wave-18">
          <div className="uk-grid-large uk-flex uk-flex-middle" data-uk-grid>
            <div className="uk-width-1-2@m">
              <div className="uk-margin-bottom">
                <a href="/#" className="uk-button in-button-app">
                  <i className="fab fa-google-play fa-2x" />
                  <span className="wrapper">
                    Download from<span>Play Store</span>
                  </span>
                </a>
                <a
                  href="/#"
                  className="uk-button in-button-app uk-margin-medium-left"
                >
                  <i className="fab fa-apple fa-2x" />
                  <span className="wrapper">
                    Download from<span>App Store</span>
                  </span>
                </a>
                <a
                  href="/#"
                  className="uk-button in-button-app uk-margin-medium-left uk-visible@m"
                >
                  <i className="fab fa-windows fa-2x" />
                  <span className="wrapper">
                    Download from<span>Microsoft Store</span>
                  </span>
                </a>
              </div>
              <hr />
              <h1 className="uk-margin-remove">
                Trade on <span className="in-highlight">world class</span>{" "}
                platform
              </h1>
              <p className="uk-margin-medium-bottom in-margin-remove-bottom@s">
                Facilis este expedita distinctio libero tempore soluta nobis
                eligendi duis aute irure dolor in reprehenderit in voluptate
                velit esse.
              </p>
            </div>
            <div className="uk-width-1-2@m">
              <img
                className="uk-align-center uk-align-left@m"
                src="assets/img/in-wave-mockup-5.png"
                alt="wave-mockup"
                width={533}
                height={330}
              />
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
      {/* section content begin */}
      <div className="uk-section">
        <div className="uk-container in-wave-19">
          <div className="uk-grid uk-flex uk-flex-center">
            <div className="uk-width-3-4@m">
              <div
                className="uk-grid-divider uk-child-width-1-3@s uk-child-width-1-3@m uk-margin-medium-top uk-margin-bottom"
                data-uk-grid
              >
                <div>
                  <div className="uk-flex uk-flex-middle">
                    <div className="uk-margin-small-right">
                      <i className="fas fa-edit fa-2x in-icon-wrap small transparent" />
                    </div>
                    <div>
                      <h4 className="uk-margin-remove">Register</h4>
                    </div>
                  </div>
                  <p>
                    Fill in your personal details in our secure online
                    application.
                  </p>
                </div>
                <div>
                  <div className="uk-flex uk-flex-middle">
                    <div className="uk-margin-small-right">
                      <i className="fas fa-money-bill-wave fa-2x in-icon-wrap small transparent" />
                    </div>
                    <div>
                      <h4 className="uk-margin-remove">Deposit</h4>
                    </div>
                  </div>
                  <p>
                    Make a deposit via debit card, wire transfer, eCheck or
                    check.
                  </p>
                </div>
                <div>
                  <div className="uk-flex uk-flex-middle">
                    <div className="uk-margin-small-right">
                      <i className="fas fa-chart-line fa-2x in-icon-wrap small transparent" />
                    </div>
                    <div>
                      <h4 className="uk-margin-remove">Trading</h4>
                    </div>
                  </div>
                  <p>
                    Once your approved, you can trade on desktop and mobile.
                  </p>
                </div>
              </div>
              <div className="in-create-account uk-margin-medium-top">
                <span className="uk-label uk-text-small uk-text-uppercase uk-border-pill uk-margin-small-bottom">
                  Open your account
                </span>
                <p className="uk-margin-remove-top uk-visible@m">
                  Connect with over 5 millions investors in the world’s leading
                  social investment network
                </p>
                <form className="uk-grid-small" data-uk-grid>
                  <div className="uk-width-1-1 uk-width-1-4@m">
                    <input
                      className="uk-input uk-border-rounded"
                      type="text"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="uk-width-1-1 uk-width-1-4@m">
                    <input
                      className="uk-input uk-border-rounded"
                      type="text"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="uk-width-1-1 uk-width-1-4@m">
                    <input
                      className="uk-input uk-border-rounded"
                      type="text"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="uk-width-1-1 uk-width-1-4@m">
                    <button className="uk-button uk-button-primary uk-border-rounded uk-width-expand">
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
    </main>
  );
};
export default Homepage4;
