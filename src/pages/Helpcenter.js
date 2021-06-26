import features from "database/helpCenter/features.json";
import serviceArticles from "database/helpCenter/serviceArticles.json";
const Helpcenter = () => {
  return (
    <main>
      {/* section content begin */}
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid">
            <div className="uk-width-1-1 in-content-10">
              <div
                className="uk-card uk-card-primary uk-card-body uk-border-rounded uk-background-bottom-left uk-background-contain"
                style={{
                  backgroundImage: 'url("assets/img/in-content-10-image.png")',
                }}
              >
                <div className="uk-grid uk-flex uk-flex-center">
                  <div className="uk-width-3-5@m uk-text-center">
                    <h1 className="uk-margin-small-top">
                      Hi, we’re here to help.
                    </h1>
                    <form className="uk-search uk-search-default uk-width-1-1 uk-margin-bottom">
                      <span data-uk-search-icon />
                      <input
                        className="uk-search-input uk-border-pill"
                        type="search"
                        placeholder="Search for articles..."
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="uk-grid-divider uk-child-width-1-3@m uk-child-width-1-2@s uk-margin-medium-top"
                data-uk-grid
              >
                {features.map((feature, index, arr) => {
                  const visible =
                    index === parseInt((arr.length - 1) / 2)
                      ? "uk-visible@m"
                      : "";
                  // var visible;
                  // if (index === ) {
                  //   visible = "uk-visible@m";
                  // } else {
                  //   visible = "";
                  // }

                  return (
                    <div key={index} className={visible}>
                      <h3 className="uk-heading-bullet">
                        <a className="uk-link-text" href={feature.url}>
                          {feature.title}
                        </a>
                      </h3>
                      <div className="uk-grid uk-grid-small" data-uk-grid>
                        <div className="uk-width-expand@m">
                          <p>{feature.desc}</p>
                        </div>
                        <div className="uk-width-auto@m">
                          <i
                            className={`${feature.icon} fa-3x in-icon-wrap small transparent uk-margin-left`}
                          />
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
      {/* section content end */}
      {/* section content begin */}
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid uk-flex uk-flex-center">
            <div className="uk-width-3-5@m">
              <div
                className="uk-grid-small uk-child-width-1-2@s uk-child-width-1-1@m in-content-11"
                data-uk-grid
              >
                {serviceArticles.map((article,index) => {
                  return (
                    <div key={index}>
                      <a
                        href={article.url}
                        className="uk-card uk-card-small uk-card-default uk-card-body uk-border-rounded uk-display-block"
                      >
                        <div className="uk-grid" data-uk-grid>
                          <div className="uk-width-auto@m uk-flex uk-flex-middle">
                            <i className={`${article.icon} fa-lg in-icon-wrap in-margin-remove-left@s uk-margin-left`} />
                          </div>
                          <div className="uk-width-expand@m in-margin-small-top@s">
                            <h4 className="uk-margin-small-bottom">
                              {article.title}
                            </h4>
                            <img
                              className="uk-border-pill uk-background-muted uk-float-left uk-margin-remove-adjacent uk-margin-small-right"
                              src={article.authorImg}
                              width={40}
                              height={40}
                              alt="author"
                            />
                            <p className="uk-text-small uk-margin-remove-bottom">
                              {article.num} articles in this collection
                            </p>
                            <p className="uk-text-small uk-margin-remove-top">
                              Written by {article.author}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
    </main>
  );
};
export default Helpcenter;
