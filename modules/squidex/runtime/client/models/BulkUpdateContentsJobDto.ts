/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BulkUpdateContentType } from './BulkUpdateContentType';
import type { ContentData } from './ContentData';
import type { QueryJsonDto } from './QueryJsonDto';

export type BulkUpdateContentsJobDto = {
    /**
     * An optional query to identify the content to update.
     */
    Query?: QueryJsonDto | null;
    /**
     * An optional ID of the content to update.
     */
    Id?: string | null;
    /**
     * The data of the content when type is set to 'Upsert', 'Create', 'Update' or 'Patch.
     */
    Data?: ContentData | null;
    /**
     * The new status when the type is set to 'ChangeStatus' or 'Upsert'.
     */
    Status?: string | null;
    /**
     * The due time.
     */
    DueTime?: string | null;
    /**
     * The update type.
     */
    Type?: BulkUpdateContentType;
    /**
     * The optional schema id or name.
     */
    Schema?: string | null;
    /**
     * Makes the update as patch.
     */
    Patch?: boolean;
    /**
     * True to delete the content permanently.
     */
    Permanent?: boolean;
    /**
     * The number of expected items. Set it to a higher number to update multiple items when a query is defined.
     */
    ExpectedCount?: number;
    /**
     * The expected version.
     */
    ExpectedVersion?: number;
};
