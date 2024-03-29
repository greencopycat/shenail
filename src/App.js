import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Navbar from './components/Navbar/navbar';
import Helmet from 'react-helmet';
import './App.css';

import Home from './components/Home/home';
import About from './components/About/about';
import Specialty from './components/Specialty/specialty';
import Price from './components/Price/price';
import Gallery from './components/Gallery/gallery';
import Policy from './components/Policy/policy';
import Store from './components/Store/store';
import PageNotFound from './components/PageNotFound/pagenotfound';

function App() {
  return (
    <div className="App">
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Adamina|El+Messiri" rel="stylesheet" />
      </Helmet>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ Home }></Route>
          <Route path="/about" exact component={ About }></Route>
          <Route path="/specialty" exact component={ Specialty }></Route>
          <Route path="/price" exact component={ Price }></Route>
          <Route path="/gallery" exact component={ Gallery }></Route>
          <Route path="/policy" exact component={ Policy }></Route>
          <Route path="/store" exact component={ Store }></Route>
          <Route component={ PageNotFound }></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
