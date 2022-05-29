export interface JSONObject {
	[key: string]: JSONValue;
}

export type JSONValue =
	| string
	| number
	| boolean
	| null
	| undefined
	| JSONValue[]
	| JSONObject;
