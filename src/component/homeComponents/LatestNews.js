import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}posts?categories=3`;
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
                <Link to={`/latest/${post.slug}`}>
                  <h3 className="headlines">{post.title.rendered}</h3>
                  <div className="news-info">
                    <span className="category">WORLD</span>
                    <span className="date">{post.date}</span>
                  </div>
                </Link>
              </li>
          ))
      ) : (
        <>
        <li>
                <Link to="#">
                  <h3 className="headlines"><div className="facade"></div></h3>
                  <div className="news-info">
                    <span className="category"><div className="facade"></div></span>
                    <span className="date"><div className="facade"></div></span>
                  </div>
                </Link>
              </li>
        <li>
                <Link to="#">
                  <h3 className="headlines"><div className="facade"></div></h3>
                  <div className="news-info">
                    <span className="category"><div className="facade"></div></span>
                    <span className="date"><div className="facade"></div></span>
                  </div>
                </Link>
              </li>
        <li>
                <Link to="#">
                  <h3 className="headlines"><div className="facade"></div></h3>
                  <div className="news-info">
                    <span className="category"><div className="facade"></div></span>
                    <span className="date"><div className="facade"></div></span>
                  </div>
                </Link>
              </li>
        <li>
                <Link to="#">
                  <h3 className="headlines"><div className="facade"></div></h3>
                  <div className="news-info">
                    <span className="category"><div className="facade"></div></span>
                    <span className="date"><div className="facade"></div></span>
                  </div>
                </Link>
              </li>
        <li>
                <Link to="#">
                  <h3 className="headlines"><div className="facade"></div></h3>
                  <div className="news-info">
                    <span className="category"><div className="facade"></div></span>
                    <span className="date"><div className="facade"></div></span>
                  </div>
                </Link>
              </li>
              </>
          )}
    </>
  );
};
export default LatestNews;
