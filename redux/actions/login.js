import { STORE_QUERY_DETAILS } from "./actionTypes";

export const storeQueryDetails = details => {
	return {
		type: STORE_QUERY_DETAILS,
		token: details.token,
		userEmail: details.email
	};
};
