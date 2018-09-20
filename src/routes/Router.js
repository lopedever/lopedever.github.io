import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Shortcuts from './Shortcuts';

export default class Router extends React.Component {
  render() {
    return <BrowserRouter>
      <Switch>
        <Route path="/shortcuts" component={Shortcuts} />
      </Switch>
    </BrowserRouter>
  }
}