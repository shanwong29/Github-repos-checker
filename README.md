# React app communicating with GraphQL API v4 of GitHub

A react app to query a repo by entering its author and name.

List of pull requests, issues and comments of the chosed repo are shown in tab view. It also include login and a comment filtering function.

You may view it on the deployment page: [Repos Checker](https://shanwong29.github.io/Github-repos-checker/)

The aim of this project is to learn GraphQL (client-side), react-hooks and CSS Module.

## Run Locally for Development

1. Make sure you have [`Docker`](https://www.docker.com/) and [`Docker Compose`](https://docs.docker.com/compose/) installed.

2. Clone the repository:

```
git clone https://github.com/shanwong29/Github-repos-checker.git
```

3. Build Docker image and run the Docker container:

```
cd ./Github-repos-checker
docker-compose up --build
```

The conatiner can be accessed at [http://localhost:5000](http://localhost:5000).

Every edit in the public or src folder will automatically be reflected in the app running in the container.

## Built with

1. React.js
2. React Hooks
3. React-Apollo
4. CSS Module
5. GraphQL
