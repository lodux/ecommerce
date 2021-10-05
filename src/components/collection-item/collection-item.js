import React from 'react';
import './collection-item.scss';
import CustomButton from '../button/button.js'
import {connect} from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions.js'

const CollectionItem=({ item, addItem})=>{
  const { name, price, imageUrl} = item;
	return(
	<div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={()=> addItem(item)} inverted> add to cart </CustomButton>  	
    </div>
	)
}

const mapDispatchToProps= dispatch => ({
  addItem: item =>dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);