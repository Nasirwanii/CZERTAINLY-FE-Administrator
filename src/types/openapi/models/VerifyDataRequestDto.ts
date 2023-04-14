// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.7.2-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { RequestAttributeDto, SignatureRequestData } from "./";

/**
 * @export
 * @interface VerifyDataRequestDto
 */
export interface VerifyDataRequestDto {
    /**
     * List of cipher Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof VerifyDataRequestDto
     */
    signatureAttributes: Array<RequestAttributeDto>;
    /**
     * Data to be signed
     * @type {Array<SignatureRequestData>}
     * @memberof VerifyDataRequestDto
     */
    data?: Array<SignatureRequestData>;
    /**
     * Signatures to verify
     * @type {Array<SignatureRequestData>}
     * @memberof VerifyDataRequestDto
     */
    signatures: Array<SignatureRequestData>;
}
