import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsTicker = () => {
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
      {posts &&
        posts
          .filter((posts, index) => index < 3)
          .map((post) => {
            console.log(post.title.rendered);
            return (
              <li key={post.id}>
                <Link to className="tick-link">
                  <h2
                  dangerouslySetInnerHTML={{
                    __html: post.title.rendered,
                  }}></h2>
                </Link>
              </li>
            );
          })}
    </>
  );
};
export default NewsTicker;
