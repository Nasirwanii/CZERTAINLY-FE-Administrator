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
    ComplianceGroupsResponseDto,
} from './';

/**
 * @export
 * @interface ComplianceGroupsListResponseDto
 */
export interface ComplianceGroupsListResponseDto {
    /**
     * Name of the Compliance Provider
     * @type {string}
     * @memberof ComplianceGroupsListResponseDto
     */
    connectorName: string;
    /**
     * UUID of the Compliance Provider
     * @type {string}
     * @memberof ComplianceGroupsListResponseDto
     */
    connectorUuid: string;
    /**
     * Kind of the Compliance Provider
     * @type {string}
     * @memberof ComplianceGroupsListResponseDto
     */
    kind: string;
    /**
     * Groups from Compliance Provider
     * @type {Array<ComplianceGroupsResponseDto>}
     * @memberof ComplianceGroupsListResponseDto
     */
    groups: Array<ComplianceGroupsResponseDto>;
}
