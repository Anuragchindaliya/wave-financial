import React from "react";
import cards from "database/markets/cards.json";
import lists from "database/markets/lists.json";
import callToAction from "database/markets/callToAction.json";
const Markets = () => {
    const {list1,list2}=lists;
  return (
    <main>
      {/* <!-- section content begin --> */}
      <div className="uk-section">
        <div className="uk-container">
          <div
            className="uk-grid-match uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m in-card-10"
            data-uk-grid
          >
            <div className="uk-width-1-1">
              <h1 className="uk-margin-remove">
                A <span className="in-highlight">relationship</span> on your
                terms.
              </h1>
              <p className="uk-text-lead uk-text-muted uk-margin-remove">
                Work with us the way you want.
              </p>
              <p>
                Some believe you must choose between an online broker and a
                wealth management firm. At Wave Capital, you don’t need to
                compromise. Whether you invest on your own, with an advisor, or
                a little of both — we can support you.
              </p>
            </div>

            {cards.map((card, index) => {
              return (
                <div key={index}>
                  <div
                    className={`uk-card uk-card-default uk-card-body uk-border-rounded uk-light ${card.color}`}
                  >
                    <i className="fas fa-seedling fa-lg in-icon-wrap uk-margin-bottom"></i>
                    <h4 className="uk-margin-top">
                      <a href="/#">
                        {card.title}
                        <i className="fas fa-chevron-right uk-float-right"></i>
                      </a>
                    </h4>
                    <hr />
                    <p>{card.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* <div>
                      <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-light in-card-green">
                          <i className="fas fa-seedling fa-lg in-icon-wrap uk-margin-bottom"></i>
                          <h4 className="uk-margin-top">
                              <a href="/#">Investing<i className="fas fa-chevron-right uk-float-right"></i></a>
                          </h4>
                          <hr/>
                          <p>A wide selection of investment product to help build diversified portfolio</p>
                      </div>
                  </div>
                  <div>
                      <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-light in-card-blue">
                          <i className="fas fa-chart-bar fa-lg in-icon-wrap uk-margin-bottom"></i>
                          <h4 className="uk-margin-top">
                              <a href="/#">Trading<i className="fas fa-chevron-right uk-float-right"></i></a>
                          </h4>
                          <hr/>
                          <p>Powerful trading tools, resources, insight and support</p>
                      </div>
                  </div>
                  <div>
                      <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-light in-card-purple">
                          <i className="fas fa-chart-pie fa-lg in-icon-wrap uk-margin-bottom"></i>
                          <h4 className="uk-margin-top">
                              <a href="/#">Wealth management<i className="fas fa-chevron-right uk-float-right"></i></a>
                          </h4>
                          <hr/>
                          <p>Dedicated financial consultant to help reach your own specific goals</p>
                      </div>
                  </div>
                  <div>
                      <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-light in-card-navy">
                          <i className="fas fa-chalkboard-teacher fa-lg in-icon-wrap uk-margin-bottom"></i>
                          <h4 className="uk-margin-top">
                              <a href="/#">Investment advisory<i className="fas fa-chevron-right uk-float-right"></i></a>
                          </h4>
                          <hr/>
                          <p>A wide selection of investing strategies from seasoned portfolio managers</p>
                      </div>
                  </div>
                  <div>
                      <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-light in-card-grey">
                          <i className="fas fa-funnel-dollar fa-lg in-icon-wrap uk-margin-bottom"></i>
                          <h4 className="uk-margin-top">
                              <a href="/#">Smart portfolio<i className="fas fa-chevron-right uk-float-right"></i></a>
                          </h4>
                          <hr/>
                          <p>A revolutionary, fully-automated investmend advisory services</p>
                      </div>
                  </div>
                  <div>
                      <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-light in-card-orange">
                          <i className="fas fa-handshake fa-lg in-icon-wrap uk-margin-bottom"></i>
                          <h4 className="uk-margin-top">
                              <a href="/#">Mutual fund advisor<i className="fas fa-chevron-right uk-float-right"></i></a>
                          </h4>
                          <hr/>
                          <p>Specialized guidance from independent local advisor for hight-net-worth investors</p>
                      </div>
                  </div> */}
          </div>
        </div>
      </div>
      {/* <!-- section content end -->
      <!-- section content begin --> */}
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid">
            <div className="uk-width-2-3@m">
              <div className="uk-grid uk-grid-small" data-uk-grid>
                <div className="uk-width-auto@m">
                  <i className="fas fa-money-bill-wave fa-2x in-icon-wrap large primary-color uk-margin-right"></i>
                </div>
                <div className="uk-width-expand">
                  <h3>Why trade with Wave Capital?</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    repudiandae ullamco.
                  </p>
                  <div
                    className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m in-margin-bottom-30@s"
                    data-uk-grid
                  >
                    <div>
                      <ul className="uk-list uk-list-bullet in-list-check">
                        {list1.map((list, index) => {
                          return (
                          <li key={index}>{list}</li>
                          )
                        })}
                        {/* <li>Direct Market Access (DMA)</li>
                        <li>Leverage up to 1:500</li>
                        <li>T+0 settlement</li>
                        <li>Dividends paid in cash</li> */}
                      </ul>
                    </div>
                    <div className="in-margin-small-top@s in-margin-bottom@s">
                        
                      <ul className="uk-list uk-list-bullet in-list-check">
                      {list2.map((list, index) => {
                          return (
                          <li key={index}>{list}</li>
                          )
                        })}
                        {/* <li>Free from UK Stamp Duty</li>
                        <li>Short selling available</li>
                        <li>Commissions from 0.08%</li>
                        <li>Access to 1500 global shares</li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-width-1-3@m">
              <h3>Check out our Shares offer</h3>
              <table className="uk-table uk-table-divider uk-table-striped uk-text-small uk-text-center">
                <thead>
                  <tr>
                    <th className="uk-text-center">Name</th>
                    <th className="uk-text-center">Initial Deposit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Apple Inc CFD</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>Alibaba CFD</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>Facebook CFD</td>
                    <td>10%</td>
                  </tr>
                </tbody>
              </table>
              <p className="uk-text-small">
                <a href="/#">See Full Shares Table</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- section content end -->
      <!-- section content begin --> */}
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid">
            <div className="uk-width-1-1 in-card-16">
              <div className="uk-card uk-card-default uk-card-body uk-box-shadow-small uk-border-rounded">
                <div className="uk-grid uk-flex-middle" data-uk-grid>
                  <div className="uk-width-1-1 uk-width-expand@m">
                    <h3>
                     {callToAction.title}
                    </h3>
                  </div>
                  <div className="uk-width-auto">
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
      </div>
      {/* <!-- section content end --> */}
    </main>
  );
};
export default Markets;
