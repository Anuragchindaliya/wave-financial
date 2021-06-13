function Roadmap() {
    return (

      <main>
        {/* sectio content begin */}
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid">
              <div className="uk-width-1-1 uk-flex uk-flex-center">
                <div className="uk-width-3-4@m uk-margin-medium-bottom">
                  <p className="uk-text-lead">We're constantly updating our roadmap to bring transparency for our users and to get your feedback - please tell us what is important for you!</p>
                  <p>You can follow our progress here or follow us on Twitter &nbsp; <a href="/#"><i className="fab fa-twitter" /><span className="uk-text-lowercase">@wavecapital</span></a></p>
                </div>
              </div>
              <div className="uk-width-1-1 in-timeline-1">
                <hr />
                <div className="uk-grid-medium uk-child-width-1-1 uk-child-width-1-3@m" data-uk-grid>
                  <div>
                    <div className="in-timeline-branch">
                      <div className="uk-flex">
                        <i className="fas fa-clipboard-check fa-lg in-icon-wrap" />
                        <div className="in-timeline-title uk-flex uk-flex-middle">
                          <h4 className="uk-margin-remove-bottom">Q4 2019</h4>
                          <span className="uk-label uk-label-success uk-text-small uk-border-rounded">completed</span>
                        </div>
                      </div>
                    </div>
                    <div className="uk-box-shadow-small uk-width-expand">
                      <div className="uk-card uk-card-default uk-card-body uk-card-small uk-border-rounded">
                        <ul className="uk-list uk-list-bullet in-list-check">
                          <li>Wireframe</li>
                          <li>Design</li>
                          <li>Documentation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="in-timeline-branch">
                      <div className="uk-flex">
                        <i className="fas fa-cog fa-lg in-icon-wrap" />
                        <div className="in-timeline-title uk-flex uk-flex-middle">
                          <h4 className="uk-margin-remove-bottom">Q2 2020</h4>
                          <span className="uk-label uk-text-small uk-border-rounded">on progress</span>
                        </div>
                      </div>
                    </div>
                    <div className="uk-box-shadow-small uk-width-expand">
                      <div className="uk-card uk-card-default uk-card-body uk-card-small uk-border-rounded">
                        <ul className="uk-list uk-list-bullet in-list-check">
                          <li>Chart with base functional</li>
                          <li>Launching plans and billings</li>
                          <li>Improvement of the rest of the functions of the Chart</li>
                          <li>Availability panel</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="in-timeline-branch">
                      <div className="uk-flex">
                        <i className="fas fa-flask fa-lg in-icon-wrap" />
                        <div className="in-timeline-title uk-flex uk-flex-middle">
                          <h4 className="uk-margin-remove-bottom">Q3 2020</h4>
                          <span className="uk-label uk-label-warning uk-text-small uk-border-rounded">planned</span>
                        </div>
                      </div>
                    </div>
                    <div className="uk-box-shadow-small uk-width-expand">
                      <div className="uk-card uk-card-default uk-card-body uk-card-small uk-border-rounded">
                        <ul className="uk-list uk-list-bullet in-list-check">
                          <li>Extensions for other popular browsers</li>
                          <li>List View for your tasks</li>
                          <li>Apps for iOS &amp; Android</li>
                          <li>New cool skin for Default View</li>
                          <li>Community formation and the subsequent cyclic completion of the product based on the wishes of customers</li>
                        </ul>
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
  export default Roadmap;