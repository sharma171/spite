import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecentNews = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}posts?categories=1`;
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
      {Object.keys(posts).length ? (
        posts
          .filter((posts, index) => index < 6)
          .map((post) => {
            console.log(post.title.rendered);
            return (
              <li className="side-feed" key={post.id}>
                <Link to={`/latest/${post.slug}`}>
                  <div className="news">
                    <figure>
                      <img
                        src={post.better_featured_image.source_url}
                        className="thumb"
                        alt="{post.id}"
                      />
                    </figure>
                    <h3
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }} className="feeds-headlines"></h3>
                  </div>
                </Link>
              </li>
            );
          })
      ) : (
        <ul className="side-feed-list">
          <li className="side-feed">
            <Link to>
              <div className="news">
                <figure>
                  <div className="facade"></div>
                </figure>
                <h3 className="feeds-headlines">
                  <div className="facade"></div>
                  <div className="facade"></div>
                  <div className="facade"></div>
                </h3>
              </div>
            </Link>
          </li>
          <li className="side-feed">
            <Link to>
              <div className="news">
                <figure>
                  <div className="facade"></div>
                </figure>
                <h3 className="feeds-headlines">
                  <div className="facade"></div>
                  <div className="facade"></div>
                  <div className="facade"></div>
                </h3>
              </div>
            </Link>
          </li>
          <li className="side-feed">
            <Link to>
              <div className="news">
                <figure>
                  <div className="facade"></div>
                </figure>
                <h3 className="feeds-headlines">
                  <div className="facade"></div>
                  <div className="facade"></div>
                  <div className="facade"></div>
                </h3>
              </div>
            </Link>
          </li>
          <li className="side-feed">
            <Link to>
              <div className="news">
                <figure>
                  <div className="facade"></div>
                </figure>
                <h3 className="feeds-headlines">
                  <div className="facade"></div>
                  <div className="facade"></div>
                  <div className="facade"></div>
                </h3>
              </div>
            </Link>
          </li>
          <li className="side-feed">
            <Link to>
              <div className="news">
                <figure>
                  <div className="facade"></div>
                </figure>
                <h3 className="feeds-headlines">
                  <div className="facade"></div>
                  <div className="facade"></div>
                  <div className="facade"></div>
                </h3>
              </div>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};
export default RecentNews;
