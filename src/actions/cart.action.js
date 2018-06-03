export const ADD_CART       = "[CART] Add Cart";
export const REMOVE_CART    = "[CART] Remove Cart";
export const CLEAR_CART     = "[CART] Clear Cart";

export const addCart = item => {
	return {
		type: ADD_CART,
		item
	}
}

export const removeCart = item => {
	return {
		type: REMOVE_CART,
		item
	}
}

export const clearCart = () => {
	return {
		type: CLEAR_CART
	}
}
