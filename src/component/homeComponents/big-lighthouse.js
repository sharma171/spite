import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BigLighthouse = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}posts?categories=1`;;
    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {Object.keys(posts).length ? (
        posts
          .filter((posts, index) => index < 3)
          .map((post) => (
            <li className="bg-lhs" key={post.id}>
                <Link to={`/national/${encodeURIComponent(post.slug)}/${post.id}`}>
                  <figure>
                    <img
                      src={post.better_featured_image.source_url}
                      alt="{post.id}"
                      className="thumb"
                    />
                  </figure>
                  <div className="info">
                    <div className="news-info">
                      <span className="category">WORLD</span>
                      <span
                      dangerouslySetInnerHTML={{
                        __html: post.date,
                      }} className="date"></span>
                    </div>
                    <h3
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }} className="lhs-text"></h3>
                  </div>
                </Link>
              </li>
          ))
  ) : (
    <>
    <li className="bg-lhs">
                <Link to="#">
                  <figure>
                    <div className="facade"></div>
                  </figure>
                </Link>
              </li>
    <li className="bg-lhs">
                <Link to="#">
                  <figure>
                    <div className="facade"></div>
                  </figure>
                  
                </Link>
              </li>
    <li className="bg-lhs">
                <Link to="#">
                  <figure>
                    <div className="facade"></div>
                  </figure>
                  
                </Link>
              </li>
              </>
          )}
    </>
  );
};
export default BigLighthouse;
