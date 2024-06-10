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

import type {
    CertificateFormat,
    CertificateFormatEncoding,
} from './';

/**
 * @export
 * @interface CertificateChainDownloadResponseDto
 */
export interface CertificateChainDownloadResponseDto {
    /**
     * @type {CertificateFormat}
     * @memberof CertificateChainDownloadResponseDto
     */
    format: CertificateFormat;
    /**
     * @type {CertificateFormatEncoding}
     * @memberof CertificateChainDownloadResponseDto
     */
    encoding: CertificateFormatEncoding;
    /**
     * Base64 encoded content in the specified format and encoding
     * @type {string}
     * @memberof CertificateChainDownloadResponseDto
     */
    content: string;
    /**
     * Indicator whether the chain returned is complete
     * @type {boolean}
     * @memberof CertificateChainDownloadResponseDto
     */
    completeChain: boolean;
}


