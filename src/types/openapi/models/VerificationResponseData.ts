// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.12.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Signatures
 * @export
 * @interface VerificationResponseData
 */
export interface VerificationResponseData {
    /**
     * Data to be signed or verified
     * @type {boolean}
     * @memberof VerificationResponseData
     */
    result: boolean;
    /**
     * Custom identifier of the data, that should be the same as in the request, if available
     * @type {string}
     * @memberof VerificationResponseData
     */
    identifier?: string;
    /**
     * Additional details for the result, for example reason, etc.
     * @type {object}
     * @memberof VerificationResponseData
     */
    details?: object;
}
