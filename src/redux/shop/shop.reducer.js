
import ShopActionTypes from '../../pages/shop/shop.types.js';

const INITIAL_STATE={
	collections: null
}


export const shopReducer = (state = INITIAL_STATE, action)=>{
  	switch(action.type) {
		  case ShopActionTypes.UPDATE_COLLECTIONS:
			  return {
				  ...state,
				  collections: action.payload
			  };
  		default: 
  			return state;
  	}
  }
