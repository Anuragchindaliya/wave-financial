import slider from "database/slider.json";
import {Link} from "react-router-dom";

function Home(){
    return (
        <>
      <div>
        <main>
          <div className="uk-section uk-padding-remove-vertical">
            <div className="in-slideshow" data-uk-slideshow>
              <ul className="uk-slideshow-items uk-light">
                {slider.map((slide)=>{
                  return <li key={slide.id}>
                  <div className="uk-position-cover">
                    <img
                      src={slide.background}
                      alt="slideshow1"
                      data-uk-cover
                      width="1920"
                      height="700"
                    />
                  </div>
                  <span></span>
                  <div className="uk-container">
                    <div className="uk-grid" data-uk-grid>
                      <div className="uk-width-3-5@m">
                        <div className="uk-overlay">
                          <h1>
                            {slide.title}
                          </h1>
                          <p className="uk-text-lead uk-visible@m">
                            {slide.desc}
                          </p>
                          <Link
                            to={slide.btn.url}
                            className="uk-button uk-button-primary uk-border-rounded uk-visible@m"
                          >
                            <i className={`${slide.btn.icon} uk-margin-small-right`}></i>
                            {slide.btn.text}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                
                }

                )}
                {/* <li>
                  <div className="uk-position-cover">
                    <img
                      src="assets/img/in-lazy.gif"
                      data-src="assets/img/in-slideshow-image-1.jpg"
                      alt="slideshow1"
                      data-uk-cover
                      width="1920"
                      height="700"
                      data-uk-img
                    />
                  </div>
                  <span></span>
                  <div className="uk-container">
                    <div className="uk-grid" data-uk-grid>
                      <div className="uk-width-3-5@m">
                        <div className="uk-overlay">
                          <h1>
                            Trade Shares and Forex with Financial Thinking
                          </h1>
                          <p className="uk-text-lead uk-visible@m">
                            Access 40,000+ instruments – across asset
                            classNamees – to trade, hedge and invest from a
                            single account.
                          </p>
                          <a
                            href="/#"
                            className="uk-button uk-button-primary uk-border-rounded uk-visible@m"
                          >
                            <i className="fas fa-scroll uk-margin-small-right"></i>
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
                      src="assets/img/in-lazy.gif"
                      data-src="assets/img/in-slideshow-image-2.jpg"
                      alt="slideshow2"
                      data-uk-cover
                      width="1920"
                      height="700"
                      data-uk-img
                    />
                  </div>
                  <span></span>
                  <div className="uk-container">
                    <div className="uk-grid" data-uk-grid>
                      <div className="uk-width-3-5@m">
                        <div className="uk-overlay">
                          <h1>
                            Multi-regulated Global Forex and Shares Broker
                          </h1>
                          <p className="uk-text-lead uk-visible@m">
                            A trusted destination for traders worldwide,
                            Authorised by FCA, ASIC &amp; FSCA with
                            multi-lingual support 24/5.
                          </p>
                          <a
                            href="/#"
                            className="uk-button uk-button-primary uk-border-rounded uk-visible@m"
                          >
                            <i className="fas fa-scroll uk-margin-small-right"></i>
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
                      src="assets/img/in-lazy.gif"
                      data-src="assets/img/in-slideshow-image-3.jpg"
                      alt="slideshow3"
                      data-uk-cover
                      width="1920"
                      height="700"
                      data-uk-img
                    />
                  </div>
                  <span></span>
                  <div className="uk-container">
                    <div className="uk-grid" data-uk-grid>
                      <div className="uk-width-3-5@m">
                        <div className="uk-overlay">
                          <h1>Award-winning Products and Trading platforms</h1>
                          <p className="uk-text-lead uk-visible@m">
                            Tap into the world's markets and explore endless
                            trading opportunities with tight spreads and no
                            commission.
                          </p>
                          <a
                            href="/#"
                            className="uk-button uk-button-primary uk-border-rounded uk-visible@m"
                          >
                            <i className="fas fa-scroll uk-margin-small-right"></i>
                            Discover it now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
               */}
              </ul>
              <div className="uk-container uk-light">
                <ul className="uk-slideshow-nav uk-dotnav uk-position-bottom-center"></ul>
              </div>
            </div>
          </div>
          {/* <!-- section content begin --> */}
          <div className="uk-section uk-section-primary uk-section-xsmall">
            <div className="uk-container in-wave-1">
              <div
                className="uk-grid uk-grid-divider uk-child-width-1-2@s uk-child-width-1-4@m in-margin-top@s in-margin-bottom@s"
                data-uk-grid
              >
                <div>
                  <div className="uk-grid uk-grid-small uk-flex uk-flex-middle">
                    <div className="uk-width-auto">
                      <img
                        src="assets/img/in-wave-icon-1.svg"
                        
                        alt="wave-icon"
                        width="48"
                        height="48"
                        
                      />
                    </div>
                    <div className="uk-width-expand">
                      <p>
                        Free
                        <br />
                        analysis tools
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="uk-grid uk-grid-small uk-flex uk-flex-middle">
                    <div className="uk-width-auto">
                      <img
                        src="assets/img/in-wave-icon-2.svg"
                        
                        alt="wave-icon"
                        width="48"
                        height="48"
                        // data-uk-img
                      />
                    </div>
                    <div className="uk-width-expand">
                      <p>
                        Fast execution
                        <br />0 commision
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="uk-grid uk-grid-small uk-flex uk-flex-middle">
                    <div className="uk-width-auto">
                      <img
                        src="assets/img/in-wave-icon-3.svg"
                        alt="wave-icon"
                        width="48"
                        height="48"
                      />
                    </div>
                    <div className="uk-width-expand">
                      <p>
                        Low minimum
                        <br />
                        deposit of $100
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="uk-grid uk-grid-small uk-flex uk-flex-middle">
                    <div className="uk-width-auto">
                      <img
                        src="assets/img/in-lazy.gif"
                        data-src="assets/img/in-wave-icon-4.svg"
                        alt="wave-icon"
                        width="48"
                        height="48"
                        data-uk-img
                      />
                    </div>
                    <div className="uk-width-expand">
                      <p>
                        Over 2,100
                        <br />
                        assets to trade
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- section content end -->
        <!-- section content begin --> */}
          <div className="uk-section uk-padding-large">
            <div className="uk-container in-wave-2">
              <div className="uk-grid">
                <div className="uk-width-3-4@m">
                  <h1 className="uk-margin-remove-bottom">
                    Industry-<span className="in-highlight">leading</span>{" "}
                    prices
                  </h1>
                  <p className="uk-text-lead uk-text-muted uk-margin-small-top uk-margin-bottom">
                    Get ultra-competitive spreads and commissions across all
                    asset classNamees. Receive even better rates as your volume
                    increases.
                  </p>
                </div>
              </div>
              <div className="uk-grid-medium uk-grid-match" data-uk-grid>
                <div className="uk-width-1-2@s uk-width-1-4@m">
                  <div
                    className="uk-card uk-card-default uk-card-body uk-border-rounded uk-background-contain uk-background-bottom-center"
                    style={{
                      backgroundImage: `url("assets/img/in-wave-card-bg-1.png")`,
                    }}
                  >
                    <h5 className="uk-margin-remove">
                      <a href="/#">
                        FX <i className="fas fa-chevron-right fa-xs"></i>
                      </a>
                    </h5>
                    <p className="uk-margin-remove">Spread as low as</p>
                    <h1 className="uk-margin-top">0.2</h1>
                    <p className="uk-margin-remove-top uk-margin-bottom">pip</p>
                    <p>
                      Trade 182 FX spot pairs and 140 forwards across majors,
                      minors, exotics and metals.
                    </p>
                  </div>
                </div>
                <div className="uk-width-1-2@s uk-width-1-4@m">
                  <div
                    className="uk-card uk-card-default uk-card-body uk-border-rounded uk-background-contain uk-background-bottom-center"
                    style={{
                      backgroundImage: `url("img/in-wave-card-bg-2.png")`,
                    }}
                  >
                    <h5 className="uk-margin-remove">
                      <a href="/#">
                        CFDs <i className="fas fa-chevron-right fa-xs"></i>
                      </a>
                    </h5>
                    <p className="uk-margin-remove">Spread from</p>
                    <h1 className="uk-margin-top">0.4</h1>
                    <p className="uk-margin-remove-top uk-margin-bottom">
                      on US500
                    </p>
                    <p>
                      Go long or short on 9,000+ instruments with tight spreads
                      & low commissions.
                    </p>
                  </div>
                </div>
                <div className="uk-width-1-2@s uk-width-1-4@m">
                  <div
                    className="uk-card uk-card-default uk-card-body uk-border-rounded uk-background-contain uk-background-bottom-center"
                    style={{
                      backgroundImage: `url("assets/img/in-wave-card-bg-1.png")`,
                    }}
                  >
                    <h5 className="uk-margin-remove">
                      <a href="/#">
                        Stocks <i className="fas fa-chevron-right fa-xs"></i>
                      </a>
                    </h5>
                    <p className="uk-margin-remove">Commissions from</p>
                    <h1 className="uk-margin-top">$3</h1>
                    <p className="uk-margin-remove-top uk-margin-bottom">
                      on US stocks
                    </p>
                    <p>
                      Access 19,000+ stocks across core and emerging markets on
                      36 exchanges worldwide.
                    </p>
                  </div>
                </div>
                <div className="uk-width-1-2@s uk-width-1-4@m">
                  <div
                    className="uk-card uk-card-default uk-card-body uk-border-rounded uk-background-contain uk-background-bottom-center"
                    style={{
                      backgroundImage: `url("assets/img/in-wave-card-bg-1.png")`,
                    }}
                  >
                    <h5 className="uk-margin-remove">
                      <a href="/#">
                        Commodities{" "}
                        <i className="fas fa-chevron-right fa-xs"></i>
                      </a>
                    </h5>
                    <p className="uk-margin-remove">Commission as low as</p>
                    <h1 className="uk-margin-top">$1.25</h1>
                    <p className="uk-margin-remove-top uk-margin-bottom">
                      per lot
                    </p>
                    <p>
                      Trade a wide range of commodities as CFDs, futures,
                      options, spot pairs, & more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="uk-grid uk-flex uk-flex-center">
                <div className="uk-width-3-5@m">
                  <div className="uk-card uk-card-default uk-card-body uk-text-center uk-border-rounded uk-box-shadow-small in-wave-2-card">
                    <span className="uk-label uk-text-small uk-text-uppercase uk-border-pill uk-margin-small-right">
                      Start trade
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing reprehen
                    elit. <a href="/#">Join now!</a>
                  </div>
                  <div
                    className="uk-grid-collapse uk-grid-divider uk-child-width-1-3@s uk-child-width-1-3@m uk-text-center uk-margin-top uk-margin-small-bottom"
                    data-uk-grid
                  >
                    <div>
                      <i className="fas fa-headset fa-lg uk-margin-small-right uk-text-primary"></i>
                      <p className="uk-margin-remove uk-text-small uk-text-uppercase">
                        Award-winning support
                      </p>
                    </div>
                    <div>
                      <i className="fas fa-university fa-lg uk-margin-small-right uk-text-primary"></i>
                      <p className="uk-margin-remove uk-text-small uk-text-uppercase">
                        Regulated by the FCA,UK
                      </p>
                    </div>
                    <div>
                      <i className="fas fa-history fa-lg uk-margin-small-right uk-text-primary"></i>
                      <p className="uk-margin-remove uk-text-small uk-text-uppercase">
                        30 years experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- section content end -->
        <!-- section content begin --> */}
          <div
            className="uk-section uk-section-muted uk-padding-large in-wave-3 uk-background-contain uk-background-center"
            style={{
              backgroundImage: `url("assets/img/in-wave-card-bg-1.png")`,
            }}
            data-uk-parallax="bgy: -200"
          >
            <div className="uk-container">
              <div
                className="uk-grid-large uk-flex uk-flex-middle"
                data-uk-grid
              >
                <div className="uk-width-1-2@m">
                  <img
                    className="uk-margin-bottom"
                    src="assets/img/in-lazy.gif"
                    data-src="assets/img/in-wave-icon-5.svg"
                    alt="wave-icon"
                    width="64"
                    height="64"
                    data-uk-img
                  />
                  <h1 className="uk-margin-remove">
                    Market <span className="in-highlight">analysis</span> and
                    <br />
                    trade inspiration
                  </h1>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur excepteur sint
                    occaecat cupidatat non proident dolorem eum fugiat voluptas
                    nulla pariatur.
                  </p>
                  <div
                    className="uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center uk-margin-medium-top"
                    data-uk-grid
                  >
                    <div>
                      <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
                        <img
                          className="uk-margin-remove-bottom"
                          src="assets/img/in-lazy.gif"
                          data-src="assets/img/in-wave-icon-6.svg"
                          alt="wave-icon"
                          width="52"
                          height="52"
                          data-uk-img
                        />
                        <h5 className="uk-margin-small-top">
                          Strategies &amp; Discussions
                        </h5>
                      </div>
                    </div>
                    <div>
                      <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
                        <img
                          className="uk-margin-remove-bottom"
                          src="assets/img/in-lazy.gif"
                          data-src="assets/img/in-wave-icon-7.svg"
                          alt="wave-icon"
                          width="52"
                          height="52"
                          data-uk-img
                        />
                        <h5 className="uk-margin-small-top">
                          Forecasts &amp; Educations
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uk-width-1-2@m">
                  <div className="uk-inline uk-dark in-wave-video uk-margin-small-bottom">
                    <img
                      className="uk-border-rounded uk-width-1-1"
                      src="assets/img/in-lazy.gif"
                      data-src="assets/img/in-wave-image-1.jpg"
                      alt="wave-video"
                      width="533"
                      height="355"
                      data-uk-img
                    />
                    <div className="uk-position-center">
                      <a href="#modal-media-youtube" data-uk-toggle>
                        <div className="in-play-button"></div>
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                    <div
                      id="modal-media-youtube"
                      className="uk-flex-top"
                      data-uk-modal
                    >
                      <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical in-iframe">
                        <button
                          className="uk-modal-close-outside"
                          type="button"
                          data-uk-close
                        ></button>
                      </div>
                    </div>
                  </div>
                  <p className="uk-text-small uk-text-muted">
                    Explore the markets at your own pace with short online
                    courses.{" "}
                    <span className="uk-label uk-text-small uk-border-pill">
                      Sign up
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- section content end -->
        <!-- section content begin --> */}
          <div className="uk-section uk-padding-large">
            <div className="uk-container in-wave-4">
              <div className="uk-grid uk-flex uk-flex-center">
                <div className="uk-width-1-1 uk-text-center">
                  <h1 className="uk-margin-medium-bottom">
                    <span className="in-highlight">Complete</span> package for
                    every traders
                  </h1>
                </div>
                <div className="uk-width-3-4@m">
                  <div
                    className="uk-grid-collapse  uk-child-width-1-2@m in-wave-pricing"
                    data-uk-grid
                  >
                    <div>
                      <div className="uk-card uk-card-default uk-card-body uk-box-shadow-medium">
                        <p className="uk-text-small uk-text-uppercase">
                          Minimum funding
                          <span className="uk-label uk-border-pill uk-text-small uk-margin-small-left">
                            USD 200
                          </span>
                        </p>
                        <h2 className="uk-margin-top uk-margin-remove-bottom">
                          classNameic account
                        </h2>
                        <p className="uk-text-lead uk-text-muted uk-margin-remove-top">
                          Benefit from industry-leading entry prices
                        </p>
                        <hr />
                        <ul className="uk-list uk-list-bullet">
                          <li>One of the established industry leaders</li>
                          <li>Three decades of trading know-how</li>
                          <li>Award-winning customer service*</li>
                          <li>Highly-regarded trader education*</li>
                          <li>Advanced risk management</li>
                          <li>Tax-free spread betting profits</li>
                          <li>Low minimum deposit</li>
                        </ul>
                        <a
                          href="/#"
                          className="uk-button uk-button-default uk-border-rounded uk-align-center"
                        >
                          Open an account
                          <i className="fas fa-chevron-circle-right fa-xs uk-margin-small-left"></i>
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="uk-card uk-card-default uk-card-body uk-box-shadow-large">
                        <p className="uk-text-small uk-text-uppercase">
                          Minimum funding
                          <span className="uk-label uk-border-pill uk-text-small uk-margin-small-left">
                            USD 500
                          </span>
                        </p>
                        <h2 className="uk-margin-top uk-margin-remove-bottom">
                          Platinum account
                        </h2>
                        <p className="uk-text-lead uk-text-muted uk-margin-remove-top">
                          Receive even tighter spreads and commissions
                        </p>
                        <hr />
                        <ul className="uk-list uk-list-bullet">
                          <li>Award-winning trading platform*</li>
                          <li>Wide range of charting tools</li>
                          <li>Fast, automated excecution</li>
                          <li>Expert news & analysis</li>
                          <li>Competitive spreads</li>
                          <li>Advanced trading tools</li>
                          <li>Tax-free spread betting profits</li>
                        </ul>
                        <a
                          href="/#"
                          className="uk-button uk-button-primary uk-border-rounded uk-align-center"
                        >
                          Open an account
                          <i className="fas fa-chevron-circle-right fa-xs uk-margin-small-left"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uk-width-1-1">
                  <div
                    className="uk-grid-medium uk-child-width-1-2@s uk-child-width-1-5@m uk-text-center uk-margin-large-top"
                    data-uk-grid
                  >
                    <div>
                      <img
                        src="assets/img/in-lazy.gif"
                        data-src="assets/img/in-wave-award.svg"
                        alt="wave-award"
                        width="71"
                        height="58"
                        data-uk-img
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
                        src="assets/img/in-lazy.gif"
                        data-src="assets/img/in-wave-award.svg"
                        alt="wave-award"
                        width="71"
                        height="58"
                        data-uk-img
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
                        src="assets/img/in-lazy.gif"
                        data-src="assets/img/in-wave-award.svg"
                        alt="wave-award"
                        width="71"
                        height="58"
                        data-uk-img
                      />
                      <h6 className="uk-margin-small-top uk-margin-remove-bottom">
                        Best Execution Broker
                      </h6>
                      <p className="uk-text-small uk-margin-remove-top">
                        Forex EXPO Dubai 2020
                      </p>
                    </div>
                    <div>
                      <img
                        src="assets/img/in-lazy.gif"
                        data-src="assets/img/in-wave-award.svg"
                        alt="wave-award"
                        width="71"
                        height="58"
                        data-uk-img
                      />
                      <h6 className="uk-margin-small-top uk-margin-remove-bottom">
                        Best Trading Platform
                      </h6>
                      <p className="uk-text-small uk-margin-remove-top">
                        London Summit 2020
                      </p>
                    </div>
                    <div className="uk-visible@m">
                      <img
                        src="assets/img/in-lazy.gif"
                        data-src="assets/img/in-wave-award.svg"
                        alt="wave-award"
                        width="71"
                        height="58"
                        data-uk-img
                      />
                      <h6 className="uk-margin-small-top uk-margin-remove-bottom">
                        Best Broker Asia
                      </h6>
                      <p className="uk-text-small uk-margin-remove-top">
                        iFX EXPO 2020
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- section content end -->
        <!-- section content begin --> */}
          <div className="uk-section uk-section-default uk-padding-remove-vertical in-wave-5 in-offset-bottom-40">
            <div className="uk-container">
              <div className="uk-grid">
                <div
                  className="uk-width-1-1 uk-background-contain uk-background-center-right uk-background-image@m"
                  style={{
                    backgroundImage: `url("assets/img/in-wave-card-bg-1.png")`,
                  }}
                >
                  <h1 className="uk-margin-remove-bottom">
                    Start <span className="uk-text-primary">trading</span>
                  </h1>
                  <p className="uk-text-lead">
                    on <span className="uk-text-primary">wave</span> mobile app.
                  </p>
                  <p className="uk-margin-small-bottom">
                    Available on multiple platform
                  </p>
                  <a
                    href="/#"
                    className="uk-button uk-button-secondary uk-border-rounded in-button-app"
                  >
                    <i className="fab fa-google-play fa-2x"></i>
                    <span className="wrapper">
                      Download from<span>Play Store</span>
                    </span>
                  </a>

                  <a
                    href="/#"
                    className="uk-button uk-button-secondary uk-border-rounded in-button-app uk-margin-small-left in-margin-remove-left@s"
                  >
                    <i className="fab fa-apple fa-2x"></i>
                    <span className="wrapper">
                      Download from<span>App Store</span>
                    </span>
                  </a>
                  
                  <a
                    href="/#"
                    className="uk-button uk-button-secondary uk-border-rounded uk-visible@m in-button-app uk-margin-small-left"
                  >
                    <i className="fab fa-windows fa-2x"></i>
                    <span className="wrapper">
                      Download from<span>Microsoft Store</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="in-price-list">
              <div className="uk-container">
                <div className="uk-grid">
                  <div className="uk-width-1-1">
                    <div data-uk-slider="autoplay: true; autoplay-interval: 5000">
                      <ul
                        className="uk-slider-items uk-child-width-1-3@s uk-child-width-1-5@m uk-text-small uk-text-center"
                        data-uk-grid
                      >
                        <li>
                          XAUUSD{" "}
                          <span className="uk-label uk-label-success uk-border-pill uk-margin-small-left">
                            <i className="fas fa-caret-up"></i> 1478.81
                            &nbsp;(+0.28%)
                          </span>
                        </li>
                        <li>
                          GBPUSD{" "}
                          <span className="uk-label uk-label-danger uk-border-pill uk-margin-small-left">
                            <i className="fas fa-caret-down"></i> 1.3191
                            &nbsp;(-1.07%)
                          </span>
                        </li>
                        <li>
                          EURUSD{" "}
                          <span className="uk-label uk-label-danger uk-border-pill uk-margin-small-left">
                            <i className="fas fa-caret-down"></i> 1.1159
                            &nbsp;(-0.11%)
                          </span>
                        </li>
                        <li>
                          USDJPY{" "}
                          <span className="uk-label uk-label-success uk-border-pill uk-margin-small-left">
                            <i className="fas fa-caret-up"></i> 109.59
                            &nbsp;(+0.05%)
                          </span>
                        </li>
                        <li>
                          USDCAD{" "}
                          <span className="uk-label uk-label-success uk-border-pill uk-margin-small-left">
                            <i className="fas fa-caret-up"></i> 1.3172
                            &nbsp;(+0.18%)
                          </span>
                        </li>
                        <li>
                          USDCHF{" "}
                          <span className="uk-label uk-label-success uk-border-pill uk-margin-small-left">
                            <i className="fas fa-caret-up"></i> 0.9776
                            &nbsp;(+0.06%)
                          </span>
                        </li>
                        <li>
                          AUDUSD{" "}
                          <span className="uk-label uk-label-danger uk-border-pill uk-margin-small-left">
                            <i className="fas fa-caret-down"></i> 0.67064
                            &nbsp;(-0.08%)
                          </span>
                        </li>
                        <li>
                          GBPJPY{" "}
                          <span className="uk-label uk-label-success uk-border-pill uk-margin-small-left">
                            <i className="fas fa-caret-up"></i> 141.91
                            &nbsp;(+0.12%)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- section content end --> */}
        </main>
      </div>
    </>
    );
  
}
export default Home;
