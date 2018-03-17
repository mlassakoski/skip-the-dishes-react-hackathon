export const SIGNED_IN = "SIGNED_IN";
export const PRODUCT = "PRODUCT";
export const CART = "CART";
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const CLEAR_CART = "CLEAR_CART";
export const ADD_ORDER = "ADD_ORDER";
export const REMOVE_ORDER = "REMOVE_ORDER";

export function loagUser(user) {
	return {
		type: SIGNED_IN,
		user
	}
}

export function product(items) {
	return {
		type: PRODUCT,
		items
	}
}

export function addcart(item) {
	return {
		type: ADD_CART,
		item
	}
}

export function removecart(item) {
	return {
		type: REMOVE_CART,
		item
	}
}

export function clearCart() {
	return {
		type: CLEAR_CART
	}
}

export function addOrder(item) {
	return {
		type: ADD_ORDER,
		item
	}
}

export function removeOrder(item) {
	return {
		type: REMOVE_ORDER,
		item
	}
}