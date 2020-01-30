import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient, { gql } from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

apolloClient
  .query({
    query: gql`
    {
      drivers {
        firstname
        lastname
      }
      teams {
        name
        principal
      }
    }`
  })
  .then(result => console.log(result))
  .catch(error => console.log(error))

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
