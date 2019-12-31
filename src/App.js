import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page';
import SignInUp from './pages/sign-in-up';
import Header from './components/header';
import { auth } from './firebase/utils';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
