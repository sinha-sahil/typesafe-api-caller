
/**
 * @name APIRequest
 * @description Construct API Request which is consumable by the callAPI fn
 */

import { HttpMethod } from "./HttpMethod";
import { JSONObject } from "./JSONObject";

export interface APIRequest {
  url: URL;
  body: JSONObject;
  method: HttpMethod;
  headers: Record<string, string>;
}
