/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkResultDto } from '../models/BulkResultDto';
import type { BulkUpdateContentsDto } from '../models/BulkUpdateContentsDto';
import type { ContentResultDto } from '../models/ContentResultDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SharedService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Query contents across all schemas.
     * @param ids Comma-separated list of content IDs.
     * @param ids Comma-separated list of content IDs.
     * @returns ContentResultDto Content items retrieved.
     * @throws ApiError
     */
    public querySharedContent(
ids?: string,
ids?: string,
): CancelablePromise<ContentResultDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/content/nuxt-module-dev/',
            query: {
                'ids': ids,
                'ids': ids,
            },
            errors: {
                400: `Query not valid.`,
            },
        });
    }

    /**
     * Bulk update content items across all schemas.
     * @param requestBody 
     * @returns BulkResultDto Contents created, update or delete.
     * @throws ApiError
     */
    public bulkSharedContent(
requestBody: BulkUpdateContentsDto,
): CancelablePromise<BulkResultDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/content/nuxt-module-dev/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Contents request not valid.`,
            },
        });
    }

}
