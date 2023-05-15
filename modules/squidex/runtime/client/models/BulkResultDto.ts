/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ErrorDto } from './ErrorDto';

export type BulkResultDto = {
    /**
     * The error when the bulk job failed.
     */
    Error?: ErrorDto | null;
    /**
     * The index of the bulk job where the result belongs to. The order can change.
     */
    JobIndex?: number;
    /**
     * The ID of the entity that has been handled successfully or not.
     */
    Id?: string | null;
    /**
     * The ID of the entity that has been handled successfully or not.
     * @deprecated
     */
    ContentId?: string | null;
};
