import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
// import 'materialize-css/dist/js/materialize.min.js';

import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';

import { Header } from './components/header/header.component';
import { GenreCollection } from './components/genre-collection/genre-collection.component';

import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className='App'>
      <Header />
      <div className='container-fluid'>
        <GenreCollection />
      </div>
    </div>
  );
};

export default App;
