import React, { useState } from "react";
import classes from "./Login.module.css";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ReposInfo from "../ReposInfo/ReposInfo";
import InputForm from "../../Component/InputForm/InputForm";
import ProfilePic from "../../Component/ProfilePic/ProfilePic";

const Login = ({ token, setToken }) => {
  const [reposQuery, setReposQuery] = useState("");

  const GET_USER = gql`
    query {
      viewer {
        login
        avatarUrl
      }
    }
  `;

  const login = (e) => {
    e.preventDefault();
    setToken(e.target.token.value);
    localStorage.setItem("storedToken", e.target.token.value);
  };

  const logout = () => {
    localStorage.clear();
    setToken("");
    setReposQuery("");
  };

  const { loading, error, data } = useQuery(
    GET_USER,
    { skip: !token },
    { errorPolicy: "all" }
  );

  let outhStatus;
  if (loading) {
    outhStatus = "loading...";
  }
  if (error) {
    outhStatus =
      "Something goes wrong. Make sure the given / stored token is valid";
  }

  if (data) {
    let { avatarUrl } = data.viewer;
    let username = data.viewer.login;
    return (
      <>
        <button className={classes.logoutBtn} onClick={logout}>
          <ProfilePic url={avatarUrl} username={username} /> <p>Logout</p>
        </button>
        {<ReposInfo reposQuery={reposQuery} setReposQuery={setReposQuery} />}
      </>
    );
  }

  return (
    <>
      <InputForm
        onSubmitFn={(e) => {
          login(e);
        }}
        name="token"
        type="password"
        placeholder="Paste your GitHub token"
        btnDisplay="Login"
        variant="middle"
      />
      <p className={classes.requestStatus}>{outhStatus}</p>
    </>
  );
};

export default Login;
