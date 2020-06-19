import React from 'react';
import './App.css';

import Sign from './pages/Sign';
import Home from './pages/Home';
import Userdetail from './pages/Userdetail'
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>



      <Switch>
        <Route exact path="/" component={Sign} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/:_id" component={Userdetail} />
        <Route component={Error} />
      </Switch>

    </React.Fragment>
  );
}

export default App;
