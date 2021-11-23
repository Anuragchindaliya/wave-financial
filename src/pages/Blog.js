import articles from "database/blog/articles.json";
import categories from "database/blog/categories.json";
import populars from "database/blog/populars.json";
import tags from "database/blog/tags.json";
import parser from "html-react-parser";
const Blog = () => {
  return (
    <main>
      {/* section content begin */}
      <div className="uk-section uk-margin-top">
        <div className="uk-container">
          <div className="uk-grid" data-uk-grid>
            <div className="uk-width-2-3@m">
              <div
                className="uk-grid-medium uk-child-width-1-2@m in-blog-1"
                data-uk-grid
              >
                {articles.map((blog, index) => {
                  var topBlog, showImg;
                  if (index === 0) {
                    topBlog = "uk-width-1-1";
                    showImg = `<div class="uk-card-media-top">
                    <img
                      src="${blog.articleImg}"
                      alt="sample"
                    />
                  </div>`;
                  } else {
                    topBlog = "";
                    showImg = "";
                  }

                  return (
                    <div key={index} className={topBlog}>
                      <article className="uk-card uk-card-default uk-box-shadow-small uk-border-rounded">
                        {parser(showImg)}
                        <div className="uk-card-body">
                          <h3>
                            <a href={blog.url}>{blog.title}</a>
                          </h3>
                          <p>{blog.desc}</p>
                          <div className="uk-flex uk-flex-middle">
                            <div className="uk-margin-small-right">
                              <img
                                className="uk-border-pill uk-background-muted"
                                src={blog.authorImg}
                                alt="team"
                                width={24}
                                height={24}
                              />
                            </div>
                            <div>
                              <p className="uk-text-small uk-text-muted uk-margin-remove-bottom">
                                <a href="/#">{blog.authorName}</a>
                                <span className="uk-margin-small-left uk-margin-small-right">
                                  •
                                </span>
                                {blog.publishedTime}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="uk-card-footer uk-clearfix">
                          <div className="uk-float-left">
                            <a href="/#">
                              <span className="uk-label uk-label-success uk-border-pill">
                                {blog.niche}
                              </span>
                            </a>
                          </div>
                          <div className="uk-float-right">
                            <a
                              href={blog.url}
                              className="uk-button uk-button-text"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
                {/* first blog is big */}
                
              </div>
              {/* module pagination begin */}
              <ul className="uk-pagination uk-flex-center uk-margin-medium-top">
                <li className="uk-active">
                  <a href="/#">1</a>
                </li>
                <li>
                  <a href="/#">2</a>
                </li>
                <li>
                  <a href="/#">3</a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fas fa-angle-right fa-xs" />
                  </a>
                </li>
              </ul>
              {/* module pagination end */}
            </div>
            <div className="uk-width-expand@m">
              {/* widget content begin */}
              <aside className="uk-margin-medium-bottom">
                <form className="uk-search uk-search-default uk-width-1-1">
                  <a
                    href="/#"
                    className="uk-search-icon-flip"
                    data-uk-search-icon
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="search-icon"
                    >
                      <circle
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.1"
                        cx="9"
                        cy="9"
                        r="7"
                      ></circle>
                      <path
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.1"
                        d="M14,14 L18,18 L14,14 Z"
                      ></path>
                    </svg>
                  </a>
                  <input
                    className="uk-input uk-border-pill"
                    type="search"
                    placeholder="Search here..."
                  />
                </form>
              </aside>
              {/* widget content end */}

              {/* widget content begin */}
              <aside className="uk-margin-medium-bottom">
                <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
                  <h5 className="uk-heading-bullet uk-text-uppercase uk-margin-remove-bottom">
                    Categories
                  </h5>
                  <ul className="uk-list in-widget-category">
                    {categories.map((category, index) => {
                      return (
                        <li key={index}>
                          <a href={category.url}>
                            {category.name}
                            <span className="uk-label uk-label-success uk-border-pill uk-float-right">
                              {category.num}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>
              {/* widget content end */}
              {/* widget content begin */}
              <aside className="uk-margin-medium-bottom">
                <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
                  <h5 className="uk-heading-bullet uk-text-uppercase uk-margin-remove-bottom">
                    Popular
                  </h5>
                  <ul className="uk-list in-widget-popular">
                    {populars.map((post, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="uk-grid-collapse uk-flex uk-flex-middle"
                            data-uk-grid
                          >
                            <div className="uk-width-auto">
                              <img
                                className="uk-border-rounded"
                                src={post.img}
                                alt="blog-thumb"
                                width={74}
                                height={74}
                              />
                            </div>
                            <div className="uk-width-expand uk-margin-left">
                              <a href="/#">
                                {post.text}
                                <span className="uk-article-meta uk-text-small">
                                  <br />
                                  <i className="fas fa-clock fa-sm uk-margin-small-right" />
                                  {post.time}
                                </span>
                              </a>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                    
                  </ul>
                </div>
              </aside>
              {/* widget content end */}
              {/* widget content begin */}
              <aside className="uk-margin-medium-bottom">
                <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
                  <h5 className="uk-heading-bullet uk-text-uppercase uk-margin-remove-bottom">
                    Tags
                  </h5>
                  <div className="uk-margin-top in-widget-tag">
                    {tags.map((tag,index) => {
                      return (
                        <a key={index} href={tag.url}>
                          <span className="uk-label uk-border-pill">{tag.title}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </aside>
              {/* widget content end */}
            </div>
          </div>
        </div>
      </div>
      {/* section content end */}
    </main>
  );
};

export default Blog;
