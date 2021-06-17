import legalCards from "database/legalDocs/legalCards.json";
const Legaldocs = () => {
  return (
    <main>
      {/* <!-- section content begin --> */}
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid">
            <div className="uk-width-1-1 uk-text-center uk-margin-medium-bottom">
              <h1>Wave Legal Docs</h1>
            </div>
            <div
              className="uk-grid-divider uk-child-width-1-3@m uk-child-width-1-2@s"
              data-uk-grid
            >
              {legalCards.map((card, index) => {
                return (
                  <div key={index}>
                    <i
                      className={`${card.icon} fa-lg in-icon-wrap primary-color`}
                    ></i>
                    <h3 className="uk-margin-top">{card.title}</h3>
                    <p>{card.desc}</p>
                    <ul className="uk-list uk-margin-top">
                      {card.links.map((link, index) => {
                        return (
                          <li key={index}>
                            <a
                              className="uk-flex uk-flex-middle"
                              href={link.url}
                            >
                              <i className="fas fa-file-pdf fa-sm uk-margin-small-right"></i>
                              {link.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}

              {/* <div>
                <i className="fas fa-file fa-lg in-icon-wrap primary-color"></i>
                <h3 className="uk-margin-top">Terms of Service</h3>
                <p>
                  Read the Terms of Service and License Agreement for Blockit as
                  well as our BlockitApp &amp; Developer Agreements.
                </p>
                <ul className="uk-list uk-margin-top">
                  <li>
                    <a className="uk-flex uk-flex-middle" href="/#">
                      <i className="fas fa-file-pdf fa-sm uk-margin-small-right"></i>
                      License Agreement
                    </a>
                  </li>
                  <li>
                    <a className="uk-flex uk-flex-middle" href="/#">
                      <i className="fas fa-file-pdf fa-sm uk-margin-small-right"></i>
                      Term of Services for Blockit Trade
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <i className="fas fa-globe fa-lg in-icon-wrap primary-color"></i>
                <h3 className="uk-margin-top">Policies</h3>
                <p>
                  Find out more about what information we collect at Blockit,
                  how we use it, and what control you have over your data.
                </p>
                <ul className="uk-list uk-margin-top">
                  <li>
                    <a className="uk-flex uk-flex-middle" href="/#">
                      <i className="fas fa-file-pdf fa-sm uk-margin-small-right"></i>
                      Privacy Statement
                    </a>
                  </li>
                </ul>
              </div>

              <div className="uk-visible@m">
                <i className="fas fa-shield-alt fa-lg in-icon-wrap primary-color"></i>
                <h3 className="uk-margin-top">Security</h3>
                <p>
                  Learn more about how we keep your work and personal data safe
                  when you’re using our services.
                </p>
                <ul className="uk-list uk-margin-top">
                  <li>
                    <a className="uk-flex uk-flex-middle" href="/#">
                      <i className="fas fa-file-pdf fa-sm uk-margin-small-right"></i>
                      Blockit Trade Security
                    </a>
                  </li>
                  <li>
                    <a className="uk-flex uk-flex-middle" href="/#">
                      <i className="fas fa-file-pdf fa-sm uk-margin-small-right"></i>
                      Responsible Disclosure Policy
                    </a>
                  </li>
                </ul>
              </div> */}


            </div>
          </div>
        </div>
      </div>
      {/* <!-- section content end -->
        <!-- section content begin --> */}
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid uk-flex uk-flex-center">
            <div className="uk-width-3-5@m">
              <div className="uk-card uk-card-large uk-card-default in-card-paper">
                <div className="uk-card-body">
                  <h2>Company Faq</h2>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatur consectetur
                    adipiscing elit labore et dolore magna veritatis et quasi
                    architecto beatae vitae.
                  </p>
                  <p>
                    Aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit
                    laborum.
                  </p>
                  <hr className="uk-margin-medium-top uk-margin-small-bottom" />
                  <ul
                    className="in-faq-5"
                    data-uk-accordion="collapsible: false"
                  >
                    <li className="uk-open">
                      <a className="uk-accordion-title" href="/#">
                        Brand Guidelines
                      </a>
                      <div className="uk-accordion-content">
                        <ul className="uk-list uk-list-bullet">
                          <li>Follow the Company Brand Guides</li>
                          <li>
                            Never use Company in the plural or possessive form
                          </li>
                          <li>
                            Never use Company trademark generically in referring
                            to the product
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a className="uk-accordion-title" href="/#">
                        Specifically restricted uses
                      </a>
                      <div className="uk-accordion-content">
                        <ul className="uk-list uk-list-bullet">
                          <li>
                            Removing, distorting or altering any element of
                            Company trademarks or branding
                          </li>
                          <li>
                            Shortening, abbreviating, or using acronyms out of
                            Company trademarks
                          </li>
                          <li>
                            Combining your trademark or product name, visually
                            or in text, with any Company trademark
                          </li>
                          <li>
                            Indicating Company is endorsing or promoting your
                            trademark or product
                          </li>
                          <li>
                            Registering Company trademarks as or incorporated in
                            social media account names, or aliases
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a className="uk-accordion-title" href="/#">
                        Company Trademarks
                      </a>
                      <div className="uk-accordion-content">
                        <p>
                          Company trademarks include the following list. The
                          absence of any Company trademark, product name,
                          service name, or any other name from this list does
                          not waive Company intellectual property rights.
                        </p>
                        <p>
                          The Company logo and name is ® Registered in the
                          Canada and The United States with registrations
                          pending elsewhere. The ® Registered mark shall only be
                          used in Canada and The United States until
                          registrations are completed elsewhere.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="uk-card uk-card-default uk-card-small uk-card-body uk-border-rounded uk-margin-medium-top">
                    <p className="uk-text-small">
                      For general inquiries please contact{" "}
                      <a className="uk-text-lowercase uk-link" href="mailto:">
                        legal@wave-capital.com
                      </a>
                    </p>
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

export default Legaldocs;
