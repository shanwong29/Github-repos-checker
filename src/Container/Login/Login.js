import React, { useState } from "react";
import classes from "./Login.module.css";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ReposInfo from "../ReposInfo/ReposInfo";
import InputForm from "../../Component/InputForm/InputForm";

const Login = ({ token, setToken }) => {
  const [tokenInput, setTokenInput] = useState("");
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
    setToken(tokenInput);
    localStorage.setItem("storedToken", tokenInput);
    setTokenInput("");
  };

  const logout = () => {
    localStorage.clear();
    setToken("");
    setReposQuery("");
  };

  const { loading, error, data } = useQuery(GET_USER, { errorPolicy: "all" });

  let outhMsg;
  if (loading) {
    outhMsg = "loading...";
  }
  if (error) {
    outhMsg = "Sth goes wrong. Make sure the given / stored token is valid";
  }

  console.log("Hello");

  if (data) {
    let { avatarUrl } = data.viewer;
    let username = data.viewer.login;
    return (
      <>
        <button className={classes.logoutBtn} onClick={logout}>
          Logout
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
        handleChange={(e) => setTokenInput(e.target.value)}
        name="token"
        type="password"
        value={tokenInput}
        placeholder="Paste your GitHub token"
        btnDisplay="Login"
      />
      {token && <p>{outhMsg}</p>}
    </>
  );
};

export default Login;
