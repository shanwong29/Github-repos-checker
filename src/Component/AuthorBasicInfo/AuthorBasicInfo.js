import React from "react";
import FormattedDate from "../FormattedDate/FormattedDate";
import ProfilePic from "../ProfilePic/ProfilePic";

const AuthorBasicInfo = ({ author, avatarUrl, timeStamp }) => {
  return (
    <>
      <ProfilePic username={author} url={avatarUrl} />
      <span>{author} &#8226; </span>
      <FormattedDate timeStamp={timeStamp} />
    </>
  );
};

export default AuthorBasicInfo;
