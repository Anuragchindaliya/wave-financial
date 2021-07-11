import comments from "database/sblog/comments.json";
const Sblog = () => {
  return (
    <main>
      {/* section content begin */}
      <div className="uk-section uk-margin-top">
        <div className="uk-container">
          <div className="uk-grid uk-flex uk-flex-center in-blog-1 in-article">
            <div className="uk-width-1-1 in-figure-available">
              <img
                className="uk-width-1-1 uk-border-rounded"
                src="assets/img/in-blog-image-10.jpg"
                alt="sample"
              />
            </div>
            <div className="uk-width-3-4@m">
              <article className="uk-card uk-card-default uk-box-shadow-small uk-border-rounded">
                <div className="uk-card-body">
                  <div className="uk-flex uk-flex-middle uk-margin-remove-bottom">
                    <div className="uk-margin-small-right">
                      <img
                        className="uk-border-pill uk-background-muted"
                        src="assets/img/in-team-5.png"
                        alt="team"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>
                      <p className="uk-text-small uk-text-muted uk-margin-remove-bottom">
                        <a href="/#">Jeffrey Reyes</a>
                        <span className="uk-margin-small-left uk-margin-small-right">
                          •
                        </span>
                        May 21, 2020
                      </p>
                    </div>
                  </div>
                  <h2 className="uk-margin-top uk-margin-medium-bottom">
                    Here’s what is driving GM’s reported plans to develop a
                    commercial electric van
                  </h2>
                  <p className="uk-dropcap">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabom
                    voluptatem reprehenderit qui in ea voluptate.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt.
                  </p>
                  <h4>Three main factors</h4>
                  <p>
                    Consectetur adipisci velit sed quia non numquam eius modi
                    tempora incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem. Ut enim ad minima veniam.
                  </p>
                  <ul className="uk-list uk-list-bullet">
                    <li>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse.
                    </li>
                    <li>
                      Nihil molestiae consequatur, vel illum qui dolorem eum
                      fugiat quo voluptas nulla pariatur.
                    </li>
                    <li>
                      Dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque.
                    </li>
                  </ul>
                  <blockquote className="in-blockquote" cite="#">
                    <p className="uk-margin-small-bottom">
                      At vero eose accusamus iusto dignissim ducimus blanditiis
                      praesentium voluptatum deleniti atque oddi corrupti
                      dolores membrant.
                    </p>
                    <footer>
                      <cite>Mark Harris</cite>
                    </footer>
                  </blockquote>
                  <p>
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates repudiandae
                    sint et molestiae non recusandae. Itaque earum rerum hic
                    tenetur a sapiente delectus, aut reiciendis voluptatibus
                    maiores consequatur perferendis doloribus asperiores
                    repellat.
                  </p>
                  <h4>A report conclusion</h4>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatur. Nam libero
                    tempore, cum soluta nobis est eligendi optio cumque nihil
                    impedit quo minus id quod maxime placeat facere possimus,
                    omnis voluptas assumenda est, omnis dolor repellendus.
                  </p>
                </div>
                <div className="uk-card-footer uk-clearfix">
                  <div className="uk-float-left in-article-tags">
                    <i className="fas fa-tags" />
                    <span className="uk-margin-small-left uk-text-bold">
                      Tags: &nbsp;
                    </span>
                    <a href="/#" className="uk-link-muted">
                      Regional
                    </a>
                    , &nbsp;
                    <a href="/#" className="uk-link-muted">
                      Commodities
                    </a>
                    , &nbsp;
                    <a href="/#" className="uk-link-muted">
                      News
                    </a>
                  </div>
                  <div className="uk-float-right in-article-share">
                    <a
                      href="/#"
                      data-uk-tooltip="Share with Facebook"
                      className="uk-label uk-border-pill in-brand-facebook"
                    >
                      <i className="fab fa-facebook-f fa-sm" />
                    </a>
                    <a
                      href="/#"
                      data-uk-tooltip="Share with Twitter"
                      className="uk-label uk-border-pill in-brand-twitter"
                    >
                      <i className="fab fa-twitter fa-sm" />
                    </a>
                    <a
                      href="/#"
                      data-uk-tooltip="Share with Pinterest"
                      className="uk-label uk-border-pill in-brand-pinterest"
                    >
                      <i className="fab fa-pinterest-p fa-sm" />
                    </a>
                    <a
                      href="/#"
                      data-uk-tooltip="Share with Email"
                      className="uk-label uk-border-pill in-generic-email"
                    >
                      <i className="fas fa-envelope fa-sm" />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
      {/* section content begin */}
      <div className="uk-section uk-section-small in-offset-top-20">
        <div className="uk-container">
          <div className="uk-grid uk-flex uk-flex-center">
            <div className="uk-width-3-4@m">
              <h2 className="uk-margin-small-bottom">Comments</h2>

              <ul className="uk-comment-list">
                {comments.map((comment) => {
                  // function fetchReply(data){
                  //   var html=`<article className="uk-comment uk-visible-toggle">
                  //   <div className="uk-grid uk-grid-medium">
                  //     <div className="uk-width-auto">
                  //       <div className="uk-comment-header">
                  //         <img
                  //           className="uk-border-circle uk-background-muted uk-comment-avatar"
                  //           src={comment.profileImg}
                  //           width={70}
                  //           height={70}
                  //           alt="avatar"
                  //         />
                  //       </div>
                  //     </div>
                  //     <div className="uk-width-expand">
                  //       <div className="uk-comment-body uk-position-relative">
                  //         <div className="uk-position-top-right uk-hidden-hover">
                  //           <a href="/#">
                  //             <i className="fas fa-reply fa-xs uk-margin-small-right" />
                  //             Reply
                  //           </a>
                  //         </div>
                  //         <h4 className="uk-comment-title uk-margin-remove">
                  //           <a className="uk-link-reset" href="/#">
                  //             {comment.name}
                  //           </a>
                  //         </h4>
                  //         <p className="uk-comment-meta uk-margin-remove-top">
                  //           <a
                  //             className="uk-link-reset uk-text-small"
                  //             href="/#"
                  //           >
                  //             <i className="fas fa-clock fa-sm uk-margin-small-right" />
                  //             {comment.time}
                  //           </a>
                  //         </p>
                  //         <p>{comment.comment}</p>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </article>`;
                  //   while(data.hasOwnProperty('replies')){
                  //     console.log("rely");
                  //     return html+fetchReply(data.replies)
                  //   }
                  // }
                  return (
                    <li key={comment.id}>
                      {/* {fetchReply(comment)} */}
                      <article className="uk-comment uk-visible-toggle">
                        <div className="uk-grid uk-grid-medium">
                          <div className="uk-width-auto">
                            <div className="uk-comment-header">
                              <img
                                className="uk-border-circle uk-background-muted uk-comment-avatar"
                                src={comment.profileImg}
                                width={70}
                                height={70}
                                alt="avatar"
                              />
                            </div>
                          </div>
                          <div className="uk-width-expand">
                            <div className="uk-comment-body uk-position-relative">
                              <div className="uk-position-top-right uk-hidden-hover">
                                <a href="/#">
                                  <i className="fas fa-reply fa-xs uk-margin-small-right" />
                                  Reply
                                </a>
                              </div>
                              <h4 className="uk-comment-title uk-margin-remove">
                                <a className="uk-link-reset" href="/#">
                                  {comment.name}
                                </a>
                              </h4>
                              <p className="uk-comment-meta uk-margin-remove-top">
                                <a
                                  className="uk-link-reset uk-text-small"
                                  href="/#"
                                >
                                  <i className="fas fa-clock fa-sm uk-margin-small-right" />
                                  {comment.time}
                                </a>
                              </p>
                              <p>{comment.comment}</p>
                            </div>
                          </div>
                        </div>
                      </article>
                      {/* {fetchReply(comment.replies)} */}

                      {comment.replies
                        && comment.replies.map((reply) => {
                            return (
                              <ul key={reply.id}>
                                <li>
                                  <article className="uk-comment uk-comment-primary uk-visible-toggle">
                                    <div className="uk-grid uk-grid-medium">
                                      <div className="uk-width-auto">
                                        <div className="uk-comment-header">
                                          <img
                                            className="uk-border-circle uk-background-muted uk-comment-avatar"
                                            src={reply.profileImg}
                                            width={70}
                                            height={70}
                                            alt="avatar"
                                          />
                                        </div>
                                      </div>
                                      <div className="uk-width-expand">
                                        <div className="uk-comment-body uk-position-relative">
                                          <div className="uk-position-top-right uk-hidden-hover">
                                            <a href="/#">
                                              <i className="fas fa-reply fa-xs uk-margin-small-right" />
                                              Reply
                                            </a>
                                          </div>
                                          <h4 className="uk-comment-title uk-margin-remove">
                                            <a
                                              className="uk-link-reset"
                                              href="/#"
                                            >
                                            {reply.name}
                                            </a>
                                          </h4>
                                          <p className="uk-comment-meta uk-margin-remove-top">
                                            <a
                                              className="uk-link-reset uk-text-small"
                                              href="/#"
                                            >
                                              <i className="fas fa-clock fa-sm uk-margin-small-right" />
                                              {reply.time}
                                            </a>
                                          </p>
                                          <p>
                                            {reply.comment}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                </li>
                              </ul>
                            );
                          })}
                    </li>
                  );
                })}

                {/* <li>
                  <article className="uk-comment uk-visible-toggle">
                    <div className="uk-grid uk-grid-medium">
                      <div className="uk-width-auto">
                        <div className="uk-comment-header">
                          <img
                            className="uk-border-circle uk-background-muted uk-comment-avatar"
                            src="assets/img/in-team-4.png"
                            width={70}
                            height={70}
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <div className="uk-width-expand">
                        <div className="uk-comment-body uk-position-relative">
                          <div className="uk-position-top-right uk-hidden-hover">
                            <a href="/#">
                              <i className="fas fa-reply fa-xs uk-margin-small-right" />
                              Reply
                            </a>
                          </div>
                          <h4 className="uk-comment-title uk-margin-remove">
                            <a className="uk-link-reset" href="/#">
                              Mark Harris
                            </a>
                          </h4>
                          <p className="uk-comment-meta uk-margin-remove-top">
                            <a
                              className="uk-link-reset uk-text-small"
                              href="/#"
                            >
                              <i className="fas fa-clock fa-sm uk-margin-small-right" />
                              April 25, 2020
                            </a>
                          </p>
                          <p>
                            Quis autem vel eum iure reprehenderit qui in ea
                            voluptate velit esse quam nihil molestiae consequ
                            vel illum qui dolorem eum fugiat quo voluptas nulla
                            pariatur sunt in culpa qui officia deserunt mollit
                            anim id est laborum adipisci velit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                  <ul>
                    <li>
                      <article className="uk-comment uk-comment-primary uk-visible-toggle">
                        <div className="uk-grid uk-grid-medium">
                          <div className="uk-width-auto">
                            <div className="uk-comment-header">
                              <img
                                className="uk-border-circle uk-background-muted uk-comment-avatar"
                                src="assets/img/in-team-6.png"
                                width={70}
                                height={70}
                                alt="avatar"
                              />
                            </div>
                          </div>
                          <div className="uk-width-expand">
                            <div className="uk-comment-body uk-position-relative">
                              <div className="uk-position-top-right uk-hidden-hover">
                                <a href="/#">
                                  <i className="fas fa-reply fa-xs uk-margin-small-right" />
                                  Reply
                                </a>
                              </div>
                              <h4 className="uk-comment-title uk-margin-remove">
                                <a className="uk-link-reset" href="/#">
                                  Dennis Olson
                                </a>
                              </h4>
                              <p className="uk-comment-meta uk-margin-remove-top">
                                <a
                                  className="uk-link-reset uk-text-small"
                                  href="/#"
                                >
                                  <i className="fas fa-clock fa-sm uk-margin-small-right" />
                                  April 27, 2020
                                </a>
                              </p>
                              <p>
                                Tuis autem vel eum iure reprehenderit qui in ea
                                voluptate velit esse quam nihil molestiae
                                consequ vel illum qui dolorem.
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </li>
                  </ul>
                </li>
                <li>
                  <article className="uk-comment uk-visible-toggle">
                    <div className="uk-grid uk-grid-medium">
                      <div className="uk-width-auto">
                        <div className="uk-comment-header">
                          <img
                            className="uk-border-circle uk-background-muted uk-comment-avatar"
                            src="assets/img/in-team-9.png"
                            width={70}
                            height={70}
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <div className="uk-width-expand">
                        <div className="uk-comment-body uk-position-relative">
                          <div className="uk-position-top-right uk-hidden-hover">
                            <a href="/#">
                              <i className="fas fa-reply fa-xs uk-margin-small-right" />
                              Reply
                            </a>
                          </div>
                          <h4 className="uk-comment-title uk-margin-remove">
                            <a className="uk-link-reset" href="/#">
                              Peter Morrison
                            </a>
                          </h4>
                          <p className="uk-comment-meta uk-margin-remove-top">
                            <a
                              className="uk-link-reset uk-text-small"
                              href="/#"
                            >
                              <i className="fas fa-clock fa-sm uk-margin-small-right" />
                              April 25, 2020
                            </a>
                          </p>
                          <p>
                            Molestiae consequ vel illum qui dolorem eum fugiat
                            quo voluptas nulla pariatur sunt in culpa qui
                            officia deserunt mollit anim id est laborum adipisci
                            velit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
      {/* section content begin */}
      <div className="uk-section in-offset-top-20">
        <div className="uk-container">
          <div className="uk-grid uk-flex uk-flex-center">
            <div className="uk-width-3-4@m">
              <h2 className="uk-margin-bottom">Leave a comment</h2>
              <form className="uk-form uk-grid-small" data-uk-grid>
                <div className="uk-width-1-2@s">
                  <input
                    className="uk-input uk-border-rounded"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                  />
                </div>
                <div className="uk-width-1-2@s">
                  <input
                    className="uk-input uk-border-rounded"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                  />
                </div>
                <div className="uk-width-1-1">
                  <textarea
                    className="uk-textarea uk-border-rounded"
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Comment"
                    defaultValue={""}
                  />
                </div>
                <div className="uk-width-1-1">
                  <button
                    className="uk-width-1-1 uk-button uk-button-primary uk-border-rounded"
                    type="submit"
                    name="submit"
                  >
                    Post comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
    </main>
  );
};
export default Sblog;
