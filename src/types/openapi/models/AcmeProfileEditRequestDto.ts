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
    RequestAttributeDto,
} from './';

/**
 * @export
 * @interface AcmeProfileEditRequestDto
 */
export interface AcmeProfileEditRequestDto {
    /**
     * Description of the ACME Profile
     * @type {string}
     * @memberof AcmeProfileEditRequestDto
     */
    description?: string;
    /**
     * Terms of Service URL
     * @type {string}
     * @memberof AcmeProfileEditRequestDto
     */
    termsOfServiceUrl?: string;
    /**
     * Website URL
     * @type {string}
     * @memberof AcmeProfileEditRequestDto
     */
    websiteUrl?: string;
    /**
     * DNS Resolver IP address
     * @type {string}
     * @memberof AcmeProfileEditRequestDto
     */
    dnsResolverIp?: string;
    /**
     * DNS Resolver port number
     * @type {string}
     * @memberof AcmeProfileEditRequestDto
     */
    dnsResolverPort?: string;
    /**
     * RA Profile UUID
     * @type {string}
     * @memberof AcmeProfileEditRequestDto
     */
    raProfileUuid?: string;
    /**
     * Retry interval for the Orders
     * @type {number}
     * @memberof AcmeProfileEditRequestDto
     */
    retryInterval?: number;
    /**
     * Disable new Orders due to change in Terms of Service
     * @type {boolean}
     * @memberof AcmeProfileEditRequestDto
     */
    termsOfServiceChangeDisable?: boolean;
    /**
     * Changes of Terms of Service URL
     * @type {string}
     * @memberof AcmeProfileEditRequestDto
     */
    termsOfServiceChangeUrl?: string;
    /**
     * Order Validity
     * @type {number}
     * @memberof AcmeProfileEditRequestDto
     */
    validity?: number;
    /**
     * List of Attributes to issue Certificate
     * @type {Array<RequestAttributeDto>}
     * @memberof AcmeProfileEditRequestDto
     */
    issueCertificateAttributes: Array<RequestAttributeDto>;
    /**
     * List of Attributes to revoke Certificate
     * @type {Array<RequestAttributeDto>}
     * @memberof AcmeProfileEditRequestDto
     */
    revokeCertificateAttributes: Array<RequestAttributeDto>;
    /**
     * Require contact information for new Account
     * @type {boolean}
     * @memberof AcmeProfileEditRequestDto
     */
    requireContact?: boolean;
    /**
     * Require new Account to agree on Terms of Service
     * @type {boolean}
     * @memberof AcmeProfileEditRequestDto
     */
    requireTermsOfService?: boolean;
    /**
     * List of Custom Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof AcmeProfileEditRequestDto
     */
    customAttributes?: Array<RequestAttributeDto>;
}
