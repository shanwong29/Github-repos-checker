import React from "react";
import AuthorBasicInfo from "../AuthorBasicInfo/AuthorBasicInfo";

const PullRequests = ({ pullRequests }) => {
  pullRequests = pullRequests.edges.map((el, index) => {
    let author = el.node.author.login;
    let { avatarUrl } = el.node.author;
    return (
      <div className="info_wrapper" key={index}>
        <AuthorBasicInfo
          author={author}
          avatarUrl={avatarUrl}
          timeStamp={el.node.createdAt}
        />
        <h4>{el.node.title}</h4>
      </div>
    );
  });
  return pullRequests;
};

export default PullRequests;
