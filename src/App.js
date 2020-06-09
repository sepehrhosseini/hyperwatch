import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Home from './containers/Home';
import SearchPage from './containers/SearchPage';
import AuthToken from './components/Auth/Token';
import WatchlistPage from './containers/WatchlistPage';

import history from './history';

import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/search/:query" exact component={SearchPage} />
          <Route path="/auth/token" exact>
            <AuthToken />
          </Route>
          <Route path="/watchlist" exact>
            <WatchlistPage />
          </Route>

          <Route path="/:titleType?/:titleId?" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
