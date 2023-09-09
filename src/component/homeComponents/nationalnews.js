import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NationalNews = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}posts?categories=788`;
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
          .filter((posts, index) => index < 6)
          .map((post) => (
            <li key={post.id}>
                <Link to={`/national/${encodeURIComponent(post.slug)}/${post.id}`}>
                  <figure>
                    <img
                      src={post.better_featured_image.source_url}
                      className="thumb"
                      alt={post.slug}
                    />
                  </figure>
                  <h3
                  dangerouslySetInnerHTML={{
                    __html: post.title.rendered,
                  }} className="news-headlines"></h3>
                </Link>
              </li>
          ))
      ) : (
        <>
        <li>
                <Link to="#">
                  <figure>
                  <div className="facade"></div>
                  </figure>
                </Link>
              </li>
        <li>
                <Link to="#">
                  <figure>
                  <div className="facade"></div>
                  </figure>
                </Link>
              </li>
        <li>
                <Link to="#">
                  <figure>
                  <div className="facade"></div>
                  </figure>
                </Link>
              </li>
        <li>
                <Link to="#">
                  <figure>
                  <div className="facade"></div>
                  </figure>
                </Link>
              </li>
        <li>
                <Link to="#">
                  <figure>
                  <div className="facade"></div>
                  </figure>
                </Link>
              </li>
        <li>
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
export default NationalNews;
