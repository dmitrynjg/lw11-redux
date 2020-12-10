const initialState = {
	isOpen: false,
};
const modalWindowReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_MODAL_WINDOW':
			return { ...state, isOpen: !state.isOpen };
		default:
			return state;
	}
};

export default modalWindowReducer;
