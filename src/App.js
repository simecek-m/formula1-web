import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const DRIVERS_QUERY = gql`
  query {
    drivers {
      firstname
      lastname
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(DRIVERS_QUERY);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>loading: {loading}</div>
        <div>error: {error && error.message}</div>
        <div>drivers: {data && data.drivers.map(driver => <div>{driver.firstname} {driver.lastname}</div>)}</div>
      </header>
    </div>
  );
}

export default App;
