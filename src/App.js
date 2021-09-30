import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/Homepagepage.js';
import ShopPage from './pages/shop/Shop.js';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.js';
import React from 'react';
import Header from './components/header/Header.js';
import { auth, createUserProfileDocument } from './firebase/firebase.ut.js';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'

class App extends React.Component {

  unsubscripeFromAuth=null

 componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscripeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUp />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


const mapDispatchToProps= dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps )(App);
