import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from './imgbag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js'
import { createStructuredSelector } from 'reselect'

import './Cart-icon.scss';

const CartIcon =({ toggleCartHidden, itemCount }) =>{
	return(
	<div className='Cart-icon' onClick={toggleCartHidden}>
	<ShoppingIcon className='shopping-icon'/>
	<span className='item-count'>{itemCount}</span>
	</div>
	)

}
const mapStateToProps=createStructuredSelector({
	itemCount: selectCartItemsCount
})

const mapDispatchToProps= dispatch => ({
	toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

export default connect(
	mapStateToProps, 
	mapDispatchToProps)
	(CartIcon);