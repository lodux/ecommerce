import React from 'react';
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'


import CustomButton from '../button/button.js'
import CartItem from '../Cartitem/cartitem.js'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'
import { CartDropdownContainer, CartItemsContainer, CartdropdownButton, EmptyMessageContainer  } from '../Cartdropdown/cart-dropdown.styles';

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
    {
    	cartItems.length ?
    	cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      	))
    :
    (
	<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
    ) 
	} 
    </CartItemsContainer>
    <CustomButton onClick={() =>{
    	history.push('/checkout');
    	dispatch(toggleCartHidden())}
	}>
	GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hidden: toggleCartHidden
});


export default  withRouter(connect(mapStateToProps)(CartDropDown));