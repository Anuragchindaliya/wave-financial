import courses from "database/education/courses.json";
import categories from "database/education/categories.json";
import callToAction from "database/education/call2action.json";
const Education = () => {
  return (
    <main>
      {/* section content begin */}
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid" data-uk-grid>
            <div className="uk-width-3-5@m">
              <h1 className="uk-margin-small-bottom">
                <span className="in-highlight">Knowledge</span> is a wise
                investment
              </h1>
              <p className="uk-text-lead uk-text-muted uk-margin-remove-top">
                By combining easy-to-understand information with actionable
                insights, Our company helps make the market seem less
                daunting—and more approachable.
              </p>
              <span className="uk-label uk-text-small uk-text-uppercase uk-border-pill">
                Learn
              </span>
              <i className="fas fa-arrows-alt-h fa-sm uk-margin-small-left uk-margin-small-right" />
              <span className="uk-label uk-text-small uk-text-uppercase uk-border-pill">
                Understand
              </span>
              <i className="fas fa-arrows-alt-h fa-sm uk-margin-small-left uk-margin-small-right" />
              <span className="uk-label uk-text-small uk-text-uppercase uk-border-pill">
                Trade
              </span>
            </div>
            <div className="uk-width-2-5@m">
              <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
                <div className="uk-grid uk-grid-small">
                  <div className="uk-width-expand@m">
                    <h3 className="uk-margin-remove-bottom">Trade Academy</h3>
                    <p className="uk-margin-small-top">
                      Reprehenderit in voluptate velit esse cillum dolore
                      laboris aute irure.
                    </p>
                    <a
                      className="uk-button uk-button-primary uk-border-rounded"
                      href="/#"
                    >
                      Start Learning
                    </a>
                  </div>
                  <div className="uk-width-auto@m uk-visible@m">
                    <div className="in-icon-wrapper transparent uk-margin-top">
                      <i className="fas fa-user-graduate fa-5x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
      {/* section content begin */}
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid">
            <div className="uk-width-1-1">
              <table className="uk-table uk-table-middle uk-table-divider uk-table-responsive">
                <tbody>
                  {courses.map((course, index) => {
                    return (
                      <tr key={index}>
                        <td className="uk-width-1-3@m">
                          <div className="uk-grid uk-grid-small uk-flex uk-flex-middle">
                            <div className="uk-width-auto">
                              <i
                                className={`${course.icon} fa-lg in-icon-wrap`}
                              />
                            </div>
                            <div className="uk-width-expand">
                              <h3>{course.title}</h3>
                            </div>
                          </div>
                        </td>
                        <td>{course.desc}</td>
                        <td className="uk-width-1-5@m uk-text-right@m">
                          <a
                            href={course.url}
                            className="uk-button uk-button-text"
                          >
                            Enter Course
                            <i className="fas fa-chevron-right fa-xs uk-margin-small-left" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="uk-flex uk-flex-center uk-margin-medium-top uk-margin-bottom">
                <div className="uk-width-3-4@m">
                  <div
                    className="uk-grid-small uk-child-width-1-3@m uk-child-width-1-2@s"
                    data-uk-grid
                  >
                    {categories.map((category,index) => {
                      return (
                        <div key={index}>
                          <a
                            className="uk-button uk-button-default uk-border-rounded uk-width-expand"
                            href={category.url}
                          >
                            {category.title}
                          </a>
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
      {/* section content end */}
      {/* section content begin */}
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid">
            <div className="uk-width-1-1">
              <div
                className="uk-card uk-card-primary uk-box-shadow-small uk-border-rounded uk-background-cover"
                style={{
                  backgroundImage: 'url("assets/img/in-card-background-1.jpg")'
                }}
              >
                <div className="uk-card-body">
                  <h2 className="uk-margin-remove-bottom">{callToAction.title}</h2>
                  <p className="uk-margin-small-top">
                    {callToAction.desc}
                  </p>
                  <a
                    className="uk-button uk-button-primary uk-border-rounded"
                    href={callToAction.btnUrl} 
                  >
                    {callToAction.btnTxt}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
    </main>
  );
};

export default Education;
