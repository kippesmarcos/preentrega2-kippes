import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={ItemListContainer} />
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
