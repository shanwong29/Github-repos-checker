import React, { useState } from "react";
import classes from "./IssueComments.module.css";
import AuthorBasicInfo from "../AuthorBasicInfo/AuthorBasicInfo";

const IssueComments = ({ comments }) => {
  const [commentQuery, setCommentQuery] = useState("");

  let filteredComments = comments.filter((el) => {
    return el.node.bodyText.includes(commentQuery);
  });

  filteredComments.sort((a, b) => {
    let dateA = new Date(a.node.createdAt);
    let dateB = new Date(b.node.createdAt);
    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  });

  filteredComments = filteredComments.map((el, key) => {
    let author = el.node.author.login;
    let { avatarUrl } = el.node.author;
    return (
      <div className={classes.each_comment_wrapper} key={key}>
        <AuthorBasicInfo
          author={author}
          avatarUrl={avatarUrl}
          timeStamp={el.node.createdAt}
        />

        <p className={classes.comment_text}>{el.node.bodyText}</p>
      </div>
    );
  });

  return comments.length ? (
    <div className={classes.comments_wrapper}>
      <h4>Comments:</h4>
      <label htmlFor="commentQuery">Filter comments by keyword(s): </label>
      <input
        className={classes.search_input}
        name="commentQuery"
        type="text"
        placeholder="type keyword(s) here..."
        value={commentQuery}
        onChange={(event) => setCommentQuery(event.target.value)}
      />
      {filteredComments}
    </div>
  ) : (
    <p className={classes.each_comment_wrapper}>No comments for this issue</p>
  );
};

export default IssueComments;
