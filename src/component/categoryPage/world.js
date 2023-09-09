import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../global.css";
import ads from "../global-images/ads.png";
import RecentNews from "../Recentnews";

const WorldListing = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}posts?categories=1162`;
    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("posts", posts);
  return (
    <>
      <div id="Category">
        <section className="category">
          <div className="container">
            <div className="row cat-page">
              <div className="cat-page-items col-md-9">
                <ul className="breadcrumb">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/world/" className="active">
                      International
                    </Link>
                  </li>
                </ul>
                <div className="tabhead">
                  <Link to="#">
                    <h2>International News</h2>
                  </Link>
                </div>
                <ul className="cat-items-list">
                  {Object.keys(posts).length ? (
                    posts
                      .filter((post, index) => index < 10)
                      .map((post) => (
                      <li key={post.id}>
                        <Link to={`/world/${post.slug}?${post.id}`}>
                          <figure>
                            <img
                              src={post.better_featured_image.source_url}
                              alt={post.title.rendered}
                              className="thumb"
                            />
                          </figure>
                          <div className="info">
                            <h3
                            dangerouslySetInnerHTML={{
                              __html: post.title.rendered,
                            }} className="headlines line-clamp-3"></h3>
                            <span
                            dangerouslySetInnerHTML={{
                              __html: post.date,
                            }}></span>
                          </div>
                        </Link>
                      </li>
                      ))
                  ) : (
                    // facade
                  <ul className="cat-items-list">
                  <li>
                    <Link to="#">
                      <figure>
                        <div className="facade"></div>
                      </figure>
                      <div className="info">
                        <h3 className="headlines line-clamp-3">
                          <div className="facade"></div>
                        </h3>
                        <span>
                          <div className="facade"></div>
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <figure>
                        <div className="facade"></div>
                      </figure>
                      <div className="info">
                        <h3 className="headlines line-clamp-3">
                          <div className="facade"></div>
                        </h3>
                        <span>
                          <div className="facade"></div>
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <figure>
                        <div className="facade"></div>
                      </figure>
                      <div className="info">
                        <h3 className="headlines line-clamp-3">
                          <div className="facade"></div>
                        </h3>
                        <span>
                          <div className="facade"></div>
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <figure>
                        <div className="facade"></div>
                      </figure>
                      <div className="info">
                        <h3 className="headlines line-clamp-3">
                          <div className="facade"></div>
                        </h3>
                        <span>
                          <div className="facade"></div>
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <figure>
                        <div className="facade"></div>
                      </figure>
                      <div className="info">
                        <h3 className="headlines line-clamp-3">
                          <div className="facade"></div>
                        </h3>
                        <span>
                          <div className="facade"></div>
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <figure>
                        <div className="facade"></div>
                      </figure>
                      <div className="info">
                        <h3 className="headlines line-clamp-3">
                          <div className="facade"></div>
                        </h3>
                        <span>
                          <div className="facade"></div>
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <figure>
                        <div className="facade"></div>
                      </figure>
                      <div className="info">
                        <h3 className="headlines line-clamp-3">
                          <div className="facade"></div>
                        </h3>
                        <span>
                          <div className="facade"></div>
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <figure>
                        <div className="facade"></div>
                      </figure>
                      <div className="info">
                        <h3 className="headlines line-clamp-3">
                          <div className="facade"></div>
                        </h3>
                        <span>
                          <div className="facade"></div>
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <figure>
                        <div className="facade"></div>
                      </figure>
                      <div className="info">
                        <h3 className="headlines line-clamp-3">
                          <div className="facade"></div>
                        </h3>
                        <span>
                          <div className="facade"></div>
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <figure>
                        <div className="facade"></div>
                      </figure>
                      <div className="info">
                        <h3 className="headlines line-clamp-3">
                          <div className="facade"></div>
                        </h3>
                        <span>
                          <div className="facade"></div>
                        </span>
                      </div>
                    </Link>
                  </li>
                  </ul>
                      )}

                {/* -------- data --------------- */}
                
                </ul>
              </div>
              <div className="sidebar col-md-3">
                <div className="tabhead">
                  <Link to="#">
                    <h2>Recent News</h2>
                  </Link>
                </div>
                <ul className="side-feed-list">
                  <RecentNews />
                  <div className="ads">
                    <img src={ads} alt="ads" srcSet />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default WorldListing;
