import _ from 'lodash';

/**
 * Get Session Storage item.
 */
export const getSessionItem = (item: string) => sessionStorage?.getItem(item);
/**
 * Get Session Storage item.
 */
export const setSessionItem = (key: string, value: string) => sessionStorage.setItem(key, value);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SetObjPropertyProps = { obj: Record<string, any>; path: string; value: any };
/**
 * Set object property.
 */
export const setNestedObj = ({ obj, path, value }: SetObjPropertyProps) => {
	_.set(obj, path, value);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any

type JSONValue = string | number | boolean | JSONObject | JSONArray;

export interface JSONObject {
	[x: string]: JSONValue;
}
type JSONArray = Array<JSONValue>;
