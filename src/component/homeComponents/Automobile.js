import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Automobile = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}posts?categories=1161`;
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
        .filter((posts, index) => index < 5)
        .map((post) => (
          <li key={post.id}>
              <Link to={`/photo/${post.slug}`}>
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
                  }} className="headlines"></h3>
                </div>
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
                <div className="info">
                  <h3 className="headlines"><div className="facade"></div></h3>
                </div>
              </Link>
            </li>
      <li>
              <Link to="#">
                <figure>
                  <div className="facade"></div>
                </figure>
                <div className="info">
                  <h3 className="headlines"><div className="facade"></div></h3>
                </div>
              </Link>
            </li>
      <li>
              <Link to="#">
                <figure>
                  <div className="facade"></div>
                </figure>
                <div className="info">
                  <h3 className="headlines"><div className="facade"></div></h3>
                </div>
              </Link>
            </li>
      <li>
              <Link to="#">
                <figure>
                  <div className="facade"></div>
                </figure>
                <div className="info">
                  <h3 className="headlines"><div className="facade"></div></h3>
                </div>
              </Link>
            </li>
      <li>
              <Link to="#">
                <figure>
                  <div className="facade"></div>
                </figure>
                <div className="info">
                  <h3 className="headlines"><div className="facade"></div></h3>
                </div>
              </Link>
            </li>
            </>
        )}
  </>
  );
};
export default Automobile;
