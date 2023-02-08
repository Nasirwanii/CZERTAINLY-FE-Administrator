// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 1.5.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders } from '../runtime';
import type {
    AuthenticationServiceExceptionDto,
    BaseAttributeDto,
    BulkOperationResponse,
    CertificateComplianceCheckDto,
    CertificateDetailDto,
    CertificateEventHistoryDto,
    CertificateResponseDto,
    CertificateUpdateObjectsDto,
    CertificateValidationDto,
    ErrorMessageDto,
    LocationDto,
    MultipleCertificateObjectUpdateDto,
    RemoveCertificateDto,
    SearchFieldDataDto,
    SearchRequestDto,
    UploadCertificateRequestDto,
    UuidDto,
} from '../models';

export interface BulkDeleteCertificateRequest {
    removeCertificateDto: RemoveCertificateDto;
}

export interface BulkUpdateCertificateObjectsRequest {
    multipleCertificateObjectUpdateDto: MultipleCertificateObjectUpdateDto;
}

export interface CheckRequest {
    uuid: string;
}

export interface CheckCertificatesComplianceRequest {
    certificateComplianceCheckDto: CertificateComplianceCheckDto;
}

export interface DeleteCertificateRequest {
    uuid: string;
}

export interface GetCertificateRequest {
    uuid: string;
}

export interface GetCertificateEventHistoryRequest {
    uuid: string;
}

export interface GetCertificateValidationResultRequest {
    uuid: string;
}

export interface ListCertificateLocationsRequest {
    certificateUuid: string;
}

export interface ListCertificatesRequest {
    searchRequestDto: SearchRequestDto;
}

export interface UpdateCertificateObjectsRequest {
    uuid: string;
    certificateUpdateObjectsDto: CertificateUpdateObjectsDto;
}

export interface UploadRequest {
    uploadCertificateRequestDto: UploadCertificateRequestDto;
}

/**
 * no description
 */
export class CertificateInventoryApi extends BaseAPI {

