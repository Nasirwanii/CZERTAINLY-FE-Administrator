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

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders } from '../runtime';
import type {
    AuthenticationServiceExceptionDto,
    BaseAttributeDto,
    CipherDataRequestDto,
    DecryptDataResponseDto,
    EncryptDataResponseDto,
    ErrorMessageDto,
    KeyAlgorithm,
    RandomDataRequestDto,
    RandomDataResponseDto,
    SignDataRequestDto,
    SignDataResponseDto,
    VerifyDataRequestDto,
    VerifyDataResponseDto,
} from '../models';

export interface DecryptDataRequest {
    tokenInstanceUuid: string;
    tokenProfileUuid: string;
    uuid: string;
    keyItemUuid: string;
    cipherDataRequestDto: CipherDataRequestDto;
}

export interface EncryptDataRequest {
    tokenInstanceUuid: string;
    tokenProfileUuid: string;
    uuid: string;
    keyItemUuid: string;
    cipherDataRequestDto: CipherDataRequestDto;
}

export interface ListCipherAttributesRequest {
    tokenInstanceUuid: string;
    tokenProfileUuid: string;
    uuid: string;
    keyItemUuid: string;
    algorithm: KeyAlgorithm;
}

export interface ListRandomAttributesRequest {
    tokenInstanceUuid: string;
}

export interface ListSignatureAttributesRequest {
    tokenInstanceUuid: string;
    tokenProfileUuid: string;
    uuid: string;
    keyItemUuid: string;
    algorithm: KeyAlgorithm;
}

export interface RandomDataRequest {
    tokenInstanceUuid: string;
    randomDataRequestDto: RandomDataRequestDto;
}

export interface SignDataRequest {
    tokenInstanceUuid: string;
    tokenProfileUuid: string;
    uuid: string;
    keyItemUuid: string;
    signDataRequestDto: SignDataRequestDto;
}

export interface VerifyDataRequest {
    tokenInstanceUuid: string;
    tokenProfileUuid: string;
    uuid: string;
    keyItemUuid: string;
    verifyDataRequestDto: VerifyDataRequestDto;
}

/**
 * no description
 */
export class CryptographicOperationsControllerApi extends BaseAPI {

