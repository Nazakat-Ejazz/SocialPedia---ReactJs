import React, { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const dummyStories = [
    {
      id: 1,
      name: "Jace Hayes",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Jace Hayes",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      id: 3,
      name: "Jace Hayes",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="no-currentUser-profilepic" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>

      {dummyStories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="no-story-img" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
