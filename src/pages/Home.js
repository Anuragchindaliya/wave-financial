import sliderData from "database/slider.json";
import featureData from "database/features.json";

import price from "database/price.json";
import { Link } from "react-router-dom";
import parser from "html-react-parser";

function Home() {

  const { slider, sliderFeature } = sliderData;
  const { feature, awards, download,sharePrices } = featureData;
  return (
    <>
      <div>
        <main>
          <div className="uk-section uk-padding-remove-vertical">
            <div className="in-slideshow" data-uk-slideshow>
              <ul className="uk-slideshow-items uk-light">
                {slider.map((slide) => {
                  return (
                    <li key={slide.id}>
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
                              <h1>{slide.title}</h1>
                              <p className="uk-text-lead uk-visible@m">
                                {slide.desc}
                              </p>
                              <Link
                                to={slide.btn.url}
                                className="uk-button uk-button-primary uk-border-rounded uk-visible@m"
                              >
                                <i
                                  className={`${slide.btn.icon} uk-margin-small-right`}
                                ></i>
                                {slide.btn.text}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
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
                {sliderFeature.map((feature) => {
                  return (
                    <div key={feature.id}>
                      <div className="uk-grid uk-grid-small uk-flex uk-flex-middle">
                        <div className="uk-width-auto">
                          <img
                            src={feature.icon}
                            alt="wave-icon"
                            width="48"
                            height="48"
                          />
                        </div>
                        <div className="uk-width-expand">
                          <p>
                            {parser(feature.title)}
                            
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
                    {parser(price.title)}
                  </h1>
                  <p className="uk-text-lead uk-text-muted uk-margin-small-top uk-margin-bottom">
                    {price.desc}
                  </p>
                </div>
              </div>
              <div className="uk-grid-medium uk-grid-match" data-uk-grid>
                {/*################### 
                  card is start from how to pass backround image in card from json to jsx
                ######################*/}
                {price.pricedesc.map((card) => {
                  return (
                    <div
                      key={card.id}
                      className="uk-width-1-2@s uk-width-1-4@m"
                    >
                      <div
                        className="uk-card uk-card-default uk-card-body uk-border-rounded uk-background-contain uk-background-bottom-center"
                        style={{
                          backgroundImage: `url("assets/img/in-wave-card-bg-1.png")`,
                        }}
                      >
                        <h5 className="uk-margin-remove">
                          <a href="/#">
                            {card.title}
                            <i className="fas fa-chevron-right fa-xs"></i>
                          </a>
                        </h5>
                        <p className="uk-margin-remove">{card.subtitle}</p>
                        <h1 className="uk-margin-top">{card.num}</h1>
                        <p className="uk-margin-remove-top uk-margin-bottom">
                          {card.small}
                        </p>
                        <p>{card.desc}</p>
                      </div>
                    </div>
                  );
                })}
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
                    src="assets/img/in-wave-icon-5.svg"
                    alt="wave-icon"
                    width="64"
                    height="64"
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
                          src="assets/img/in-wave-icon-6.svg"
                          alt="wave-icon"
                          width="52"
                          height="52"
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
                          src="assets/img/in-wave-icon-7.svg"
                          alt="wave-icon"
                          width="52"
                          height="52"
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
                      src="assets/img/in-wave-image-1.jpg"
                      alt="wave-video"
                      width="533"
                      height="355"
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
                    {parser(feature.title)}
                  </h1>
                </div>
                <div className="uk-width-3-4@m">
                  <div
                    className="uk-grid-collapse  uk-child-width-1-2@m in-wave-pricing"
                    data-uk-grid
                  >
                    {feature.cards.map((card) => {
                      return (
                        <div key={card.id}>
                          <div
                            className={`uk-card uk-card-default uk-card-body uk-box-shadow-${card.size}`}
                          >
                            <p className="uk-text-small uk-text-uppercase">
                              {/* Minimum funding */}
                              {card.smallTxt}
                              <span className="uk-label uk-border-pill uk-text-small uk-margin-small-left">
                                {card.price}
                              </span>
                            </p>
                            <h2 className="uk-margin-top uk-margin-remove-bottom">
                              {card.title}
                            </h2>
                            <p className="uk-text-lead uk-text-muted uk-margin-remove-top">
                              {card.subtitle}
                            </p>
                            <hr />
                            <ul className="uk-list uk-list-bullet">
                              {card.lists.map((list, index) => {
                                return <li key={index}>{list}</li>;
                              })}
                            </ul>
                            <a
                              href="/#"
                              className={`uk-button ${card.btnColor} uk-border-rounded uk-align-center`}
                            >
                              {card.btnTxt}
                              <i className="fas fa-chevron-circle-right fa-xs uk-margin-small-left"></i>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="uk-width-1-1">
                  <div
                    className="uk-grid-medium uk-child-width-1-2@s uk-child-width-1-5@m uk-text-center uk-margin-large-top"
                    data-uk-grid
                  >
                    {awards.map((award, index, arr) => {
                      const visible =
                        index === arr.length - 1 ? "uk-visible@m" : "";
                      return (
                        <div key={index} className={visible}>
                          <img
                            src="assets/img/in-wave-award.svg"
                            alt="wave-award"
                            width="71"
                            height="58"
                          />
                          <h6 className="uk-margin-small-top uk-margin-remove-bottom">
                            {award.title}
                          </h6>
                          <p className="uk-text-small uk-margin-remove-top">
                            {award.desc}
                          </p>
                        </div>
                      );
                    })}
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
                    {parser(download.title)}
                  </h1>
                  <p className="uk-text-lead">
                    {parser(download.subtitle)}
                  </p>
                  <p className="uk-margin-small-bottom">
                    {download.smallTxt}
                  </p>
                  {download.buttons.map((btn,index,arr) => {
                    const margin = (index===0)?"":"uk-margin-small-left in-margin-remove-left@s";
                    const visible = index===arr.length-1?"uk-visible@m":"";
                    return (
                      
                      <a key={index}
                        href="/#"
                        className={`uk-button uk-button-secondary uk-border-rounded in-button-app ${margin} ${visible}`}
                      >
                        <i className="fab fa-google-play fa-2x"></i>
                        <span className="wrapper">
                          
                          {parser(btn.title)}
                        </span>
                      </a>
                    );
                  })}
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
                      {sharePrices.map((price,index)=>{
                        const status = (price.status==='up')?"uk-label-success":"uk-label-danger";
                        return (
                          <li key={index}>
                            {price.title}
                          <span className={`uk-label ${status} uk-border-pill uk-margin-small-left`}>
                            <i className="fas fa-caret-up"></i> {parser(price.value)}
                          </span>
                        </li>
                        )
                      })}
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
