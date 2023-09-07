import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LiveUpdates = () => {
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
          .filter((posts, index) => index < 2)
          .map((post) => (
            <li key={post.id}>
                <Link to={`/liveupdates/${post.slug}`}>
                  <h3 className="headlines">{post.title.rendered}</h3>
                </Link>
              </li>
          ))
      ) : (
        <>
        <li>
                <Link to="#">
                  <h3 className="headlines"><div className="facade"></div></h3>
                </Link>
              </li>
        <li>
                <Link to="#">
                  <h3 className="headlines"><div className="facade"></div></h3>
                </Link>
              </li>
        <li>
                <Link to="#">
                  <h3 className="headlines"><div className="facade"></div></h3>
                </Link>
              </li>
              </>
          )}
          
    </>
  );
};
export default LiveUpdates;
