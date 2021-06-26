import timeline from "database/roadmap/timeline.json";
const Roadmap=()=> {
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

                  {timeline.map(card=>{
                    return(
                      <div>
                    <div className="in-timeline-branch">
                      <div className="uk-flex">
                        <i className={`${card.icon} fa-lg in-icon-wrap`} />
                        <div className="in-timeline-title uk-flex uk-flex-middle">
                          <h4 className="uk-margin-remove-bottom">{card.date}</h4>
                          <span className={`uk-label ${card.badgeColor} uk-text-small uk-border-rounded`}>completed</span>
                        </div>
                      </div>
                    </div>
                    <div className="uk-box-shadow-small uk-width-expand">
                      <div className="uk-card uk-card-default uk-card-body uk-card-small uk-border-rounded">
                        <ul className="uk-list uk-list-bullet in-list-check">
                          {card.lists.map(list=>{
                            return(
                              <li>{list}</li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                    )
                  })}
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