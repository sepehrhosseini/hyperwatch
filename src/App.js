import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Header from './containers/Header';
import Home from './containers/Home';
import SearchPage from './containers/SearchPage';
import history from './history'

function App() {
  return (
    <Router history={history}>
        <div className="App">
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/search/:query' exact component={SearchPage} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
