import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import storyIcon from "../global-images/web-stories-icon.svg";

const WebStories = () => {
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
          .filter((posts, index) => index < 4)
          .map((post) => (
            <li key={post.id}>
                <Link to="/detailed">
                  <figure>
                    <img
                      src={post.better_featured_image.source_url}
                      alt="{post.id}"
                      className="thumb"
                    />
                  </figure>
                  <div className="info">
                    <div className="story-icon">
                      <img src={storyIcon} alt="web-stories" className="icon" />
                    </div>
                    <div className="headlines">
                      <h3
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
                      }}></h3>
                    </div>
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
                    <div className="story-icon">
                      <img src={storyIcon} alt="web-stories" className="icon" />
                    </div>
                    <div className="headlines">
                      <h3><div className="facade"></div></h3>
                    </div>
                  </div>
                </Link>
              </li>
        <li>
                <Link to="#">
                  <figure>
                    <div className="facade"></div>
                  </figure>
                  <div className="info">
                    <div className="story-icon">
                      <img src={storyIcon} alt="web-stories" className="icon" />
                    </div>
                    <div className="headlines">
                      <h3><div className="facade"></div></h3>
                    </div>
                  </div>
                </Link>
              </li>
        <li>
                <Link to="#">
                  <figure>
                    <div className="facade"></div>
                  </figure>
                  <div className="info">
                    <div className="story-icon">
                      <img src={storyIcon} alt="web-stories" className="icon" />
                    </div>
                    <div className="headlines">
                      <h3><div className="facade"></div></h3>
                    </div>
                  </div>
                </Link>
              </li>
        <li>
                <Link to="#">
                  <figure>
                    <div className="facade"></div>
                  </figure>
                  <div className="info">
                    <div className="story-icon">
                      <img src={storyIcon} alt="web-stories" className="icon" />
                    </div>
                    <div className="headlines">
                      <h3><div className="facade"></div></h3>
                    </div>
                  </div>
                </Link>
              </li>
              </>
          )}
    </>
  );
};
export default WebStories;
