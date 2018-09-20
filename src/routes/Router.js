import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import Shortcuts from './Shortcuts';

export default class Router extends React.Component {
  render() {
    return <HashRouter>
      <Switch>
        <Route path="/shortcuts" component={Shortcuts} />
      </Switch>
    </HashRouter>
  }
}