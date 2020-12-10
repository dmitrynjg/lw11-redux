export const addUser = (newUser) => ({
	type: 'ADD_USER',
	newUser,
});

export const deleteUser = (id) => ({
	type: 'DELETE_USER',
	id,
});

export const selectUser = (id) => ({
	type: 'SELECT_USER',
	id,
});

export const editUser = (user) => ({
	type: 'EDIT_USER',
	user,
});
