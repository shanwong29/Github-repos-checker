import React, { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Login from "../Login/Login";
import classes from "./App.module.css";

const App = () => {
  const accessToken = localStorage.getItem("storedToken") || "";
  const [token, setToken] = useState(accessToken);

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
        <h1 className={classes.app_title}>Repos Checker</h1>
        <Login token={token} setToken={setToken} />
      </div>
    </ApolloProvider>
  );
};

export default App;
