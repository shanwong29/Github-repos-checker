import React, { useState, Fragment } from "react";
import Comments from "../Comments/Comments";
import AuthorBasicInfo from "../AuthorBasicInfo/AuthorBasicInfo";
import classes from "./Issue.module.css";

const Issue = ({ issue }) => {
  const [activeIssue, setActiveIssue] = useState("");

  let issueDisplay = issue.edges.map((el, index) => {
    let comments = el.node.comments.edges;
    let author = el.node.author.login;
    let { avatarUrl } = el.node.author;
    let issueText = el.node.bodyText;

    return (
      <Fragment key={index}>
        <div
          className={classes.issue}
          onClick={() => {
            if (index === activeIssue) {
              setActiveIssue(null);
            } else {
              setActiveIssue(index);
            }
          }}
        >
          <AuthorBasicInfo
            author={author}
            avatarUrl={avatarUrl}
            timeStamp={el.node.createdAt}
          />

          <h4>{el.node.title}</h4>

          {activeIssue === index && (
            <p className={classes.issue_text}>{issueText}</p>
          )}
        </div>

        {activeIssue === index && (
          <Comments comments={comments} issueAuthor={author} />
        )}
      </Fragment>
    );
  });
  return <>{issueDisplay}</>;
};

export default Issue;
