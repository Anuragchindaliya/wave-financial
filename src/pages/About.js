import aboutDesc from "database/about/aboutDesc.json";
import ourProfessionals from "database/about/ourProfessionals.json";
const About = () => {
  return (
    <main>
      {/* <!-- section content begin --> */}
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid">
            <div className="uk-width-1-1">
              <div className="uk-width-3-5@m">
                <h1 className="uk-margin-small-bottom">
                  Putting our clients first{" "}
                  <span className="in-highlight">since 1986</span>
                </h1>
                <p className="uk-text-lead uk-text-muted uk-margin-remove-top">
                  For more than 30 years, we’ve been empowering clients by
                  helping them take control of their financial lives.
                </p>
              </div>
            </div>
            <div
              className="uk-grid uk-grid-large uk-child-width-1-3@m uk-margin-medium-top"
              data-uk-grid
            >
              {aboutDesc.map((card, index) => {
                return (
                  <div key={index} className="uk-flex uk-flex-left">
                    <div className="uk-margin-right">
                      <i
                        className={`${card.icon} fa-lg in-icon-wrap primary-color`}
                      ></i>
                    </div>
                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- section content end -->
        <!-- section content begin --> */}
      <div className="uk-section in-offset-top-40 in-offset-bottom-20">
        <div className="uk-container">
          <div className="uk-grid">
            <div className="uk-width-1-1">
              <div
                className="uk-card uk-card-default uk-border-rounded uk-background-center uk-background-contain uk-background-image@m"
                style={{
                  backgroundImage:
                    ' url("assets/img/in-team-background-1.png")',
                }}
                data-uk-parallax="bgy: -100"
              >
                <div className="uk-card-body">
                  <div className="uk-grid uk-flex uk-flex-center">
                    <div className="uk-width-3-4@m uk-text-center">
                      <h2>Trust the Professionals</h2>
                      <p>
                        We are a group of passionate, independent thinkers who
                        never stop exploring new ways to improve trading for the
                        self-directed investor.
                      </p>
                    </div>
                  </div>
                  <div
                    className="uk-grid uk-child-width-1-2@m uk-margin-medium-top"
                    data-uk-grid
                  >
                    {ourProfessionals.map((pros, index) => {
                      return (
                        <div key={index} className="uk-flex uk-flex-left">
                          <div className="uk-margin-right">
                            <img
                              className="uk-align-center "
                              src={pros.profileImg}
                              alt="team"
                              width="300"
                            />
                          </div>
                          <div>
                            <p className="uk-text-small uk-text-muted uk-text-uppercase uk-margin-remove-bottom">
                              {pros.designation}
                            </p>
                            <h4 className="uk-margin-small-top">{pros.name}</h4>
                            <p>{pros.desc}</p>
                            <div>
                              {pros.social.map((link, index, arr) => {
                                const rightMargin =
                                  index === arr.length - 1
                                    ? ""
                                    : "uk-margin-small-right";
                                return (
                                  <a
                                    key={index}
                                    className="uk-link-muted"
                                    href={link.url}
                                  >
                                    <i
                                      className={`${link.icon} ${rightMargin}`}
                                    ></i>
                                  </a>
                                );
                              })}
                            </div>
                          </div>
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
      {/* <!-- section content end -->
        <!-- section content begin --> */}
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid uk-flex uk-flex-center">
            <div className="uk-width-3-4@m">
              <div className="uk-grid uk-flex uk-flex-middle" data-uk-grid>
                <div className="uk-width-1-2@m">
                  <h4 className="uk-text-muted">Number speaks</h4>
                  <h1 className="uk-margin-medium-bottom">
                    We always ready
                    <br />
                    for a <span className="in-highlight">challenge.</span>
                  </h1>
                  <a
                    href="/#"
                    className="uk-button uk-button-primary uk-border-rounded"
                  >
                    Learn more
                    <i className="fas fa-chevron-circle-right fa-xs uk-margin-small-left"></i>
                  </a>
                </div>
                <div className="uk-width-1-2@m">
                  <div className="uk-margin-large" data-uk-grid>
                    <div className="uk-width-1-3@m">
                      <h1 className="uk-text-primary uk-text-right@m">
                        <span className="count" data-counter-end="213">
                          0
                        </span>
                      </h1>
                      <hr className="uk-divider-small uk-text-right@m" />
                    </div>
                    <div className="uk-width-expand@m">
                      <h4>Trading instruments</h4>
                      <p>
                        Reprehenderit qui in svoluptate velit esse quam
                        molestiae vel illum qui dolorem eum fugiat quo.
                      </p>
                    </div>
                  </div>
                  <div className="uk-margin-large" data-uk-grid>
                    <div className="uk-width-1-3@m">
                      <h1 className="uk-text-primary uk-text-right@m">
                        <span className="count" data-counter-end="27">
                          0
                        </span>
                      </h1>
                      <hr className="uk-divider-small uk-text-right@m" />
                    </div>
                    <div className="uk-width-expand@m">
                      <h4>Countries covered</h4>
                      <p>
                        At vero eos et accusamus iusto dignissimos ducimus qui
                        blanditiis praesentium voluta deleniti.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- section content end --> */}
    </main>
  );
};

export default About;
