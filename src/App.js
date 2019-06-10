import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Shortcuts from './routes/Shortcuts';
import './App.css';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/shortcuts" component={Shortcuts} />
      </Switch>
    </HashRouter>
  );
}
