import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Technology = () => {
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
            <li className="side-feed" key={post.id}>
                <Link to={`/technology/${post.slug}`}>
                  <div className="news">
                    <figure>
                      <img
                        src={post.better_featured_image.source_url}
                        className="thumb"
                        alt={post.title.rendered}
                      />
                    </figure>
                    <h3
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }} className="feeds-headlines"></h3>
                  </div>
                  
                </Link>
              </li>
          ))
      ) : (
        <>
        <li className="side-feed">
                <Link to="#">
                  <div className="news">
                    <figure>
                      <div className="facade"></div>
                    </figure>
                    <h3 className="feeds-headlines"><div className="facade"></div></h3>
                  </div>
                </Link>
              </li>
        <li className="side-feed">
                <Link to="#">
                  <div className="news">
                    <figure>
                      <div className="facade"></div>
                    </figure>
                    <h3 className="feeds-headlines"><div className="facade"></div></h3>
                  </div>
                </Link>
              </li>
        <li className="side-feed">
                <Link to="#">
                  <div className="news">
                    <figure>
                      <div className="facade"></div>
                    </figure>
                    <h3 className="feeds-headlines"><div className="facade"></div></h3>
                  </div>
                </Link>
              </li>
        <li className="side-feed">
                <Link to="#">
                  <div className="news">
                    <figure>
                      <div className="facade"></div>
                    </figure>
                    <h3 className="feeds-headlines"><div className="facade"></div></h3>
                  </div>
                </Link>
              </li>
        <li className="side-feed">
                <Link to="#">
                  <div className="news">
                    <figure>
                      <div className="facade"></div>
                    </figure>
                    <h3 className="feeds-headlines"><div className="facade"></div></h3>
                  </div>
                </Link>
              </li>
              </>
          )}
    </>
  );
};
export default Technology;
