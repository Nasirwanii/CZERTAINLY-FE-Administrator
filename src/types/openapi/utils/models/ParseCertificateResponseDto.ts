// tslint:disable
/**
 * CZERTAINLY Utils Service API
 * REST APIs for utility and helper function to work with certificates
 *
 * The version of the OpenAPI document: 1.0.0-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { CertificateData } from "./";

/**
 * @export
 * @interface ParseCertificateResponseDto
 */
export interface ParseCertificateResponseDto {
    /**
     * Type of the certificate parsed
     * @type {string}
     * @memberof ParseCertificateResponseDto
     */
    type: ParseCertificateResponseDtoTypeEnum;
    /**
     * @type {CertificateData}
     * @memberof ParseCertificateResponseDto
     */
    data: CertificateData;
}

/**
 * @export
 * @enum {string}
 */
export enum ParseCertificateResponseDtoTypeEnum {
    X509 = "X509",
    Ssh = "SSH",
}
