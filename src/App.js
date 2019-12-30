import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to='/'> Home </Link>
      <Link to='/shop'> ShopPage </Link>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
