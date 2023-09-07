import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../global.css";
import { Link } from "react-router-dom";
import RecentNews from "../Recentnews";

const LatestSingle = () => {
  const { slug } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}posts/?slug=${slug}`;
    axios
      .get(url)
      .then((res) => {
        console.log("res", res);
        setPost(res.data[0]);
      })
      .catch((err) => {
        console.log("error", err.message);
      });
  }, [slug]);
  return (
    <div>
      <div>
        <div id="Detailed">
          <section className="category">
            <div className="container">
              <div className="row cat-page">
                <div className="cat-page-items col-md-9">
                  <ul className="breadcrumb">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      {Object.keys(post).length ? (
                        <Link to={`/world/${post.slug}`} className="active">
                          {post.slug}
                        </Link>
                      ) : (
                        <div className="facade"></div>
                      )}
                    </li>
                  </ul>
                  {Object.keys(post).length ? (
                    <div className="detailed">
                      <h1 className="story-title">{post.title.rendered}</h1>
                      <h2 className="subhead">{post.acf.subheading}</h2>
                      <figure className="featured">
                        <img
                          src={post.better_featured_image.source_url}
                          alt={post.slug}
                          className="featured-image"
                        />
                      </figure>
                      <span className="custom-caption">
                        {post.better_featured_image.caption}
                      </span>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.content.rendered,
                        }}
                      ></p>
                      <div className="tags-box">
                        <span className="tag-head">Tags : </span>
                        <ul>
                          <li>
                            <Link to>Airport</Link>
                          </li>
                          <li>
                            <Link to>Items</Link>
                          </li>
                          <li>
                            <Link to>Knives</Link>
                          </li>
                          <li>
                            <Link to>Airport</Link>
                          </li>
                          <li>
                            <Link to>Items</Link>
                          </li>
                          <li>
                            <Link to>Knives</Link>
                          </li>
                          <li>
                            <Link to>Airport</Link>
                          </li>
                          <li>
                            <Link to>Items</Link>
                          </li>
                          <li>
                            <Link to>Knives</Link>
                          </li>
                          <li>
                            <Link to>Airport</Link>
                          </li>
                          <li>
                            <Link to>Items</Link>
                          </li>
                          <li>
                            <Link to>Knives</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    // facade
                    <div className="detailed">
                      <h1 className="story-title">
                        <div className="facade"></div>
                      </h1>
                      <h2 className="subhead">
                        <div className="facade"></div>
                      </h2>
                      <figure className="featured">
                        <div className="facade"></div>
                      </figure>
                      <span className="custom-caption">
                        <div className="facade"></div>
                      </span>
                      <p>
                        <div className="facade"></div>
                      </p>
                      <div className="tags-box">
                        <span className="tag-head">Tags : </span>
                        <ul>
                          <li>
                            <Link to>
                              <div className="facade"></div>
                            </Link>
                          </li>
                          <li>
                            <Link to>
                              <div className="facade"></div>
                            </Link>
                          </li>
                          <li>
                            <Link to>
                              <div className="facade"></div>
                            </Link>
                          </li>
                          <li>
                            <Link to>
                              <div className="facade"></div>
                            </Link>
                          </li>
                          <li>
                            <Link to>
                              <div className="facade"></div>
                            </Link>
                          </li>
                          <li>
                            <Link to>
                              <div className="facade"></div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="sidebar col-md-3">
                  <div className="tabhead">
                    <Link to="#">
                      <h2>Recent News</h2>
                    </Link>
                  </div>

                  <ul className="side-feed-list">
                    <RecentNews />
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LatestSingle;
