import { Link } from "react-router-dom";
const AuthBtns = () => {
  return (
    <div className="uk-navbar-item uk-visible@m in-optional-nav">
      <Link to="/sign-up" className="uk-button uk-button-text">
        <i className="fas fa-user-circle uk-margin-small-right"></i>
        Log in
      </Link>
      <Link    
        to="/sign-up"
        className="uk-button uk-button-primary uk-button-small uk-border-pill"
      >
        Sign up
      </Link>
    </div>
  );
};
export default AuthBtns;
