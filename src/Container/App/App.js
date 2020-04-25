import React, { useState } from "react";

import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Login from "../../Component/Login/Login";
import ReposInfo from "../ReposInfo/ReposInfo";
import InputForm from "../../Component/InputForm/InputForm";
import classes from "./App.module.css";

const App = () => {
  const accessToken = localStorage.getItem("storedToken") || "";

  const [token, setToken] = useState(accessToken);
  const [tokenInput, setTokenInput] = useState(accessToken);
  const [reposQuery, setReposQuery] = useState("");
  const [reposQueryInput, setReposQueryInput] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const login = (e) => {
    e.preventDefault();
    setToken(tokenInput);
    localStorage.setItem("storedToken", token);
    setTokenInput("");
  };

  const logout = () => {
    localStorage.clear();
    setToken("");
    setReposQuery("");
    setIsAuthorized(false);
  };

  const handleSearchQuery = (e) => {
    e.preventDefault();
    setReposQuery(reposQueryInput);
    setReposQueryInput("");
  };

  const httpLink = new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div className={classes.App}>
        {isAuthorized && (
          <button className={classes.logoutBtn} onClick={logout}>
            Logout
          </button>
        )}
        <h1 className={classes.app_title}>Repos Checker</h1>
        {isAuthorized ? (
          <>
            <InputForm
              onSubmitFn={(e) => handleSearchQuery(e)}
              handleChange={(e) => setReposQueryInput(e.target.value)}
              name="Search Repos"
              type="text"
              value={reposQueryInput}
              placeholder="e.g. nuwave/lighthouse"
              btnDisplay="Search"
            />

            {reposQuery && <ReposInfo reposQuery={reposQuery} />}
          </>
        ) : (
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

            {token && (
              <Login
                token={token}
                setToken={setToken}
                setTokenInput={setTokenInput}
                tokenInput={tokenInput}
                login={login}
                setIsAuthorized={setIsAuthorized}
              />
            )}
          </>
        )}
      </div>
    </ApolloProvider>
  );
};

export default App;
