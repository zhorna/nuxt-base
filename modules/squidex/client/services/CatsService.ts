/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkResultDto } from '../models/BulkResultDto';
import type { BulkUpdateContentsDto } from '../models/BulkUpdateContentsDto';
import type { CatsContentDto } from '../models/CatsContentDto';
import type { CatsContentResultDto } from '../models/CatsContentResultDto';
import type { CatsDataDto } from '../models/CatsDataDto';
import type { ChangeStatusDto } from '../models/ChangeStatusDto';
import type { QueryDto } from '../models/QueryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CatsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Query 'Cats' contents items.
     * How to make queries?
 *
 * Read more about it at: https://docs.squidex.io/04-guides/02-api.html
 *
 * The query endpoints support three options:
 *
 * ### Query with OData
 *
 * Squidex supports a subset of the OData (https://www.odata.org/) syntax with with the following query options:
 *
 * * **$top**: The $top query option requests the number of items in the queried collection to be included in the result. The default value is 20 and the maximum allowed value is 200. You can change the maximum in the app settings, when you host Squidex yourself.
 * * **$skip**: The $skip query option requests the number of items in the queried collection that are to be skipped and not included in the result. Use it together with $top to read the all your data page by page.
 * * **$search**: The $search query option allows clients to request entities matching a free-text search expression. We add the data of all fields for all languages to our full text engine.
 * * **$filter**: The $filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * * **$orderby**: The $orderby query option allows clients to request resources in a particular order.
 *
 * ### Query with JSON query
 *
 * Squidex also supports a query syntax based on JSON. You have to pass in the query object as query parameter:
 *
 * * **q**: A json text that represents the same query options as with OData, but is more performant to parse.
 *
 * ### Query by IDs
 *
 * Query your items by passing in one or many IDs with the following query parameter:
 *
 * * **ids**: A comma-separated list of ids. If you define this option all other settings are ignored.
     * @param search Optional number of items to skip.
     * @param top Optional number of items to take.
     * @param skip Optional number of items to skip.
     * @param orderby Optional OData order definition.
     * @param filter Optional OData filter.
     * @param q JSON query as well formatted json string. Overrides all other query parameters, except 'ids'.
     * @param ids Comma separated list of object IDs. Overrides all other query parameters.
     * @param search Optional number of items to skip.
     * @param top Optional number of items to take.
     * @param skip Optional number of items to skip.
     * @param orderby Optional OData order definition.
     * @param filter Optional OData filter.
     * @param q JSON query as well formatted json string. Overrides all other query parameters, except 'ids'.
     * @param ids Comma separated list of object IDs. Overrides all other query parameters.
     * @returns CatsContentResultDto Content items retrieved.
     * @throws ApiError
     */
    public queryCatsContent(
search?: string,
top?: number,
skip?: number,
orderby?: string,
filter?: string,
q?: string,
ids?: string,
search?: string,
top?: number,
skip?: number,
orderby?: string,
filter?: string,
q?: string,
ids?: string,
): CancelablePromise<CatsContentResultDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/content/nuxt-module-dev/cats/',
            query: {
                '$search': search,
                '$top': top,
                '$skip': skip,
                '$orderby': orderby,
                '$filter': filter,
                'q': q,
                'ids': ids,
                '$search': search,
                '$top': top,
                '$skip': skip,
                '$orderby': orderby,
                '$filter': filter,
                'q': q,
                'ids': ids,
            },
            errors: {
                400: `Content query not valid.`,
            },
        });
    }

    /**
     * Create a 'Cats' content item.
     * @param requestBody The data of the content.
 *
 * Please note that each field is an object with one entry per language.
 * If the field is not localizable you must use `iv` (invariant language) as a key.
 *
 * Read more about it at: https://docs.squidex.io/04-guides/02-api.html
     * @param publish Set to true to autopublish content on create.
     * @param id The optional custom content ID.
     * @param publish Set to true to autopublish content on create.
     * @param id The optional custom content ID.
     * @returns CatsContentDto Content item created
     * @throws ApiError
     */
    public createCatsContent(
requestBody: CatsDataDto,
publish?: boolean,
id?: string,
publish?: boolean,
id?: string,
): CancelablePromise<CatsContentDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/content/nuxt-module-dev/cats/',
            query: {
                'publish': publish,
                'id': id,
                'publish': publish,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Content data not valid.`,
            },
        });
    }

    /**
     * Query 'Cats' contents items using Post.
     * @param requestBody 
     * @returns CatsContentResultDto Content items retrieved.
     * @throws ApiError
     */
    public queryPostCatsContent(
requestBody: QueryDto,
): CancelablePromise<CatsContentResultDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/content/nuxt-module-dev/cats/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Content query not valid.`,
            },
        });
    }

    /**
     * Get a 'Cats' content item.
     * @param id The ID of the object (usually GUID).
     * @param id The ID of the object (usually GUID).
     * @param version The version of the objec.
     * @param version The version of the objec.
     * @returns CatsContentDto Content item returned.
     * @throws ApiError
     */
    public getCatsContent(
id: string,
id: string,
version?: number,
version?: number,
): CancelablePromise<CatsContentDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/content/nuxt-module-dev/cats/{id}',
            path: {
                'id': id,
                'id': id,
            },
            query: {
                'version': version,
                'version': version,
            },
            errors: {
                404: `Content item not found.`,
            },
        });
    }

    /**
     * Upsert a 'Cats' content item.
     * @param id The ID of the object (usually GUID).
     * @param id The ID of the object (usually GUID).
     * @param requestBody The data of the content.
 *
 * Please note that each field is an object with one entry per language.
 * If the field is not localizable you must use `iv` (invariant language) as a key.
 *
 * Read more about it at: https://docs.squidex.io/04-guides/02-api.html
     * @param patch Makes the update as patch.
     * @param publish Set to true to autopublish content on create.
     * @param patch Makes the update as patch.
     * @param publish Set to true to autopublish content on create.
     * @returns CatsContentDto Content item created or updated.
     * @throws ApiError
     */
    public upsertCatsContent(
id: string,
id: string,
requestBody: CatsDataDto,
patch?: boolean,
publish?: boolean,
patch?: boolean,
publish?: boolean,
): CancelablePromise<CatsContentDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/content/nuxt-module-dev/cats/{id}',
            path: {
                'id': id,
                'id': id,
            },
            query: {
                'patch': patch,
                'publish': publish,
                'patch': patch,
                'publish': publish,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Content data not valid.`,
                404: `Content item not found.`,
            },
        });
    }

    /**
     * Update a 'Cats' content item.
     * @param id The ID of the object (usually GUID).
     * @param id The ID of the object (usually GUID).
     * @param requestBody The data of the content.
 *
 * Please note that each field is an object with one entry per language.
 * If the field is not localizable you must use `iv` (invariant language) as a key.
 *
 * Read more about it at: https://docs.squidex.io/04-guides/02-api.html
     * @returns CatsContentDto Content item updated.
     * @throws ApiError
     */
    public updateCatsContent(
id: string,
id: string,
requestBody: CatsDataDto,
): CancelablePromise<CatsContentDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/content/nuxt-module-dev/cats/{id}',
            path: {
                'id': id,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Content data not valid.`,
                404: `Content item not found.`,
            },
        });
    }

    /**
     * Patch a 'Cats' content item.
     * @param id The ID of the object (usually GUID).
     * @param id The ID of the object (usually GUID).
     * @param requestBody The data of the content.
 *
 * Please note that each field is an object with one entry per language.
 * If the field is not localizable you must use `iv` (invariant language) as a key.
 *
 * Read more about it at: https://docs.squidex.io/04-guides/02-api.html
     * @returns CatsContentDto Content item updated.
     * @throws ApiError
     */
    public patchCatsContent(
id: string,
id: string,
requestBody: CatsDataDto,
): CancelablePromise<CatsContentDto> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/content/nuxt-module-dev/cats/{id}',
            path: {
                'id': id,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Content data not valid.`,
                404: `Content item not found.`,
            },
        });
    }

    /**
     * Delete a 'Cats' content item.
     * @param id The ID of the object (usually GUID).
     * @param id The ID of the object (usually GUID).
     * @param permanent True when the entity should be deleted permanently.
     * @param permanent True when the entity should be deleted permanently.
     * @returns void 
     * @throws ApiError
     */
    public deleteCatsContent(
id: string,
id: string,
permanent?: boolean,
permanent?: boolean,
): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/content/nuxt-module-dev/cats/{id}',
            path: {
                'id': id,
                'id': id,
            },
            query: {
                'permanent': permanent,
                'permanent': permanent,
            },
            errors: {
                404: `Content item not found.`,
            },
        });
    }

    /**
     * @deprecated
     * Get a 'Cats' content item by id and version.
     * @param version The version of the objec.
     * @param id The ID of the object (usually GUID).
     * @param version The version of the objec.
     * @param id The ID of the object (usually GUID).
     * @returns CatsDataDto Content item returned.
     * @throws ApiError
     */
    public getVersionedCatsContent(
version: number,
id: string,
version: number,
id: string,
): CancelablePromise<CatsDataDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/content/nuxt-module-dev/cats/{id}/{version}',
            path: {
                'version': version,
                'id': id,
                'version': version,
                'id': id,
            },
            errors: {
                404: `Content item not found.`,
            },
        });
    }

    /**
     * Validates a 'Cats' content item.
     * @param id The ID of the object (usually GUID).
     * @param id The ID of the object (usually GUID).
     * @returns any Content item is valid.
     * @throws ApiError
     */
    public validateCatsContent(
id: string,
id: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/content/nuxt-module-dev/cats/{id}/validity',
            path: {
                'id': id,
                'id': id,
            },
            errors: {
                400: `Content item is not valid.`,
                404: `Content item not found.`,
            },
        });
    }

    /**
     * Bulk update content items.
     * @param requestBody 
     * @returns BulkResultDto Contents created, update or delete.
     * @throws ApiError
     */
    public bulkCatsContent(
requestBody: BulkUpdateContentsDto,
): CancelablePromise<BulkResultDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/content/nuxt-module-dev/cats/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Contents request not valid.`,
            },
        });
    }

    /**
     * Change the status of a 'Cats' content item.
     * @param id The ID of the object (usually GUID).
     * @param id The ID of the object (usually GUID).
     * @param requestBody The request to change content status.
     * @returns CatsContentDto Content status updated.
     * @throws ApiError
     */
    public changeCatsContent(
id: string,
id: string,
requestBody: ChangeStatusDto,
): CancelablePromise<CatsContentDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/content/nuxt-module-dev/cats/{id}/status',
            path: {
                'id': id,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Content status not valid.`,
                404: `Content item not found.`,
            },
        });
    }

}
