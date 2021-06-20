import { Link, useLocation } from "react-router-dom";
// import logo1 from "../assets/img/in-logo-1.svg";
import menuOption from "database/menus.json";
import parser from "html-react-parser";
// import {useState,useEffect } from 'react';

function Header() {
  // console.log(menus);
  const { menus, authOption } = menuOption;

  // console.log(useLocation());
  const { pathname } = useLocation();
  var whiteBgClass = `uk-section uk-padding-remove-vertical in-header-home`;
  // var logo = "assets/img/in-logo-1.svg";
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
    // breadCrumb = `<div class="uk-width-1-1 in-breadcrumb">
    //         <ul class="uk-breadcrumb uk-text-uppercase">
    //             <li><a href="index-2.html">Home</a></li>
    //         </ul>
    //   </div>`;
    // logo="assets/img/in-logo-2.svg"
    txtColor = "uk-logo black-text";
  }

  const authBtn = `<div class="uk-navbar-item uk-visible@m in-optional-nav">
                  <a href="signin.html" class="uk-button uk-button-text">
                    <i class="fas fa-user-circle uk-margin-small-right"></i>
                    Log in
                  </a>
                  <a
                    href="/#"
                    class="uk-button uk-button-primary uk-button-small uk-border-pill"
                  >
                    Sign up
                  </a>
                </div> `;

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

  // for white background
  // style={{backgroundImage: 'url("assets/img/in-wave-background-1.png")'}}

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
                    {/* <img
                      className="uk-margin-small-right in-offset-top-10"
                      src={logo}
                      alt="wave"
                      width="134"
                      height="23"
                    /> */}
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
                            <Link to="/" onClick={e=>e.preventDefault()}>
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

                    // return (
                    //   <li key={menu.id}>
                    //     <Link to={menu.url}>
                    //       {menu.title}
                    //       {menu.children ? (
                    //         <i className="fas fa-chevron-down"></i>
                    //       ) : null}
                    //     </Link>

                    //     {menu.children && (
                    //       <div className="uk-navbar-dropdown">
                    //         <ul className="uk-nav uk-navbar-dropdown-nav">
                    //           {menu.children.map((children) => {
                    //             return (
                    //               <li key={children.id}>
                    //                 <Link to={children.url}>
                    //                   {children.title}
                    //                 </Link>
                    //               </li>
                    //             );
                    //           })}
                    //         </ul>
                    //       </div>
                    //     )}
                    //   </li>
                    // );
                  })}
                  {/* <li>
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
                  </li> */}
                </ul>
                {authOption === "yes" ? parser(authBtn) : ""}
                {/* <div className="uk-navbar-item uk-visible@m in-optional-nav">
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
                </div> */}
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
}
export default Header;
