import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Homepage from './pages/homepage/Homepagepage.js';
import ShopPage from './pages/shop/Shop.js';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.js';
import React from 'react';
import Header from './components/header/Header.js';
import { auth } from './firebase/firebase.ut.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    };
  }
  unsubscripeFromAuth=null
  componentDidMount() {
    this.unsubscripeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscripeFromAuth();
  }


  render(){
    return(
      <div className="App">
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInSignUp}/>
          </Switch>
        </div>
    )  
  } 
}

export default App;
