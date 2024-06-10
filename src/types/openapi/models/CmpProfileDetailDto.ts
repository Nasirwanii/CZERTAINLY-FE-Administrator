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
    CertificateDto,
    ProtectionMethod,
    ResponseAttributeDto,
    SimplifiedRaProfileDto,
} from './';

/**
 * @export
 * @interface CmpProfileDetailDto
 */
export interface CmpProfileDetailDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof CmpProfileDetailDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof CmpProfileDetailDto
     */
    name: string;
    /**
     * Enabled flag - true = enabled; false = disabled
     * @type {boolean}
     * @memberof CmpProfileDetailDto
     */
    enabled: boolean;
    /**
     * Variant of the CMP Profile
     * @type {string}
     * @memberof CmpProfileDetailDto
     */
    variant: CmpProfileDetailDtoVariantEnum;
    /**
     * CMP Profile description
     * @type {string}
     * @memberof CmpProfileDetailDto
     */
    description?: string;
    /**
     * @type {SimplifiedRaProfileDto}
     * @memberof CmpProfileDetailDto
     */
    raProfile?: SimplifiedRaProfileDto;
    /**
     * CMP URL
     * @type {string}
     * @memberof CmpProfileDetailDto
     */
    cmpUrl?: string;
    /**
     * List of Attributes to issue a Certificate for the associated RA Profile
     * @type {Array<ResponseAttributeDto>}
     * @memberof CmpProfileDetailDto
     */
    issueCertificateAttributes?: Array<ResponseAttributeDto>;
    /**
     * List of Attributes to revoke a Certificate for the associated RA Profile
     * @type {Array<ResponseAttributeDto>}
     * @memberof CmpProfileDetailDto
     */
    revokeCertificateAttributes?: Array<ResponseAttributeDto>;
    /**
     * List of Custom Attributes for CMP Profile
     * @type {Array<ResponseAttributeDto>}
     * @memberof CmpProfileDetailDto
     */
    customAttributes?: Array<ResponseAttributeDto>;
    /**
     * @type {ProtectionMethod}
     * @memberof CmpProfileDetailDto
     */
    requestProtectionMethod: ProtectionMethod;
    /**
     * @type {ProtectionMethod}
     * @memberof CmpProfileDetailDto
     */
    responseProtectionMethod: ProtectionMethod;
    /**
     * @type {CertificateDto}
     * @memberof CmpProfileDetailDto
     */
    signingCertificate?: CertificateDto;
}

/**
 * @export
 * @enum {string}
 */
export enum CmpProfileDetailDtoVariantEnum {
    V2 = 'v2',
    V23gpp = 'v2_3gpp',
    V3 = 'v3'
}

