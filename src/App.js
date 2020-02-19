import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
// import 'materialize-css/dist/js/materialize.min.js';

import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';

import { Header } from './components/header/header.component';

import { GenrePage } from './pages/genre-page/genre-page.component';
import { HomePage } from './pages/home-page/home-page.componnt';
import { ArtistPage } from './pages/artist-page/artist-page.component';

import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className='App'>
      <Header />
      <div className='container-fluid'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/genre/:id' component={GenrePage} />
          <Route exact path='/artist/:id' component={ArtistPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
