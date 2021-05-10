import React from 'react';
import useFetch from 'use-http';
import Footer from './Components/Footer';
// import logo from './logo.svg';
import './App.css';

function App() {
  const { loading, error, data = [] } = useFetch('/api/records', {}, []);

  return (
    <div className="App">
      {error && <div>Error: {error.message}</div>}
      {loading && <div>Loading...</div>}
      { data.length > 0 && data.map((e) => <p>{e.Title}</p>) }
      <Footer />
    </div>
  );
}

export default App;
