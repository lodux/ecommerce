export const addItemToCart= (cartitems, cartItemToAdd)=> {
	const existingCartItem= cartitems.find(
		cartitem => cartitem.id === cartItemToAdd.id
	);

	if(existingCartItem) {
		return cartitems.map(cartitem =>
			cartitem.id === cartItemToAdd.id
			? {...cartitem, quantity: cartitem.quantity +1}
			: cartitem
			)
	}
	return [...cartitems, {...cartItemToAdd, quantity: 1}]
}

export const removeitemFromCart=(cartitems, cartitemToRemove) => {
	const existingCartItem= cartitems.find(
		cartitem => cartitem.id === cartitemToRemove.id
	)
	if(existingCartItem.quantity === 1) {
		return cartitems.filter(cartitem => cartitem.id !== cartitemToRemove.id)
	}
	return cartitems.map(
		cartitem=>
		cartitem.id === cartitemToRemove.id ?
		{ ...cartitem, quantity: cartitem.quantity-1}
		: cartitem
	)
}