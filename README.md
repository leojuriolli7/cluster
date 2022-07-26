# Cluster

Cluster is a forum website made with React JS and consuming my GraphQL API called <a href="https://github.com/leojuriolli7/cluster-api">Cluster API</a>.

Access Cluster: https://cluster-forum.com/

Cluster is also a <a href="https://web.dev/progressive-web-apps/">**PWA**</a> (Progressive Web App) - It can be downloaded as an app like a regular application on the phone or desktop.

The website has **authorization** (register and login) and the ability to **create**, **edit** or **delete** **posts** and **comments**. It also has light and dark mode alongside 🇧🇷Portuguese and 🇺🇸English translations.

## Tecnologies used in this project:

- <a href="https://reactjs.org/">ReactJS</a>, <a href="https://www.typescriptlang.org/">Typescript</a>
- <a href="https://github.com/pmndrs/zustand">Zustand</a> for state management
- <a href="https://www.apollographql.com/apollo-client">Apollo Client</a> for consuming the GraphQL API
- <a href="https://react.i18next.com/">i18Next</a> for translations
- <a href="https://react-hook-form.com/">React Hook Form</a> and <a href="https://github.com/jquense/yup">Yup</a>
- <a href="https://styled-components.com/">Styled Components</a> with light and dark mode
- <a href="https://reactrouter.com/">React Router</a> for routing

## Installation
Clone the project:

```bash
git clone git@github.com:leojuriolli7/cluster.git
```

Go to the project directory:

```bash
cd cluster
```

Install the project dependencies:

```bash
yarn
```

## Usage
Define the API endpoint on .env (clone and run <a href="https://github.com/leojuriolli7/cluster-api">Cluster API</a> on localhost:3000, for example)
```bash
REACT_APP_API_URL=localhost:3000/graphql
```


Start the application:

```bash
yarn start
```
