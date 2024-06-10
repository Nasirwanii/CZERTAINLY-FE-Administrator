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
    ObjectPermissionsRequestDto,
} from './';

/**
 * Resources
 * @export
 * @interface ResourcePermissionsRequestDto
 */
export interface ResourcePermissionsRequestDto {
    /**
     * Name of the Resource
     * @type {string}
     * @memberof ResourcePermissionsRequestDto
     */
    name: string;
    /**
     * Allow all actions. True = Yes, False = No
     * @type {boolean}
     * @memberof ResourcePermissionsRequestDto
     */
    allowAllActions: boolean;
    /**
     * List of actions permitted
     * @type {Array<string>}
     * @memberof ResourcePermissionsRequestDto
     */
    actions?: Array<string>;
    /**
     * Object permissions
     * @type {Array<ObjectPermissionsRequestDto>}
     * @memberof ResourcePermissionsRequestDto
     */
    objects?: Array<ObjectPermissionsRequestDto>;
}
