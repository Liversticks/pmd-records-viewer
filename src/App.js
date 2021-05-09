import React from 'react';
import useFetch from 'use-http';
// import logo from './logo.svg';
import './App.css';

function App() {
  const { loading, error, data = [] } = useFetch('/api/records', {}, []);

  return (
    <div className="App">
      {error && <div>Error: {error.message}</div>}
      {loading && <div>Loading...</div>}
      { data.length > 0 && data.map((e) => <p>{e}</p>) }
    </div>
  );
}

export default App;
