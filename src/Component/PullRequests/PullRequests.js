import React from "react";
import FormattedDate from "../FormattedDate/FormattedDate";

const PullRequests = props => {
  let pullRequests = props.pullRequests.edges.map(el => {
    let author = el.node.author.login;
    return (
      <div className="info_wrapper">
        <span>{author} &#8226; </span>
        <FormattedDate date={el.node.createdAt} />
        <h4>{el.node.title}</h4>
      </div>
    );
  });
  return pullRequests;
};

export default PullRequests;
