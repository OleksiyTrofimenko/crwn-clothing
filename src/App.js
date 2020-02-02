import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import HomePage from './pages/home-page';
// import ShopPage from './pages/shop-page';
// import CheckoutPage from './pages/checkout-page';
// import SignInUp from './pages/sign-in-up';
import Header from './components/header';
import ErrorBoundary from './components/error-boundary ';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/utils';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCollectionForPreview } from './redux/shop/shop-selectors';
import './App.css';

const HomePage = lazy(() => import('./pages/home-page'));
const ShopPage = lazy(() => import('./pages/shop-page'));
const CheckoutPage = lazy(() => import('./pages/checkout-page'));
const SignInUp = lazy(() => import('./pages/sign-in-up'));

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collections } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);

      // Commit to avoid storing data each time when component refreshed
      // addCollectionAndDocuments('collections', collections.map(collection => ({
      //   title: collection.title,
      //   items: collection.items,
      // })));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<div>...Loading</div>}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/sign-in' render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInUp/>)} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  collections: selectCollectionForPreview(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
