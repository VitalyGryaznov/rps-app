import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageContent from './HomePage';
import Result from './Result';
import Header from './Header';
import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/">
          <HomePageContent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
