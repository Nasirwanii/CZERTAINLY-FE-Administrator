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
    AttributeConstraintType,
    RangeAttributeConstraintData,
} from './';

/**
 * @export
 * @interface RangeAttributeConstraint
 */
export interface RangeAttributeConstraint {
    /**
     * Description of the constraint
     * @type {string}
     * @memberof RangeAttributeConstraint
     */
    description?: string;
    /**
     * Error message to be displayed for wrong data
     * @type {string}
     * @memberof RangeAttributeConstraint
     */
    errorMessage?: string;
    /**
     * @type {AttributeConstraintType}
     * @memberof RangeAttributeConstraint
     */
    type: AttributeConstraintType;
    /**
     * @type {RangeAttributeConstraintData}
     * @memberof RangeAttributeConstraint
     */
    data?: RangeAttributeConstraintData;
}


