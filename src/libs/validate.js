export function isRole(role) {
	return ['admin', 'user'].indexOf(role) !== -1;
}
export function isName(value) {
	return new RegExp('[a-zA-Zа-яА-Я]{1,}').test(value);
}
export function isStatus(value) {
	return ['Активный', 'Неактивный'].indexOf(value) !== -1;
}
export function isEmail(value) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/.test(value);
}
