import { Link } from "react-router-dom";
const SignUp=()=> {
  return (
    <main>
      {/* section content begin */}
      <div className="uk-section uk-padding-remove-vertical">
        <div className="uk-container uk-container-expand">
          <div className="uk-grid" data-uk-height-viewport="expand: true">
            <div
              className="uk-width-3-5@m uk-background-cover uk-background-center-right uk-visible@m uk-box-shadow-xlarge"
              style={{ backgroundImage: "url(assets/img/in-signin-image.jpg)" }}
            ></div>
            <div className="uk-width-expand@m uk-flex uk-flex-middle">
              <div className="uk-grid uk-flex-center">
                <div className="uk-width-3-5@m">
                  <div className="in-padding-horizontal@s">
                    {/* module logo begin */}
                    <Link className="uk-logo" to="/">
                      <img
                        className="uk-margin-small-right in-offset-top-10"
                        src="assets/img/in-logo-2.svg"
                        alt="wave"
                        width={134}
                        height={23}
                      />
                    </Link>
                    {/* module logo begin */}
                    <p className="uk-text-lead uk-margin-top uk-margin-remove-bottom">
                      Log into your account
                    </p>
                    <p className="uk-text-small uk-margin-remove-top uk-margin-medium-bottom">
                      Don't have an account? <a href="/#">Register here</a>
                    </p>
                    {/* login form begin */}
                    <form className="uk-grid uk-form">
                      <div className="uk-margin-small uk-width-1-1 uk-inline">
                        <span className="uk-form-icon uk-form-icon-flip fas fa-user fa-sm" />
                        <input
                          className="uk-input uk-border-rounded"
                          id="username"
                        //   defaultValue
                          type="text"
                          placeholder="Username"
                        />
                      </div>
                      <div className="uk-margin-small uk-width-1-1 uk-inline">
                        <span className="uk-form-icon uk-form-icon-flip fas fa-lock fa-sm" />
                        <input
                          className="uk-input uk-border-rounded"
                          id="password"
                        //   defaultValue
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="uk-margin-small uk-width-auto uk-text-small">
                        <label>
                          <input
                            className="uk-checkbox uk-border-rounded"
                            type="checkbox"
                          />{" "}
                          Remember me
                        </label>
                      </div>
                      <div className="uk-margin-small uk-width-expand uk-text-small">
                        <label className="uk-align-right">
                          <a className="uk-link-reset" href="/#">
                            Forgot password?
                          </a>
                        </label>
                      </div>
                      <div className="uk-margin-small uk-width-1-1">
                        <button
                          className="uk-button uk-width-1-1 uk-button-primary uk-border-rounded uk-float-left"
                          type="submit"
                          name="submit"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                    {/* login form end */}
                    <p className="uk-heading-line uk-text-center">
                      <span>Or sign in with</span>
                    </p>
                    <div className="uk-margin-medium-bottom uk-text-center">
                      <a
                        className="uk-button uk-button-small uk-border-rounded in-brand-google"
                        href="/#"
                      >
                        <i className="fab fa-google uk-margin-small-right" />
                        Google
                      </a>
                      <a
                        className="uk-button uk-button-small uk-border-rounded in-brand-facebook"
                        href="/#"
                      >
                        <i className="fab fa-facebook-f uk-margin-small-right" />
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
    </main>
  );
}

export default SignUp;
