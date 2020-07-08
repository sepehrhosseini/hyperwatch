import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Header from './containers/Header';
import Home from './containers/Home';
import SearchPage from './containers/SearchPage';
import AuthToken from './components/Auth/Token';
import WatchlistPage from './containers/WatchlistPage';
import Footer from './components/Footer';

import history from './history';
import theme from './styles/theme';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Switch>
            <Route
              path="/search/:query"
              exact
              component={SearchPage}
            />
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
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
