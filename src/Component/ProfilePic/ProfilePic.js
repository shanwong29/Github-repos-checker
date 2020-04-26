import React from "react";
import "./ProfilePic.css";

const ProfilePic = ({ url, username }) => {
  return <img src={url} alt={username} className="profilePic" />;
};

export default ProfilePic;
