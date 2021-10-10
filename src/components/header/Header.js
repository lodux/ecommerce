import React from 'react';
import { Link } from 'react-router-dom';
import Carticon from '../Carticon/Cart-icon.js'
import { auth } from '../../firebase/firebase.ut';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropDown from '../Cartdropdown/cart-dropdown.js'
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer , OptionLink } from './Header.styles.js';
import './Header.scss';

const Header = ({ currentUser,  hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <Carticon/>
    </OptionsContainer>
    {
      hidden ? null
      : (
      <CartDropDown/>
      )
      
    }
    
  </HeaderContainer>
);

const mapStateProps=createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateProps)(Header);