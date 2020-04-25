import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import PullRequests from "../../Component/PullRequests/PullRequests";
import Issue from "../../Component/Issue/Issue";
import InputForm from "../../Component/InputForm/InputForm";
import classes from "./ReposInfo.module.css";

const GET_REPOS = gql`
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      owner {
        login
      }
      pullRequests(last: 5, orderBy: { field: CREATED_AT, direction: ASC }) {
        edges {
          node {
            author {
              login
            }
            title
            createdAt
          }
        }
      }
      openIssues: issues(
        states: OPEN
        last: 5
        orderBy: { field: CREATED_AT, direction: ASC }
      ) {
        edges {
          node {
            ...issueInfo
          }
        }
      }
      closedIssues: issues(
        states: CLOSED
        last: 5
        orderBy: { field: CREATED_AT, direction: ASC }
      ) {
        edges {
          node {
            ...issueInfo
          }
        }
      }
    }
  }

  fragment issueInfo on Issue {
    title
    createdAt
    bodyText
    author {
      login
    }
    comments(last: 5) {
      edges {
        node {
          author {
            login
          }
          createdAt
          bodyText
        }
      }
    }
  }
`;

const ReposInfo = ({ reposQuery, setReposQuery }) => {
  const [currentTab, setCurrentTab] = useState("pullRequests");

  let owner;
  let name;
  if (reposQuery) {
    reposQuery = reposQuery.split("/");
    owner = reposQuery[0] && reposQuery[0].trim();
    name = reposQuery[1] && reposQuery[1].trim();
  }
  const handleSearchQuery = (e) => {
    e.preventDefault();
    let queryStr = e.target.queryInput.value;
    setReposQuery(queryStr);
  };

  const { loading, error, data } = useQuery(
    GET_REPOS,
    {
      variables: { owner, name },
    },
    { errorPolicy: "all" }
  );

  let queryStatus;

  if (loading) {
    queryStatus = "loading...";
  }

  if (error) {
    queryStatus = error.graphQLErrors[0].message;
  }

  let pullRequests;
  let openIssues;
  let closedIssues;

  if (data) {
    openIssues = data.repository.openIssues;
    closedIssues = data.repository.closedIssues;
    pullRequests = data.repository.pullRequests;
  }

  return (
    <div className={classes.reposInfo}>
      <InputForm
        onSubmitFn={(e) => handleSearchQuery(e)}
        name="queryInput"
        label="Search Repos: "
        type="text"
        placeholder="e.g. nuwave/lighthouse"
        btnDisplay="Search"
      />
      {reposQuery && queryStatus && <p>{queryStatus}</p>}
      {data && (
        <>
          <h1>{data.repository.name}</h1>
          <div className={classes.tap_wrapper}>
            <h4
              className={`${classes.tap} ${
                currentTab === "pullRequests" && classes.active_tab
              }`}
              onClick={() => {
                setCurrentTab("pullRequests");
              }}
            >
              Pull Requests
            </h4>
            <h4
              className={`${classes.tap} ${
                currentTab === "openIssues" && classes.active_tab
              }`}
              onClick={() => {
                setCurrentTab("openIssues");
              }}
            >
              Open Issues
            </h4>
            <h4
              className={`${classes.tap} ${
                currentTab === "closedIssues" && classes.active_tab
              }`}
              onClick={() => {
                setCurrentTab("closedIssues");
              }}
            >
              Closed Issues
            </h4>
          </div>
          {currentTab === "pullRequests" && (
            <PullRequests pullRequests={pullRequests} />
          )}
          {currentTab === "openIssues" && <Issue issue={openIssues} />}
          {currentTab === "closedIssues" && <Issue issue={closedIssues} />}
        </>
      )}
    </div>
  );
};

export default ReposInfo;