    /**
     * Decrypt data using a Key
     */
    decryptData({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, cipherDataRequestDto }: DecryptDataRequest): Observable<DecryptDataResponseDto>
    decryptData({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, cipherDataRequestDto }: DecryptDataRequest, opts?: OperationOpts): Observable<AjaxResponse<DecryptDataResponseDto>>
    decryptData({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, cipherDataRequestDto }: DecryptDataRequest, opts?: OperationOpts): Observable<DecryptDataResponseDto | AjaxResponse<DecryptDataResponseDto>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'decryptData');
        throwIfNullOrUndefined(tokenProfileUuid, 'tokenProfileUuid', 'decryptData');
        throwIfNullOrUndefined(uuid, 'uuid', 'decryptData');
        throwIfNullOrUndefined(keyItemUuid, 'keyItemUuid', 'decryptData');
        throwIfNullOrUndefined(cipherDataRequestDto, 'cipherDataRequestDto', 'decryptData');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<DecryptDataResponseDto>({
            url: '/v1/operations/tokens/{tokenInstanceUuid}/tokenProfiles/{tokenProfileUuid}/keys/{uuid}/items/{keyItemUuid}/decrypt'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{tokenProfileUuid}', encodeURI(tokenProfileUuid)).replace('{uuid}', encodeURI(uuid)).replace('{keyItemUuid}', encodeURI(keyItemUuid)),
            method: 'POST',
            headers,
            body: cipherDataRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Encrypt data using a Key
     */
    encryptData({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, cipherDataRequestDto }: EncryptDataRequest): Observable<EncryptDataResponseDto>
    encryptData({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, cipherDataRequestDto }: EncryptDataRequest, opts?: OperationOpts): Observable<AjaxResponse<EncryptDataResponseDto>>
    encryptData({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, cipherDataRequestDto }: EncryptDataRequest, opts?: OperationOpts): Observable<EncryptDataResponseDto | AjaxResponse<EncryptDataResponseDto>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'encryptData');
        throwIfNullOrUndefined(tokenProfileUuid, 'tokenProfileUuid', 'encryptData');
        throwIfNullOrUndefined(uuid, 'uuid', 'encryptData');
        throwIfNullOrUndefined(keyItemUuid, 'keyItemUuid', 'encryptData');
        throwIfNullOrUndefined(cipherDataRequestDto, 'cipherDataRequestDto', 'encryptData');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<EncryptDataResponseDto>({
            url: '/v1/operations/tokens/{tokenInstanceUuid}/tokenProfiles/{tokenProfileUuid}/keys/{uuid}/items/{keyItemUuid}/encrypt'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{tokenProfileUuid}', encodeURI(tokenProfileUuid)).replace('{uuid}', encodeURI(uuid)).replace('{keyItemUuid}', encodeURI(keyItemUuid)),
            method: 'POST',
            headers,
            body: cipherDataRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * List of cipher Attributes
     */
    listCipherAttributes({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, algorithm }: ListCipherAttributesRequest): Observable<Array<BaseAttributeDto>>
    listCipherAttributes({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, algorithm }: ListCipherAttributesRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<BaseAttributeDto>>>
    listCipherAttributes({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, algorithm }: ListCipherAttributesRequest, opts?: OperationOpts): Observable<Array<BaseAttributeDto> | AjaxResponse<Array<BaseAttributeDto>>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'listCipherAttributes');
        throwIfNullOrUndefined(tokenProfileUuid, 'tokenProfileUuid', 'listCipherAttributes');
        throwIfNullOrUndefined(uuid, 'uuid', 'listCipherAttributes');
        throwIfNullOrUndefined(keyItemUuid, 'keyItemUuid', 'listCipherAttributes');
        throwIfNullOrUndefined(algorithm, 'algorithm', 'listCipherAttributes');

        return this.request<Array<BaseAttributeDto>>({
            url: '/v1/operations/tokens/{tokenInstanceUuid}/tokenProfiles/{tokenProfileUuid}/keys/{uuid}/items/{keyItemUuid}/cipher/{algorithm}/attributes'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{tokenProfileUuid}', encodeURI(tokenProfileUuid)).replace('{uuid}', encodeURI(uuid)).replace('{keyItemUuid}', encodeURI(keyItemUuid)).replace('{algorithm}', encodeURI(algorithm)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * List of random generator Attributes
     */
    listRandomAttributes({ tokenInstanceUuid }: ListRandomAttributesRequest): Observable<Array<BaseAttributeDto>>
    listRandomAttributes({ tokenInstanceUuid }: ListRandomAttributesRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<BaseAttributeDto>>>
    listRandomAttributes({ tokenInstanceUuid }: ListRandomAttributesRequest, opts?: OperationOpts): Observable<Array<BaseAttributeDto> | AjaxResponse<Array<BaseAttributeDto>>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'listRandomAttributes');

        return this.request<Array<BaseAttributeDto>>({
            url: '/v1/operations/tokens/{tokenInstanceUuid}/random/attributes'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * List of signature Attributes
     */
    listSignatureAttributes({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, algorithm }: ListSignatureAttributesRequest): Observable<Array<BaseAttributeDto>>
    listSignatureAttributes({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, algorithm }: ListSignatureAttributesRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<BaseAttributeDto>>>
    listSignatureAttributes({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, algorithm }: ListSignatureAttributesRequest, opts?: OperationOpts): Observable<Array<BaseAttributeDto> | AjaxResponse<Array<BaseAttributeDto>>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'listSignatureAttributes');
        throwIfNullOrUndefined(tokenProfileUuid, 'tokenProfileUuid', 'listSignatureAttributes');
        throwIfNullOrUndefined(uuid, 'uuid', 'listSignatureAttributes');
        throwIfNullOrUndefined(keyItemUuid, 'keyItemUuid', 'listSignatureAttributes');
        throwIfNullOrUndefined(algorithm, 'algorithm', 'listSignatureAttributes');

        return this.request<Array<BaseAttributeDto>>({
            url: '/v1/operations/tokens/{tokenInstanceUuid}/tokenProfiles/{tokenProfileUuid}/keys/{uuid}/items/{keyItemUuid}/signature/{algorithm}/attributes'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{tokenProfileUuid}', encodeURI(tokenProfileUuid)).replace('{uuid}', encodeURI(uuid)).replace('{keyItemUuid}', encodeURI(keyItemUuid)).replace('{algorithm}', encodeURI(algorithm)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Generate random data
     */
    randomData({ tokenInstanceUuid, randomDataRequestDto }: RandomDataRequest): Observable<RandomDataResponseDto>
    randomData({ tokenInstanceUuid, randomDataRequestDto }: RandomDataRequest, opts?: OperationOpts): Observable<AjaxResponse<RandomDataResponseDto>>
    randomData({ tokenInstanceUuid, randomDataRequestDto }: RandomDataRequest, opts?: OperationOpts): Observable<RandomDataResponseDto | AjaxResponse<RandomDataResponseDto>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'randomData');
        throwIfNullOrUndefined(randomDataRequestDto, 'randomDataRequestDto', 'randomData');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<RandomDataResponseDto>({
            url: '/v1/operations/tokens/{tokenInstanceUuid}/random'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)),
            method: 'POST',
            headers,
            body: randomDataRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Sign data using a Key
     */
    signData({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, signDataRequestDto }: SignDataRequest): Observable<SignDataResponseDto>
    signData({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, signDataRequestDto }: SignDataRequest, opts?: OperationOpts): Observable<AjaxResponse<SignDataResponseDto>>
    signData({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, signDataRequestDto }: SignDataRequest, opts?: OperationOpts): Observable<SignDataResponseDto | AjaxResponse<SignDataResponseDto>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'signData');
        throwIfNullOrUndefined(tokenProfileUuid, 'tokenProfileUuid', 'signData');
        throwIfNullOrUndefined(uuid, 'uuid', 'signData');
        throwIfNullOrUndefined(keyItemUuid, 'keyItemUuid', 'signData');
        throwIfNullOrUndefined(signDataRequestDto, 'signDataRequestDto', 'signData');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<SignDataResponseDto>({
            url: '/v1/operations/tokens/{tokenInstanceUuid}/tokenProfiles/{tokenProfileUuid}/keys/{uuid}/items/{keyItemUuid}/sign'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{tokenProfileUuid}', encodeURI(tokenProfileUuid)).replace('{uuid}', encodeURI(uuid)).replace('{keyItemUuid}', encodeURI(keyItemUuid)),
            method: 'POST',
            headers,
            body: signDataRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Verify data using a Key
     */
    verifyData({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, verifyDataRequestDto }: VerifyDataRequest): Observable<VerifyDataResponseDto>
    verifyData({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, verifyDataRequestDto }: VerifyDataRequest, opts?: OperationOpts): Observable<AjaxResponse<VerifyDataResponseDto>>
    verifyData({ tokenInstanceUuid, tokenProfileUuid, uuid, keyItemUuid, verifyDataRequestDto }: VerifyDataRequest, opts?: OperationOpts): Observable<VerifyDataResponseDto | AjaxResponse<VerifyDataResponseDto>> {
        throwIfNullOrUndefined(tokenInstanceUuid, 'tokenInstanceUuid', 'verifyData');
        throwIfNullOrUndefined(tokenProfileUuid, 'tokenProfileUuid', 'verifyData');
        throwIfNullOrUndefined(uuid, 'uuid', 'verifyData');
        throwIfNullOrUndefined(keyItemUuid, 'keyItemUuid', 'verifyData');
        throwIfNullOrUndefined(verifyDataRequestDto, 'verifyDataRequestDto', 'verifyData');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<VerifyDataResponseDto>({
            url: '/v1/operations/tokens/{tokenInstanceUuid}/tokenProfiles/{tokenProfileUuid}/keys/{uuid}/items/{keyItemUuid}/verify'.replace('{tokenInstanceUuid}', encodeURI(tokenInstanceUuid)).replace('{tokenProfileUuid}', encodeURI(tokenProfileUuid)).replace('{uuid}', encodeURI(uuid)).replace('{keyItemUuid}', encodeURI(keyItemUuid)),
            method: 'POST',
            headers,
            body: verifyDataRequestDto,
        }, opts?.responseOpts);
    };

}
