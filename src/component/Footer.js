import React from "react";
import "./global.css";
import { Link } from "react-router-dom";
import Logo from "./global-images/top-indian-news-logo.svg";
import ffb from "./global-images/soc-icons-fb.svg";
import ftw from "./global-images/soc-icons-twitter.svg";
import finsta from "./global-images/soc-icons-insta.svg";
const Footer = () => {
  return (
    <div id="Footer">
      <section className="footer">
        <div className="container">
          <div className="footer-nav">
            <div className="footer-info col-md-3">
              <div className="brand">
                <Link to="http://">
                  <figure>
                    <img src={Logo} alt="brand-logo" className="brand-logo" />
                  </figure>
                </Link>
                <div className="brand-info">
                  <span className="info">
                    Janbhavna Times Group was established to develop positive
                    thinking in the media world. All the verticals (newspaper,
                    website, youtube channel) of this group are running with
                    this objective.
                  </span>
                  <div className="icon">
                    <Link to>
                      <img src={ffb} alt="soc-icons-fb" className="icon" />
                    </Link>
                    <Link to>
                      <img src={ftw} alt="soc-icons-twitter" className="icon" />
                    </Link>
                    <Link to>
                      <img
                        src={finsta}
                        alt="soc-icons-insta"
                        className="icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-info col-md-3">
              <Link to className="headings">
                Category
              </Link>
              <ul className="links">
                <li>
                  <Link to>Home</Link>
                </li>
                <li>
                  <Link to>National</Link>
                </li>
                <li>
                  <Link to>International</Link>
                </li>
                <li>
                  <Link to>Entertainment</Link>
                </li>
                <li>
                  <Link to>States</Link>
                </li>
                <li>
                  <Link to>Lifestyle</Link>
                </li>
                <li>
                  <Link to>Business</Link>
                </li>
                <li>
                  <Link to>Tech</Link>
                </li>
                <li>
                  <Link to>Astrology</Link>
                </li>
              </ul>
            </div>
            <div className="footer-info col-md-3">
              <Link to className="headings">
                Trending
              </Link>
              <ul className="links">
                <li>
                  <Link to>Home</Link>
                </li>
                <li>
                  <Link to>National</Link>
                </li>
                <li>
                  <Link to>International</Link>
                </li>
                <li>
                  <Link to>Entertainment</Link>
                </li>
                <li>
                  <Link to>States</Link>
                </li>
                <li>
                  <Link to>Lifestyle</Link>
                </li>
                <li>
                  <Link to>Business</Link>
                </li>
                <li>
                  <Link to>Tech</Link>
                </li>
              </ul>
            </div>
            <div className="footer-info col-md-3">
              <div className="newsletter">
                <h3>Subscribe our Newsletter</h3>
                <span>
                  Get Latest news and every updates from Top Indian News Powered
                  by Jan Bhawna Times Group
                </span>
                <form action>
                  <input
                    type="email"
                    placeholder="Enter Your Email ID"
                    name
                    id
                  />
                  <button className="form-button">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">ALL COPYRIGHTS (C) 2023 RESERVED</div>
      </section>
    </div>
  );
};

export default Footer;
