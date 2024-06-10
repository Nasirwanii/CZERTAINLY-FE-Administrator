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
 * @interface DiscoveryDto
 */
export interface DiscoveryDto {
    /**
     * Discovery name
     * @type {string}
     * @memberof DiscoveryDto
     */
    name: string;
    /**
     * List of Attributes for Discovery
     * @type {Array<RequestAttributeDto>}
     * @memberof DiscoveryDto
     */
    attributes: Array<RequestAttributeDto>;
    /**
     * List of Custom Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof DiscoveryDto
     */
    customAttributes?: Array<RequestAttributeDto>;
    /**
     * Discovery Provider UUID
     * @type {string}
     * @memberof DiscoveryDto
     */
    connectorUuid: string;
    /**
     * Discovery Kind
     * @type {string}
     * @memberof DiscoveryDto
     */
    kind: string;
    /**
     * List of triggers to be triggered after the discovery is finished, triggers will be evaluated in given order
     * @type {Array<string>}
     * @memberof DiscoveryDto
     */
    triggers?: Array<string>;
}
