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
    ConditionItemRequestDto,
    ConditionType,
    Resource,
} from './';

/**
 * @export
 * @interface ConditionRequestDto
 */
export interface ConditionRequestDto {
    /**
     * Name of the condition
     * @type {string}
     * @memberof ConditionRequestDto
     */
    name: string;
    /**
     * Description of the condition
     * @type {string}
     * @memberof ConditionRequestDto
     */
    description?: string;
    /**
     * @type {ConditionType}
     * @memberof ConditionRequestDto
     */
    type: ConditionType;
    /**
     * @type {Resource}
     * @memberof ConditionRequestDto
     */
    resource: Resource;
    /**
     * List of the condition items to add to condition
     * @type {Array<ConditionItemRequestDto>}
     * @memberof ConditionRequestDto
     */
    items: Array<ConditionItemRequestDto>;
}


