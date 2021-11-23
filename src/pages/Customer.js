import topReviews from "database/customers/topReviews.json";
import reviews from "database/customers/reviews.json";

const Customers = () => {
  return (
    <main>
      {/* section content begin */}
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid uk-flex uk-flex-center">
            <div className="uk-width-3-4@m">
              <div data-uk-grid>
                <div className="uk-width-1-2@s uk-width-2-3@m">
                  <p className="uk-text-large">
                    We help our customers engage investors so their companies
                    can grow
                  </p>
                  <p>
                    Our customers look to us as guides, and we weave our deep
                    legal and technical experience into our software and
                    services.
                  </p>
                </div>
                <div className="uk-width-1-2@s uk-width-expand@m">
                  <ul className="uk-list uk-list-divider uk-margin-small-top">
                    <li>
                      <div className="uk-flex uk-flex-middle">
                        <i className="fas fa-paper-plane fa-lg in-icon-wrap uk-margin-right" />
                        <div>
                          <h3 className="uk-margin-remove-bottom">35,817</h3>
                          <span className="uk-label uk-text-small uk-border-rounded">
                            Business launch
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="uk-flex uk-flex-middle">
                        <i className="fas fa-user-tie fa-lg in-icon-wrap uk-margin-right" />
                        <div>
                          <h3 className="uk-margin-remove-bottom">4,400</h3>
                          <span className="uk-label uk-text-small uk-border-rounded">
                            Investor engaged
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
      {/* section content begin top */}
      <div className="uk-section in-offset-top-20">
        <div className="uk-container">
          <div
            className="uk-grid-medium uk-child-width-1-2@m in-testimonial-8"
            data-uk-grid
          >
            {topReviews.map((review, index) => {
              return (
                <div key={index}>
                  <div className="uk-card uk-card-default uk-box-shadow-small uk-border-rounded">
                    <img
                      className="uk-position-bottom-right"
                      src={review.rImg}
                      alt="client-testimoni"
                      width={200}
                    />
                    <div className="uk-card-header">
                      <blockquote>
                        <p>{review.text}</p>
                      </blockquote>
                    </div>
                    <div className="uk-card-footer">
                      <img src={review.logo} alt="client-logo" width={54} />
                      <blockquote>
                        <footer>
                          {review.rName}
                          <br />
                          <cite>{review.designation}</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* section content end */}
      {/* section content begin */}
      <div className="uk-section in-offset-top-50">
        <div className="uk-container">
          <div
            className="uk-grid-medium uk-child-width-1-3@m in-testimonial-7"
            data-uk-grid
          >
            {reviews.map((review,index) => {
              return (
                <div key={index}>
                  <div className="uk-card uk-card-default uk-box-shadow-small uk-border-rounded">
                    <div className="uk-card-header">
                      <img
                        src={review.logo}
                        alt="client-logo"
                        width={60}
                      />
                    </div>
                    <div className="uk-card-body">
                      <blockquote>
                        <p>
                          {review.text}
                        </p>
                      </blockquote>
                    </div>
                    <div className="uk-card-footer">
                      <blockquote>
                        <footer>
                          {review.rName}
                          <br />
                          <cite>{review.designation}</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>  
              );
            })}
          </div>
        </div>
      </div>
      {/* section content end */}
    </main>
  );
};
export default Customers;
