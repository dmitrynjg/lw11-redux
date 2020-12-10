import {
	isEmail, isName, isRole, isStatus,
} from '../libs/validate';

const initialState = {
	usersList: [

	],
};

const usersTableReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_USER':
			if (isEmail(action?.newUser?.email)
				&& isName(action?.newUser?.name)
				&& isRole(action?.newUser?.role)
				&& isStatus(action?.newUser?.status)) {
				return {
					...state,
					usersList: [
						...state.usersList,
						{
							...action.newUser,
							id: state.usersList.length > 0 ? state.usersList[state.usersList.length - 1].id + 1 : 1,
							isSelected: false,
						},
					],
				};
			}
			return state;

		case 'DELETE_USER':
			return { ...state, usersList: state.usersList.filter((user) => user.id !== action.id) };
		case 'SELECT_USER':
			return {
				...state,
				usersList: state.usersList.map((user) => {
					if (user.isSelected && user.id !== action.id) {
						return { ...user, isSelected: false };
					}
					if (user.id === action.id) {
						return { ...user, isSelected: !user.selected };
					}
					return user;
				}),
			};
		case 'EDIT_USER':
			if (action.user) {
				if (isEmail(action?.user?.email)
					&& isName(action?.user?.name)
					&& isRole(action?.user?.role)
					&& isStatus(action?.user?.status)) {
					return {
						...state,
						usersList: state.usersList.map((user) => {
							if (user.id === action.user.id) {
								return action.user;
							}
							return user;
						}),
					};
				}
			}
			return state;
		default:
			return state;
	}
};

export default usersTableReducer;
