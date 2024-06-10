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
} from './';

/**
 * @export
 * @interface UpdateConditionRequestDto
 */
export interface UpdateConditionRequestDto {
    /**
     * Description of the condition
     * @type {string}
     * @memberof UpdateConditionRequestDto
     */
    description?: string;
    /**
     * List of the condition items to add to condition
     * @type {Array<ConditionItemRequestDto>}
     * @memberof UpdateConditionRequestDto
     */
    items: Array<ConditionItemRequestDto>;
}