    /**
     * In this operation, when the list of Certificate UUIDs are provided and the filter is left as null or undefined, then the change will be applied only to the list of Certificate UUIDs provided. When the filter is provided in the request, the list of UUIDs will be ignored and the change will be applied for the all the certificates that matches the filter criteria. To apply this change for all the Certificates in the inventory, provide an empty array \"[]\" for the value of \"filters\" in the request body
     * Delete multiple certificates
     */
    bulkDeleteCertificate({ removeCertificateDto }: BulkDeleteCertificateRequest): Observable<BulkOperationResponse>
    bulkDeleteCertificate({ removeCertificateDto }: BulkDeleteCertificateRequest, opts?: OperationOpts): Observable<AjaxResponse<BulkOperationResponse>>
    bulkDeleteCertificate({ removeCertificateDto }: BulkDeleteCertificateRequest, opts?: OperationOpts): Observable<BulkOperationResponse | AjaxResponse<BulkOperationResponse>> {
        throwIfNullOrUndefined(removeCertificateDto, 'removeCertificateDto', 'bulkDeleteCertificate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<BulkOperationResponse>({
            url: '/v1/certificates/delete',
            method: 'POST',
            headers,
            body: removeCertificateDto,
        }, opts?.responseOpts);
    };

    /**
     * In this operation, when the list of Certificate UUIDs are provided and the filter is left as null or undefined, then the change will be applied only to the list of Certificate UUIDs provided. When the filter is provided in the request, the list of UUIDs will be ignored and the change will be applied for the all the certificates that matches the filter criteria. To apply this change for all the Certificates in the inventory, provide an empty array \"[]\" for the value of \"filters\" in the request body
     * Update RA Profile, Group, Owner for multiple Certificates
     */
    bulkUpdateCertificateObjects({ multipleCertificateObjectUpdateDto }: BulkUpdateCertificateObjectsRequest): Observable<void>
    bulkUpdateCertificateObjects({ multipleCertificateObjectUpdateDto }: BulkUpdateCertificateObjectsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    bulkUpdateCertificateObjects({ multipleCertificateObjectUpdateDto }: BulkUpdateCertificateObjectsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(multipleCertificateObjectUpdateDto, 'multipleCertificateObjectUpdateDto', 'bulkUpdateCertificateObjects');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/certificates',
            method: 'PATCH',
            headers,
            body: multipleCertificateObjectUpdateDto,
        }, opts?.responseOpts);
    };

    /**
     * Initiate Certificate validation
     */
    check({ uuid }: CheckRequest): Observable<void>
    check({ uuid }: CheckRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    check({ uuid }: CheckRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'check');

        return this.request<void>({
            url: '/v1/certificates/{uuid}/validate'.replace('{uuid}', encodeURI(uuid)),
            method: 'PUT',
        }, opts?.responseOpts);
    };

    /**
     * Initiate Certificate Compliance Check
     */
    checkCertificatesCompliance({ certificateComplianceCheckDto }: CheckCertificatesComplianceRequest): Observable<void>
    checkCertificatesCompliance({ certificateComplianceCheckDto }: CheckCertificatesComplianceRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    checkCertificatesCompliance({ certificateComplianceCheckDto }: CheckCertificatesComplianceRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(certificateComplianceCheckDto, 'certificateComplianceCheckDto', 'checkCertificatesCompliance');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/certificates/compliance',
            method: 'POST',
            headers,
            body: certificateComplianceCheckDto,
        }, opts?.responseOpts);
    };

    /**
     * Delete a certificate
     */
    deleteCertificate({ uuid }: DeleteCertificateRequest): Observable<void>
    deleteCertificate({ uuid }: DeleteCertificateRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteCertificate({ uuid }: DeleteCertificateRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'deleteCertificate');

        return this.request<void>({
            url: '/v1/certificates/{uuid}'.replace('{uuid}', encodeURI(uuid)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     * Get Certificate Details
     */
    getCertificate({ uuid }: GetCertificateRequest): Observable<CertificateDetailDto>
    getCertificate({ uuid }: GetCertificateRequest, opts?: OperationOpts): Observable<AjaxResponse<CertificateDetailDto>>
    getCertificate({ uuid }: GetCertificateRequest, opts?: OperationOpts): Observable<CertificateDetailDto | AjaxResponse<CertificateDetailDto>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'getCertificate');

        return this.request<CertificateDetailDto>({
            url: '/v1/certificates/{uuid}'.replace('{uuid}', encodeURI(uuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get Certificate event history
     */
    getCertificateEventHistory({ uuid }: GetCertificateEventHistoryRequest): Observable<Array<CertificateEventHistoryDto>>
    getCertificateEventHistory({ uuid }: GetCertificateEventHistoryRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<CertificateEventHistoryDto>>>
    getCertificateEventHistory({ uuid }: GetCertificateEventHistoryRequest, opts?: OperationOpts): Observable<Array<CertificateEventHistoryDto> | AjaxResponse<Array<CertificateEventHistoryDto>>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'getCertificateEventHistory');

        return this.request<Array<CertificateEventHistoryDto>>({
            url: '/v1/certificates/{uuid}/history'.replace('{uuid}', encodeURI(uuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get Certificate Validation Result
     */
    getCertificateValidationResult({ uuid }: GetCertificateValidationResultRequest): Observable<{ [key: string]: CertificateValidationDto; }>
    getCertificateValidationResult({ uuid }: GetCertificateValidationResultRequest, opts?: OperationOpts): Observable<AjaxResponse<{ [key: string]: CertificateValidationDto; }>>
    getCertificateValidationResult({ uuid }: GetCertificateValidationResultRequest, opts?: OperationOpts): Observable<{ [key: string]: CertificateValidationDto; } | AjaxResponse<{ [key: string]: CertificateValidationDto; }>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'getCertificateValidationResult');

        return this.request<{ [key: string]: CertificateValidationDto; }>({
            url: '/v1/certificates/{uuid}/validate'.replace('{uuid}', encodeURI(uuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get CSR Generation Attributes
     */
    getCsrGenerationAttributes(): Observable<Array<BaseAttributeDto>>
    getCsrGenerationAttributes(opts?: OperationOpts): Observable<AjaxResponse<Array<BaseAttributeDto>>>
    getCsrGenerationAttributes(opts?: OperationOpts): Observable<Array<BaseAttributeDto> | AjaxResponse<Array<BaseAttributeDto>>> {
        return this.request<Array<BaseAttributeDto>>({
            url: '/v1/certificates/csr/attributes',
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get Certificate searchable fields information
     */
    getSearchableFieldInformation1(): Observable<Array<SearchFieldDataDto>>
    getSearchableFieldInformation1(opts?: OperationOpts): Observable<AjaxResponse<Array<SearchFieldDataDto>>>
    getSearchableFieldInformation1(opts?: OperationOpts): Observable<Array<SearchFieldDataDto> | AjaxResponse<Array<SearchFieldDataDto>>> {
        return this.request<Array<SearchFieldDataDto>>({
            url: '/v1/certificates/search',
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * List of available Locations for the Certificate
     */
    listCertificateLocations({ certificateUuid }: ListCertificateLocationsRequest): Observable<Array<LocationDto>>
    listCertificateLocations({ certificateUuid }: ListCertificateLocationsRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<LocationDto>>>
    listCertificateLocations({ certificateUuid }: ListCertificateLocationsRequest, opts?: OperationOpts): Observable<Array<LocationDto> | AjaxResponse<Array<LocationDto>>> {
        throwIfNullOrUndefined(certificateUuid, 'certificateUuid', 'listCertificateLocations');

        return this.request<Array<LocationDto>>({
            url: '/v1/certificates/{certificateUuid}/locations'.replace('{certificateUuid}', encodeURI(certificateUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * List Certificates
     */
    listCertificates({ searchRequestDto }: ListCertificatesRequest): Observable<CertificateResponseDto>
    listCertificates({ searchRequestDto }: ListCertificatesRequest, opts?: OperationOpts): Observable<AjaxResponse<CertificateResponseDto>>
    listCertificates({ searchRequestDto }: ListCertificatesRequest, opts?: OperationOpts): Observable<CertificateResponseDto | AjaxResponse<CertificateResponseDto>> {
        throwIfNullOrUndefined(searchRequestDto, 'searchRequestDto', 'listCertificates');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<CertificateResponseDto>({
            url: '/v1/certificates',
            method: 'POST',
            headers,
            body: searchRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Update Certificate Objects
     */
    updateCertificateObjects({ uuid, certificateUpdateObjectsDto }: UpdateCertificateObjectsRequest): Observable<void>
    updateCertificateObjects({ uuid, certificateUpdateObjectsDto }: UpdateCertificateObjectsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    updateCertificateObjects({ uuid, certificateUpdateObjectsDto }: UpdateCertificateObjectsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'updateCertificateObjects');
        throwIfNullOrUndefined(certificateUpdateObjectsDto, 'certificateUpdateObjectsDto', 'updateCertificateObjects');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/certificates/{uuid}'.replace('{uuid}', encodeURI(uuid)),
            method: 'PATCH',
            headers,
            body: certificateUpdateObjectsDto,
        }, opts?.responseOpts);
    };

    /**
     * Upload a new Certificate
     */
    upload({ uploadCertificateRequestDto }: UploadRequest): Observable<UuidDto>
    upload({ uploadCertificateRequestDto }: UploadRequest, opts?: OperationOpts): Observable<AjaxResponse<UuidDto>>
    upload({ uploadCertificateRequestDto }: UploadRequest, opts?: OperationOpts): Observable<UuidDto | AjaxResponse<UuidDto>> {
        throwIfNullOrUndefined(uploadCertificateRequestDto, 'uploadCertificateRequestDto', 'upload');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<UuidDto>({
            url: '/v1/certificates/upload',
            method: 'POST',
            headers,
            body: uploadCertificateRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Validate Certificates of Status Unknown
     */
    validateAllCertificate(): Observable<void>
    validateAllCertificate(opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    validateAllCertificate(opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        return this.request<void>({
            url: '/v1/certificates/validate',
            method: 'PUT',
        }, opts?.responseOpts);
    };

}
