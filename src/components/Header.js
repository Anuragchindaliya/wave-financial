import { Link, useLocation } from "react-router-dom";
import menuOption from "database/menus.json";
import AuthBtns from "components/AuthBtns";
import MobileNav from "components/MobileNav";
import { useState, useEffect,useRef } from "react";
const Header = () => {
  const { menus, authOption } = menuOption;

  const { pathname } = useLocation();
  var whiteBgClass = `uk-section uk-padding-remove-vertical in-header-home`;

  var bgImg = ``;
  var txtColor = "uk-logo";

  if (
    (pathname !== "/") &
    (pathname !== "/home2") &
    (pathname !== "/home3") &
    (pathname !== "/home4")
  ) {
    whiteBgClass = `uk-section uk-padding-remove-vertical in-header-inner uk-background-cover uk-background-top-center`;
    bgImg = `backgroundImage: 'url("assets/img/in-wave-background-1.png")`;

    txtColor = "uk-logo black-text";
  }
  // const [menus,setMenus]=useState([]);
  // useEffect(()=>{
  //   fetch("https://q2w.in/wave.php?type=menus")
  //   .then((res) => res.json())
  //   .then((json) => {
  //     setMenus(json);
  //     console.log(json);
  //   }).then();
  // },[]);
  // console.log(menus);

  var [hamburgStatus, setHamburg] = useState(false);
  const handleHamburgClick = () => {
    setHamburg(!hamburgStatus);
    console.log(hamburgStatus);
  };
  var menuStatus = useRef();
  useEffect(() => {
    setHamburg(hamburgStatus = false);
    menuStatus.current=hamburgStatus;
    // console.log(menuStatus);
  }, [pathname]);

  return (
    <div>
      <div className="in-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <header>
        {/* <!-- header content begin --> */}
        <div className={whiteBgClass} style={{ bgImg }}>
          {/* <!-- module navigation begin --> */}
          <nav
            className="uk-navbar-container uk-navbar-transparent"
            data-uk-sticky="show-on-up: true; top: 80; animation: uk-animation-fade;"
          >
            <div className="uk-container" data-uk-navbar>
              <div className="uk-navbar-left uk-width-auto">
                <div className="uk-navbar-item">
                  {/* <!-- module logo begin --> */}
                  <Link className={txtColor} to="/">
                    Web2Rise
                  </Link>
                  {/* <!-- module logo begin --> */}
                </div>
              </div>
              <div className="uk-navbar-right uk-width-expand uk-flex uk-flex-right">
                <ul className="uk-navbar-nav uk-visible@m">
                  {menus.map((menu) => {
                    switch (menu.noUrl) {
                      case true:
                        return (
                          <li key={menu.id}>
                            <Link to="/" onClick={(e) => e.preventDefault()}>
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
                                        <Link to={children.url}>
                                          {children.title}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            )}
                          </li>
                        );

                      default:
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
                                        <Link to={children.url}>
                                          {children.title}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            )}
                          </li>
                        );
                    }
                  })}
                </ul>

                {/* hamburg */}
                <div className="custom uk-navbar-item in-mobile-nav uk-hidden@m">
                  <button
                    className="uk-button"
                    // href="#modal-full"
                    // data-uk-toggle=""
                    onClick={handleHamburgClick}
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
                {hamburgStatus ? (
                  <MobileNav closeModal={handleHamburgClick} />
                ) : null}
                {/* hamburger */}

                {authOption === "yes" ? <AuthBtns /> : null}
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

              {/* <!-- module breadcrumb begin --> */}
              {/* {parser(breadCrumb)} */}
              {/* <!-- module breadcrumb end --> */}
            </div>
          </div>
        </div>
        {/* <!-- header content end --> */}
      </header>
    </div>
  );
};
export default Header;
