import React from "react";
import "./rightbar.scss";

const Rightbar = () => {
  const userProfilePic =
    "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600";

  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={userProfilePic} alt="no-profilePic" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={userProfilePic} alt="no-profilePic" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activites</span>
          <div className="user">
            <div className="userInfo">
              <img src={userProfilePic} alt="" />
              <p>
                <span>Jane Doe</span>&nbsp; Added a photo.
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={userProfilePic} alt="" />
              <p>
                <span>Jane Doe</span>&nbsp; reacted to a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={userProfilePic} alt="" />
              <p>
                <span>Jane Doe</span>&nbsp; added a picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={userProfilePic} alt="" />
              <p>
                <span>Jane Doe</span>&nbsp; liked a picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                className="onlineUserImg"
                src={userProfilePic}
                alt=""
                style={{ padding: "2px", border: "2px solid #0b89c8" }}
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
