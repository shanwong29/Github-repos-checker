# React app communicating with GraphQL API v4 of GitHub

A react app to query a repo by entering its author and name.

List of pull requests, issues and comments of the chosed repo will be shown in tab view.

It also include a comment filtering function.

## Installing

1. Make sure you have [`node`](https://nodejs.org/) and [`npm`](https://www.npmjs.com/get-npm) installed.
2. Clone the repository and install the dependencies:

```
git clone https://github.com/shanwong29/Github-repos-checker.git
cd ./Github-repos-checker
npm install
```

## Running

Run the app in development mode by the following command:

```
npm start
```

The UI will be shown in your browser at [http://localhost:3000](http://localhost:3000).

## More to do:

1. **Authentication for Github Outh login**

   The Github token login function is currently just storing the token as a local storage, and using it later to make queries.

   To avoid an invalid Github token, authentication logic is needed to be added in the login function.

## Built with

1. React.js
2. React Hooks
3. React-Apollo
4. CSS Module
5. GraphQL
