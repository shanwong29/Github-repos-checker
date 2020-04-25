import React from "react";
import classes from "./Login.module.css";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const Login = ({ setIsAuthorized }) => {
  const GET_USER = gql`
    query {
      viewer {
        login
        avatarUrl
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_USER, { errorPolicy: "all" });

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    console.log(error);
    return <p>sth goes wrong</p>;
  }

  let { avatarUrl } = data.viewer;
  let username = data.viewer.login;

  setIsAuthorized(true);
  return <></>;
};

export default Login;
