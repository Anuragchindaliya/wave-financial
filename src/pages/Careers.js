import aboutCareers from "database/careers/aboutCareers.json";
import openPositions from "database/careers/openPositions.json";
import gallery from "database/careers/gallery.json";
const Careers = () => {
  return (
    <main>
      {/* section content begin */}
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid uk-flex uk-flex-center">
            <div className="uk-width-3-4@m">
              <p className="uk-text-large">
                We're a team of mission-driven experts and learners who are
                committed to making security a strength for every startup.
              </p>
              <p>
                We've already helped hundreds of innovative companies succeed at
                becoming trustworthy custodians of sensitive data. And we're
                just getting started.
              </p>
              <div
                className="uk-grid-divider uk-child-width-1-1 uk-child-width-1-3@m uk-margin-medium-top uk-margin-bottom"
                data-uk-grid
              >
                {aboutCareers.map((card, index) => {
                  return (
                    <div key={index}>
                      <h4>{card.title}</h4>
                      <p>{card.desc}</p>
                      <a
                        className="uk-button uk-button-text uk-text-primary"
                        href={card.btnUrl}
                      >
                        {card.btnTxt}
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
      {/* section content begin */}
      <div className="uk-section in-offset-top-20">
        <div className="uk-container">
          <div className="uk-grid uk-flex uk-flex-center">
            <div className="uk-width-1-1">
              <h2 className="uk-text-center">Open positions</h2>
              <table className="uk-table uk-table-middle uk-table-divider uk-table-responsive">
                <tbody>
                  {openPositions.map((position,index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <h4>{position.title}</h4>
                        </td>
                        <td>
                          <i className="fas fa-map-marker-alt uk-margin-small-right" />{" "}
                          {position.address}
                        </td>
                        <td className="uk-text-left uk-text-right@m">
                          <a
                            className="uk-button uk-button-primary uk-border-rounded"
                            href={position.url}
                          >
                            Apply for this job{" "}
                            <i className="fas fa-file-alt uk-margin-small-left" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
      {/* section content begin */}
      <div className="uk-section">
        <div className="uk-container">
          <div
            className="uk-grid-small uk-child-width-1-3@m uk-child-width-1-2@s uk-margin-bottom"
            data-uk-grid="masonry: true"
          >
            {gallery.map((img,index)=>{
              return (
                <div key={index} className="uk-text-center">
              <div className="uk-inline-clip uk-transition-toggle" tabIndex={0}>
                <img
                  className="uk-transition-scale-up uk-transition-opaque"
                  src={img}
                  alt="gallery"
                  data-width
                  data-height
                />
              </div>
            </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* section content end */}
    </main>
  );
};

export default Careers;
