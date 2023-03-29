/**
 * Get Session Storage item.
 */
export const getSessionItem = (item: string) => sessionStorage.getItem(item);
/**
 * Get Session Storage item.
 */
export const setSessionItem = (key: string, value: string) => sessionStorage.setItem(key, value);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 * Set object property.
 */
export const setProperty = (obj: Record<string, any>, path: string, value: any) => {
	const [head, ...rest] = path.split('.');

	return {
		...obj,
		[head]: rest.length ? setProperty(obj[head], rest.join('.'), value) : value,
	};
};
