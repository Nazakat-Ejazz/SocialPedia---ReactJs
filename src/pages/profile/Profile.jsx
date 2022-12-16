import React from "react";
import "./profile.scss";

import Posts from "../../components/posts/Posts";

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="cover"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          className="profilePic"
          alt=""
        />
      </div>

      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>

            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>

            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>

            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="large" />
            </a>

            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Jace Hayes</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>

              <div className="item">
                <LanguageIcon />
                <span>react.skill</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
