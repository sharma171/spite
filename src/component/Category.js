import React from "react";
import { Link } from "react-router-dom";
import "./global.css";
import hero1 from "./global-images/hero1.svg";
import photo1 from "./global-images/photo-gallery.svg";
import photo2 from "./global-images/photo-gallery-two.svg";
import photo3 from "./global-images/photo-gallery-three.svg";
import photo4 from "./global-images/photo-gallery-four.svg";
import photo5 from "./global-images/photo-gallery-five.svg";
import ent1 from "./global-images/entertainment-one.svg";
import ent2 from "./global-images/entertainment-two.svg";
import ent3 from "./global-images/entertainment-three.svg";
import ent4 from "./global-images/entertainment-four.svg";
import ent5 from "./global-images/entertainment-five.svg";
import astro from "./global-images/astro-one.svg";
import astro2 from "./global-images/astro-two.svg";
import astro3 from "./global-images/astro-three.svg";
import astro4 from "./global-images/astro-four.svg";
import astro5 from "./global-images/astro-five.svg";
import ads from "./global-images/ads.png";

const Category = () => {
  return (
    <div id="Category">
      <section className="category">
        <div className="container">
          <div className="row cat-page">
            <div className="cat-page-items col-md-9">
              <ul className="breadcrumb">
                <li>
                  <Link to>Home</Link>
                </li>
                <li>
                  <Link to className="active">
                    National
                  </Link>
                </li>
              </ul>
              <div className="tabhead">
                <Link to="#">
                  <h2>Category News</h2>
                </Link>
              </div>
              <ul className="cat-items-list">
                <li>
                  <Link to="http://">
                    <figure>
                      <img
                        src={hero1}
                        alt="Entertainment-one"
                        className="thumb"
                      />
                    </figure>
                    <div className="info">
                      <h3 className="headlines">
                        What do we know about the US solider in North Korean
                        custody and what might come next?
                      </h3>
                      <span>31-07-2023</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="http://">
                    <figure>
                      <img
                        src={photo1}
                        alt="Entertainment-one"
                        className="thumb"
                      />
                    </figure>
                    <div className="info">
                      <h3 className="headlines">
                        ​Alia Bhatt captures the hearts of her fans in a
                        multicoloured chiffon saree ​
                      </h3>
                      <span>31-07-2023</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="http://">
                    <figure>
                      <img
                        src={photo2}
                        alt="Entertainment-one"
                        className="thumb"
                      />
                    </figure>
                    <div className="info">
                      <h3 className="headlines">
                        Ishita Dutta and Vatsal Sheth welcome baby boy, couple
                      </h3>
                      <span>31-07-2023</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="http://">
                    <figure>
                      <img
                        src={photo3}
                        alt="Entertainment-one"
                        className="thumb"
                      />
                    </figure>
                    <div className="info">
                      <h3 className="headlines">
                        Barbara Palvin marries Dylan Sprouse in a dreamy corset
                      </h3>
                      <span>31-07-2023</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="http://">
                    <figure>
                      <img
                        src={photo4}
                        alt="Entertainment-one"
                        className="thumb"
                      />
                    </figure>
                    <div className="info">
                      <h3 className="headlines">
                        ​Mimi Chakraborty blossoms into a desi Disney princess​
                      </h3>
                      <span>31-07-2023</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="http://">
                    <figure>
                      <img
                        src={photo5}
                        alt="Entertainment-one"
                        className="thumb"
                      />
                    </figure>
                    <div className="info">
                      <h3 className="headlines">
                        Supermodel Taylor Hill marries her best friend
                      </h3>
                      <span>31-07-2023</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="http://">
                    <figure>
                      <img
                        src={ent1}
                        alt="Entertainment-one"
                        className="thumb"
                      />
                    </figure>
                    <div className="info">
                      <h3 className="headlines">
                        It’s the “Barbenheimer” double feature, and it started
                        its life
                      </h3>
                      <span>31-07-2023</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="http://">
                    <figure>
                      <img
                        src={ent2}
                        alt="Entertainment-one"
                        className="thumb"
                      />
                    </figure>
                    <div className="info">
                      <h3 className="headlines">
                        Suriya's first look to be out on July 23; makers confirm
                      </h3>
                      <span>31-07-2023</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="http://">
                    <figure>
                      <img
                        src={ent3}
                        alt="Entertainment-one"
                        className="thumb"
                      />
                    </figure>
                    <div className="info">
                      <h3 className="headlines">
                        Harry Styles is up to his old charismatic tricks as part
                      </h3>
                      <span>31-07-2023</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="http://">
                    <figure>
                      <img
                        src={ent4}
                        alt="Entertainment-one"
                        className="thumb"
                      />
                    </figure>
                    <div className="info">
                      <h3 className="headlines">
                        When hope becomes a four-letter word: What’s missing
                      </h3>
                      <span>31-07-2023</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="http://">
                    <figure>
                      <img
                        src={ent5}
                        alt="Entertainment-one"
                        className="thumb"
                      />
                    </figure>
                    <div className="info">
                      <h3 className="headlines">
                        Jason Aldean’s music video for controversial song pulled
                      </h3>
                      <span>31-07-2023</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="http://">
                    <figure>
                      <img
                        src={ent3}
                        alt="Entertainment-one"
                        className="thumb"
                      />
                    </figure>
                    <div className="info">
                      <h3 className="headlines">
                        ​Mimi Chakraborty blossoms into a desi Disney princess​
                      </h3>
                      <span>31-07-2023</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sidebar col-md-3">
              <div className="tabhead">
                <Link to="#">
                  <h2>Recent News</h2>
                </Link>
              </div>
              <ul className="side-feed-list">
                <li className="side-feed">
                  <Link to>
                    <div className="news">
                      <figure>
                        <img src={astro} className="thumb" alt="feeds" />
                      </figure>
                      <h3 className="feeds-headlines">
                        Microsoft has reportedly laid off more than 1,000
                      </h3>
                    </div>
                  </Link>
                </li>
                <li className="side-feed">
                  <Link to>
                    <div className="news">
                      <figure>
                        <img src={astro2} className="thumb" alt="feeds" />
                      </figure>
                      <h3 className="feeds-headlines">
                        Samsung’s head of MX Business has revealed a key
                      </h3>
                    </div>
                  </Link>
                </li>
                <li className="side-feed">
                  <Link to>
                    <div className="news">
                      <figure>
                        <img src={{ astro3 }} className="thumb" alt="feeds" />
                      </figure>
                      <h3 className="feeds-headlines">
                        Elon Musk announces a new AI company
                      </h3>
                    </div>
                  </Link>
                </li>
                <li className="side-feed">
                  <Link to>
                    <div className="news">
                      <figure>
                        <img src={astro4} className="thumb" alt="feeds" />
                      </figure>
                      <h3 className="feeds-headlines">
                        Foxconn pulls out of $19 billion chipmaking project
                      </h3>
                    </div>
                  </Link>
                </li>
                <li className="side-feed">
                  <Link to>
                    <div className="news">
                      <figure>
                        <img src={astro5} className="thumb" alt="feeds" />
                      </figure>
                      <h3 className="feeds-headlines">
                        Screen Distance feature on iPhones: iOS 17 brings
                        healthy
                      </h3>
                    </div>
                  </Link>
                </li>
                <div className="ads">
                  <img src={ads} alt="ads" srcSet />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
