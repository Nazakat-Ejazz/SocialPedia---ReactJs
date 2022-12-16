import React from "react";
import "./posts.scss";

import Post from "../post/Post";

const Posts = () => {
  const dummyPosts = [
    {
      id: 1,
      userId: 1,
      profilePic:
        "https://cdn.mos.cms.futurecdn.net/VerAQJ7QaambsZS6DFcUBQ-1200-80.jpg",
      name: "Jace Hayes",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Jace Hayes",
      userId: 2,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",

      profilePic:
        "https://cdn.mos.cms.futurecdn.net/VerAQJ7QaambsZS6DFcUBQ-1200-80.jpg",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="posts">
      {dummyPosts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
