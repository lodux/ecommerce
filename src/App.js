import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Homepage from './pages/homepage/Homepagepage.js';
import ShopPage from './pages/shop/Shop.js';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.js';
import React from 'react';
import Header from './components/header/Header.js';
import { auth, createUserProfileDocument } from './firebase/firebase.ut.js';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    };
  }
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


  render(){
    return(
      <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInSignUp}/>
          </Switch>
        </div>
    )  
  } 
}

const mapDispatchToProps= dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps )(App);
