export const SIGNED_IN = "SIGNED_IN";

export const loagUser = user => {
	return {
		type: SIGNED_IN,
		user
	}
}
