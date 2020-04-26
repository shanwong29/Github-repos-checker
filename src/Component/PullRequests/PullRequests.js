import React from "react";
import FormattedDate from "../FormattedDate/FormattedDate";
import ProfilePic from "../ProfilePic/ProfilePic";

const PullRequests = ({ pullRequests }) => {
  pullRequests = pullRequests.edges.map((el, index) => {
    let author = el.node.author.login;
    let { avatarUrl } = el.node.author;
    return (
      <div className="info_wrapper" key={index}>
        <ProfilePic username={author} url={avatarUrl} />
        <span>{author} &#8226; </span>
        <FormattedDate timeStamp={el.node.createdAt} />
        <h4>{el.node.title}</h4>
      </div>
    );
  });
  return pullRequests;
};

export default PullRequests;
