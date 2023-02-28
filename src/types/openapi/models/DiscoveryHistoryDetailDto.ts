// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 1.6.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    DiscoveryStatus,
    MetadataResponseDto,
    ResponseAttributeDto,
} from './';

/**
 * @export
 * @interface DiscoveryHistoryDetailDto
 */
export interface DiscoveryHistoryDetailDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof DiscoveryHistoryDetailDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof DiscoveryHistoryDetailDto
     */
    name: string;
    /**
     * Discovery Kind
     * @type {string}
     * @memberof DiscoveryHistoryDetailDto
     */
    kind: string;
    /**
     * @type {DiscoveryStatus}
     * @memberof DiscoveryHistoryDetailDto
     */
    status: DiscoveryStatus;
    /**
     * Failure/Success Messages
     * @type {string}
     * @memberof DiscoveryHistoryDetailDto
     */
    message?: string;
    /**
     * Date and time when Discovery started
     * @type {string}
     * @memberof DiscoveryHistoryDetailDto
     */
    startTime?: string | null;
    /**
     * Date and time when Discovery finished
     * @type {string}
     * @memberof DiscoveryHistoryDetailDto
     */
    endTime?: string | null;
    /**
     * Number of certificates that are discovered
     * @type {number}
     * @memberof DiscoveryHistoryDetailDto
     */
    totalCertificatesDiscovered?: number;
    /**
     * UUID of the Discovery Provider
     * @type {string}
     * @memberof DiscoveryHistoryDetailDto
     */
    connectorUuid: string;
    /**
     * Name of the Discovery Provider
     * @type {string}
     * @memberof DiscoveryHistoryDetailDto
     */
    connectorName: string;
    /**
     * List of Discovery Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof DiscoveryHistoryDetailDto
     */
    attributes: Array<ResponseAttributeDto>;
    /**
     * List of Custom Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof DiscoveryHistoryDetailDto
     */
    customAttributes?: Array<ResponseAttributeDto>;
    /**
     * Metadata of the Discovery
     * @type {Array<MetadataResponseDto>}
     * @memberof DiscoveryHistoryDetailDto
     */
    metadata?: Array<MetadataResponseDto>;
}


