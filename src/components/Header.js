import { Link } from "react-router-dom";
import logo1 from "../assets/img/in-logo-1.svg";
import menus from "database/menus.json";

function Header() {
  
  // console.log(menus);

  return (
    <div>
      {/* <!-- preloader begin --> */}
      <div className="in-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* <!-- preloader end --> */}
      <header>
        {/* <!-- header content begin --> */}
        <div className="uk-section uk-padding-remove-vertical in-header-home ">
          {/* <!-- module navigation begin --> */}
          <nav
            className="uk-navbar-container uk-navbar-transparent"
            data-uk-sticky="show-on-up: true; top: 80; animation: uk-animation-fade;"
          >
            <div className="uk-container" data-uk-navbar>
              <div className="uk-navbar-left uk-width-auto">
                <div className="uk-navbar-item">
                  {/* <!-- module logo begin --> */}
                  <Link className="uk-logo" to="/">
                    <img
                      className="uk-margin-small-right in-offset-top-10"
                      src={logo1}
                      alt="wave"
                      width="134"
                      height="23"
                    />
                  </Link>
                  {/* <!-- module logo begin --> */}
                </div>
              </div>
              <div className="uk-navbar-right uk-width-expand uk-flex uk-flex-right">
                <ul className="uk-navbar-nav uk-visible@m">
                  {menus.map((menu) => {
                    return (
                      <li key={menu.id}>
                        <Link to={menu.url}>
                          {menu.title}
                          {menu.children ? (
                            <i className="fas fa-chevron-down"></i>
                          ) : null}
                        </Link>

                        {menu.children && (
                          <div className="uk-navbar-dropdown">
                            <ul className="uk-nav uk-navbar-dropdown-nav">
                              {menu.children.map((children) => {
                                return (
                                  <li key={children.id}>
                                    <Link to={children.url}>{children.title}</Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                  })}
                  <li>
                    <a href="/#">
                      Resources<i className="fas fa-chevron-down"></i>
                    </a>
                    <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                      <div
                        className="uk-navbar-dropdown-grid uk-child-width-1-2"
                        data-uk-grid
                      >
                        <div>
                          <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li>
                              <a href="https://getuikit.com/docs/">
                                Documentation
                                <i className="fas fa-external-link-square-alt fa-sm"></i>
                              </a>
                            </li>
                            <li>
                              <Link to="help-center">Help Center</Link>
                            </li>
                            <li>
                              <Link to="customers">Customers</Link>
                            </li>
                            <li>
                              <Link to="roadmap">Roadmap</Link>
                            </li>
                            <li>
                              <Link to="legal-docs">
                                Legal Docs<i className="fas fa-gavel fa-sm"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li>
                              <a className="uk-disabled" href="/#">
                                Adipiscing elit sed do eiusmod incididunt ut
                                labore dolore magna lorem ipsum sit dolor amet
                                consectetur
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="uk-navbar-item uk-visible@m in-optional-nav">
                  <a href="signin.html" className="uk-button uk-button-text">
                    <i className="fas fa-user-circle uk-margin-small-right"></i>
                    Log in
                  </a>
                  <a
                    href="/#"
                    className="uk-button uk-button-primary uk-button-small uk-border-pill"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </nav>
          {/* <!-- module navigation end --> */}
          <div className="uk-container">
            <div className="uk-grid">
              <div className="uk-width-1-1">
                <div className="uk-card uk-card-secondary uk-card-small uk-card-body uk-border-rounded">
                  <div className="uk-grid uk-text-small" data-uk-grid>
                    <div className="uk-width-3-4@m uk-visible@m">
                      <p>
                        Trading involves substantial risk and may result in the
                        loss of your invested/greater that your invested
                        capital, respectively.
                      </p>
                    </div>
                    <div className="uk-width-expand@m uk-text-center uk-text-right@m">
                      <a className="uk-margin-right" href="/#">
                        <i className="fas fa-comment-alt uk-margin-small-right"></i>
                        Live Chat
                      </a>
                      <a href="/#">
                        <i className="fas fa-phone-alt uk-margin-small-right uk-margin-small-left"></i>
                        1-800-123-4567
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header content end --> */}
      </header>
    </div>
  );
}
export default Header;
