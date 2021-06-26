import { Link } from "react-router-dom";
const MobileNav = ({closeModal}) => {

  return (
    <div
      id="modal-full"
      className="uk-modal-full uk-modal uk-open"
      data-uk-modal
      style={{ display: "block" }}
    >
      <div
        className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle"
        data-uk-height-viewport
        style={{ minHeight: "calc(100vh)" }}
      >
        <button className="uk-modal-close-full uk-button" onClick={closeModal}>
          <i className="fas fa-times" />
        </button>
        <div className="uk-width-large uk-padding-large">
          <ul className="uk-nav-default uk-nav-parent-icon uk-nav" data-uk-nav>
            <li className="uk-active uk-parent">
              <Link to="/">Home</Link>
              <ul className="uk-nav-sub" hidden>
                <li>
                  <Link to="/home2">Homepage2</Link>
                </li>
                <li>
                  <Link to="/home3">Homepage3</Link>
                </li>
                <li>
                  <Link to="/home4">Homepage4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/markets">Markets</Link>
            </li>
            <li className="uk-parent">
              <Link to="/">Company</Link>
              <ul className="uk-nav-sub" hidden>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
          </ul>
          <Link
            to="sign-up"
            className="uk-button uk-button-primary uk-border-rounded uk-align-center"
          >
            Log in
            <i className="fas fa-sign-in-alt uk-margin-small-left" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MobileNav;
