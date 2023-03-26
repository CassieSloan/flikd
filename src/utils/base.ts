/**
 * Get Session Storage item.
 */
export const getSessionItem = (item: string) => sessionStorage.getItem(item);
/**
 * Get Session Storage item.
 */
export const setSessionItem = (key: string, value: string) =>
	sessionStorage.setItem(key, value);
