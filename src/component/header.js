import React from "react";
import { Link } from "react-router-dom";
import "./global.css";
import NewsTicker from "./homeComponents/NewsTicker";
import menuIcon from "./global-images/menu-icon.svg";
import searchIcon from "./global-images/search-icon.svg";
const Header = () => {
  return (
    <div id="header">
      <div className="header">
        <div className="top-header">
          <div className="container">
            <div className="top-hd">
              <div className="top-sm-links">
                <Link to className="sm-links">
                  Jan Bhawna Times
                </Link>
                <Link to className="sm-links">
                  Bharatvarsh
                </Link>
                <Link to className="sm-links">
                  Punjabi Story Line
                </Link>
                <Link to className="sm-links">
                  Jan Bhawna Times Telugu
                </Link>
                <Link to className="sm-links">
                  The India Daily Live
                </Link>
              </div>
              <div className="top-sm-links">
                <Link to className="soc-links">
                  <img src="./images/facebook.svg" alt="" />
                </Link>
                <Link to className="soc-links">
                  <img src="./images/twitter.svg" alt="" />
                </Link>
                <Link to className="soc-links">
                  <img src="./images/instagram." alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mid-header">
          <div className="container">
            <div className="mid-hd">
              <div className="menu">
                <img src={searchIcon} alt="search-icon" className="menu-icon" />
              </div>
              <div className="brand">
                <Link to="/" className="brand-logo">
                  <img
                    src="https://images.topindiannews.com/wp-content/uploads/2023/07/17151500/TWITTER-BANNER-1500x500-px.jpg"
                    alt=""
                    className="logo"
                  />
                </Link>
              </div>
              <ul className="mid-nav">
                <li className="nav-links">
                  <Link to="/" className="links">
                    HOME
                  </Link>
                </li>
                <li className="nav-links">
                  <Link to="/national/" className="links">
                    NATIONAL
                  </Link>
                </li>
                <li className="nav-links">
                  <Link to="/world/" className="links">
                    INTERNATIONAL
                  </Link>
                </li>
                <li className="nav-links">
                  <Link to="/photo/" className="links">
                    PHOTO
                  </Link>
                </li>
                <li className="nav-links">
                  <Link to="/technology/" className="links">
                    TECHNOLOGY
                  </Link>
                </li>
                <li className="nav-links">
                  <Link to="/national/" className="links">
                    NATIONAL
                  </Link>
                </li>
                <li className="nav-links">
                  <Link to="/world/" className="links">
                    INTERNATIONAL
                  </Link>
                </li>
                <li className="nav-links">
                  <Link to="/national/" className="links">
                    NATIONAL
                  </Link>
                </li>
              </ul>
              <div className="menu" id="menu-button">
                <img src={menuIcon} alt="menu-icon" className="menu-icon" />
              </div>
            </div>
          </div>
        </div>
        <div id="menu-popup" className="side-menu">
          <div id="close" className="close">
            <div className="icon">+</div>
          </div>
          <ul className="links">
            <li>
              <Link to="#" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" target="_self">
                India
              </Link>
            </li>
            <li>
              <Link to="/international" target="_self">
                International
              </Link>
            </li>
            <li>
              <Link to="/sports" target="_self">
                Khel
              </Link>
            </li>
          </ul>
        </div>
        <div className="news-ticker">
          <div className="container">
            <div className="ticker-inner">
              <div className="tick-header">
                <span>Trending</span>
              </div>
              <ul className="tick-content">
                <NewsTicker />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
