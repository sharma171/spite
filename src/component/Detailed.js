import React from "react";
import "./global.css";
import { Link } from "react-router-dom";
import astro1 from "./global-images/astro-one.svg";
import astro2 from "./global-images/astro-two.svg";
import astro3 from "./global-images/astro-three.svg";
import astro4 from "./global-images/astro-four.svg";
import astro5 from "./global-images/astro-five.svg";
import ads from "./global-images/ads.png";

const Detailed = () => {
  return (
    <div id="Detailed">
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
                    Detailed Page...
                  </Link>
                </li>
              </ul>
              <div className="detailed">
                <h1 className="story-title">
                  Cannot justify what happened in Manipur by saying it happens
                  elsewhere: CJI Chandrachud
                </h1>
                <h2 className="subhead">
                  The Supreme Court questioned as to why the police took 14 days
                  to register an FIR when the incident came to light on May 4.
                  It also sought details of the rehabilitation and aid packages
                  for those hit by the violence
                </h2>
                <figure className="featured">
                  <img
                    src="https://images.indianexpress.com/2023/07/Manipur-Violence-Feat.jpg?w=640"
                    alt="featured-image"
                    className="featured-image"
                  />
                </figure>
                <span className="custom-caption">
                  Manipur has been hit by ethnic violence since early May,
                  leading to the death of over 140 people. (Photo: AP)
                </span>
                <p>
                  Chief Justice of India D Y Chandrachud, who is heading a
                  Supreme Court bench hearing a batch of petitions related to{" "}
                  <Link to="#">
                    <strong>violence in Manipur,</strong>
                  </Link>{" "}
                  said that whatever happened in the northeastern state cannot
                  be justified by{" "}
                  <Link to="#">
                    <strong>
                      saying that it happens elsewhere in the country.
                    </strong>
                  </Link>
                </p>
                <p>
                  “We are dealing with something on unprecedented magnitude of
                  violence against women in communal and sectarian violence. But
                  this cannot be gainsaid that crimes are happening against
                  woman and in Bengal also but here the case is different. Tell
                  me what is the suggestion from you in Manipur case? We cannot
                  justify what happened in Manipur by saying that this happened
                  elsewhere,” the Chief Justice said.
                </p>
                <p>
                  “We are dealing with something on unprecedented magnitude of
                  violence against women in communal and sectarian violence. But
                  this cannot be gainsaid that crimes are happening against
                  woman and in Bengal also but here the case is different. Tell
                  me what is the suggestion from you in Manipur case? We cannot
                  justify what happened in Manipur by saying that this happened
                  elsewhere,” the Chief Justice said.
                </p>
                <div className="tags-box">
                  <span className="tag-head">Tags : </span>
                  <ul>
                    <li>
                      <Link to>Airport</Link>
                    </li>
                    <li>
                      <Link to>Items</Link>
                    </li>
                    <li>
                      <Link to>Knives</Link>
                    </li>
                    <li>
                      <Link to>Airport</Link>
                    </li>
                    <li>
                      <Link to>Items</Link>
                    </li>
                    <li>
                      <Link to>Knives</Link>
                    </li>
                    <li>
                      <Link to>Airport</Link>
                    </li>
                    <li>
                      <Link to>Items</Link>
                    </li>
                    <li>
                      <Link to>Knives</Link>
                    </li>
                    <li>
                      <Link to>Airport</Link>
                    </li>
                    <li>
                      <Link to>Items</Link>
                    </li>
                    <li>
                      <Link to>Knives</Link>
                    </li>
                  </ul>
                </div>
              </div>
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
                        <img src={astro1} className="thumb" alt="feeds" />
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
                        <img src={astro3} className="thumb" alt="feeds" />
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

export default Detailed;
