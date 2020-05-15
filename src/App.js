import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Home from './containers/Home';
import SearchPage from './containers/SearchPage';
import AuthToken from './components/Auth/Token';

import history from './history';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/search/:query" exact component={SearchPage} />
          <Route path="/auth/token" exact component={AuthToken} />

          <Route path="/:title_type?/:title_id?" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
