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