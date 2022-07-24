# Cluster

Cluster is a forum website made with React JS and consuming my GraphQL Api called <a href="https://github.com/leojuriolli7/cluster-api">Cluster API</a>.

Access Cluster via vercel: https://cluster-leojuriolli7.vercel.app/


Cluster has authorization (register and login) and the ability to create, edit or delete posts and comments.

Cluster also has light and dark mode alongside Portuguese and English translations.

## Tecnologies used in this project:

- ReactJS, Typescript
- Zustand for state management
- Apollo Client for consuming the GraphQL API
- i18Next for translations
- React Hook Form and Yup
- Styled Components with light and dark mode
- React Router

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
