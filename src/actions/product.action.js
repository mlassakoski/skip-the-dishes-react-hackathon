export const LOAD_PRODUCT = "[PRODUCT] Load Product";

export const loadProduct = items => {
	return {
		type: LOAD_PRODUCT,
		items
	}
}
