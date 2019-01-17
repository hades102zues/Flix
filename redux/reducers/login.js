import { STORE_QUERY_DETAILS } from "../actions/actionTypes";

const initialState = {
	email: "",
	token: ""
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case STORE_QUERY_DETAILS:
			return {
				...state,
				email: action.userEmail,
				token: action.token
			};

		default:
			return state;
	}
};

export default reducer;
