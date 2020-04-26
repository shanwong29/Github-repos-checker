import React from "react";
import "./ProfilePic.css";

const ProfilePic = ({ url, username }) => {
  return (
    <div className="profilepic__wrapper">
      <img src={url} alt={username} className="profilePic" />
    </div>
  );
};

export default ProfilePic;
