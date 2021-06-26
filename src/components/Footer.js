import footerData from "database/footer.json";
import parser from "html-react-parser";
function Footer() {
  const { footer1, footer2, footer3, brand, sociallink, footerlink } =
    footerData;
  return (
    <footer>
      {/* <!-- footer content begin --> */}
      <div className="uk-section uk-section-muted uk-padding-large uk-padding-remove-horizontal uk-margin-medium-top">
        <div className="uk-container">
          <div className="uk-grid-medium" data-uk-grid>
            <div className="uk-width-expand@m">
              <img
                className="uk-margin-small-right in-margin-top-30@s"
                src={footer1.logo}
                alt="wave"
                width="134"
                height="23"
              />
              <p className="uk-text-large uk-margin-small-top">
                {footer1.subtitle}
              </p>
              <p className="uk-visible@m">{parser(footer1.desc)}</p>
            </div>
            <div className="uk-width-3-5@m">
              <div
                className="uk-child-width-1-3@s uk-child-width-1-3@m"
                data-uk-grid
              >
                {footer2.map((data) => {
                  return (
                    <div key={data.id}>
                      <h4>
                        <span>{data.title}</span>
                      </h4>
                      <ul className="uk-list uk-link-text">
                        {data.links.map((data) => {
                          return (
                            <li key={data.id}>
                              <a
                                href={data.url}
                                aria-label={data.name}
                                title={data.name}
                              >
                                {data.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="uk-width-1-1 uk-margin-large-top in-offset-bottom-20">
              <h6>
                <i className="fas fa-exclamation-triangle fa-sm uk-text-danger uk-margin-small-right"></i>
                {footer3.title}
              </h6>
              <p className="uk-text-small">
                {footer3.desc}
                <a href={footer3.url}>{footer3.linktext}</a>
              </p>
              <hr />
              <div className="uk-grid uk-flex uk-flex-middle" data-uk-grid>
                <div className="uk-width-1-2@m">
                  <div
                    className="uk-grid-small uk-flex uk-child-width-1-4@s uk-flex uk-child-width-1-5@m in-payment-method uk-text-center"
                    data-uk-grid
                  >
                    {brand.map((icon, index, arr) => {
                      // const visible = (icon=='assets/img/in-wave-neteller.svg')?'uk-visible@m':'';
                      const visible =
                        index === arr.length - 1 ? "uk-visible@m" : "";
                      return (
                        <div key={index}>
                          <div
                            className={`uk-card uk-card-default uk-card-small uk-card-body ${visible}`}
                          >
                            <img
                              src={icon}
                              alt="wave-payment"
                              width="59"
                              height="22"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="uk-width-1-2@m uk-text-right@m">
                  <div className="in-footer-socials in-margin-bottom-40@s">
                    {sociallink.map((link) => {
                      return (
                        <a key={link.id} href={link.url}>
                          <i className={`fab fa-${link.icon}`}></i>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section uk-section-secondary uk-padding-remove-vertical">
        <div className="uk-container">
          <div className="uk-grid">
            <div className="uk-width-3-4@m uk-visible@m">
              <ul className="uk-subnav uk-subnav-divider">
                {footerlink.map((link) => {
                  return (
                    <li key={link.url}>
                      <a href={link.url}>{link.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="uk-width-expand@m uk-text-right@m">
              <p>© 2020 Wave Capital Inc.</p>
            </div>
          </div>
        </div>
      </div>
      {/*  <!-- footer content end -->
        <!-- module totop begin --> */}
      <div className="uk-visible@m">
        <a href="#top" className="in-totop" title="Go to top" data-uk-scroll>
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
      {/* <!-- module totop begin --> */}
    </footer>
  );
}
export default Footer;
