import React, { useState, Fragment } from "react";
import Comments from "../Comments/Comments";
import AuthorBasicInfo from "../AuthorBasicInfo/AuthorBasicInfo";
import classes from "./Issue.module.css";

const Issue = ({ issue }) => {
  const [activeIssue, setActiveIssue] = useState("");

  issue = issue.edges.map((el, issueIndex) => {
    let comments = el.node.comments.edges;
    let author = el.node.author.login;
    let { avatarUrl } = el.node.author;
    let issueText = el.node.bodyText;

    return (
      <Fragment key={issueIndex}>
        <div
          className={`info_wrapper ${classes.issue}`}
          onClick={() => {
            if (issueIndex === activeIssue) {
              setActiveIssue(null);
            } else {
              setActiveIssue(issueIndex);
            }
          }}
        >
          <AuthorBasicInfo
            author={author}
            avatarUrl={avatarUrl}
            timeStamp={el.node.createdAt}
          />

          <h4>{el.node.title}</h4>

          {activeIssue === issueIndex && (
            <p className={classes.issue_text}>{issueText}</p>
          )}
        </div>

        {activeIssue === issueIndex && (
          <Comments comments={comments} issueAuthor={author} />
        )}
      </Fragment>
    );
  });
  return <>{issue}</>;
};

export default Issue;
