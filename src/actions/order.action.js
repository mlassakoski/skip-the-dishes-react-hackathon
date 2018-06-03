export const ADD_ORDER      = "[ORDER] Add Order";
export const REMOVE_ORDER   = "[ORDER] Remove Order";

export const addOrder = item => {
	return {
		type: ADD_ORDER,
		item
	}
}

export const removeOrder = item => {
	return {
		type: REMOVE_ORDER,
		item
	}
}
