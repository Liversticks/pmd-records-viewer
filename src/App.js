import React from 'react';
import useFetch from 'use-http';
// import PropTypes from 'prop-types';
import Header from './Components/Header';
import Footer from './Components/Footer';
import splitID from './Components/SplitID';
// import logo from './logo.svg';
import './App.css';

function App() {
  const { loading, error, data = [] } = useFetch('/api/records', {}, []);

  return (
    <div className="App">
      {error && <div>Error: {error.message}</div>}
      {loading && <div>Loading...</div>}
      { data.length > 0 && (
        <div>
          <Header gameList={data.map((x) => splitID(x.id))} />
          {data.map((e) => <p>{e.Title}</p>)}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
