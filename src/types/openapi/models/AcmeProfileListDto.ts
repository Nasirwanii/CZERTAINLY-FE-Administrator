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
    SimplifiedRaProfileDto,
} from './';

/**
 * @export
 * @interface AcmeProfileListDto
 */
export interface AcmeProfileListDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof AcmeProfileListDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof AcmeProfileListDto
     */
    name: string;
    /**
     * Enabled flag - true = enabled; false = disabled
     * @type {boolean}
     * @memberof AcmeProfileListDto
     */
    enabled: boolean;
    /**
     * ACME Profile description
     * @type {string}
     * @memberof AcmeProfileListDto
     */
    description?: string;
    /**
     * @type {SimplifiedRaProfileDto}
     * @memberof AcmeProfileListDto
     */
    raProfile?: SimplifiedRaProfileDto;
    /**
     * URL of the ACME Directory
     * @type {string}
     * @memberof AcmeProfileListDto
     */
    directoryUrl?: string;
}
