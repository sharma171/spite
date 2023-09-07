import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = "http://localhost:10005//wp-json/wp/v2/national";
    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [1]);
  console.log("posts", posts);
  return (
    <>
      {posts &&
        posts
          .filter((posts, index) => index < 5)
          .map((post) => {
            console.log(post.title.rendered);
            return (
              <div key={post.id}>
                <h3>{post.title.rendered}</h3>
                <img
                  src={post.better_featured_image.source_url}
                  alt={post.id}
                />
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                ></div>
              </div>
            );
          })}
    </>
  );
};

export default Posts;
