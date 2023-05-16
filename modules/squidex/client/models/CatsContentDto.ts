/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CatsDataDto } from './CatsDataDto';

export type CatsContentDto = {
    /**
     * The ID of the object (usually GUID).
     */
    id: string;
    /**
     * The timestamp when the object was created.
     */
    created: string;
    /**
     * The user who created the object.
     */
    createdBy: string;
    /**
     * The timestamp when the object was updated the last time.
     */
    lastModified: string;
    /**
     * The user who updated the object the last time.
     */
    lastModifiedBy: string;
    /**
     * The new status of the content.
     */
    newStatus?: string | null;
    /**
     * The status of the content.
     */
    status: string;
    /**
     * The new status color of the content.
     */
    newStatusColor?: string | null;
    /**
     * The ID of the schema.
     */
    schemaId: string;
    /**
     * The name of the schema.
     */
    schemaName: string;
    /**
     * The display name of the schema.
     */
    schemaDisplayName: string;
    /**
     * The status color of the content.
     */
    statusColor: string;
    /**
     * The data of the content.
     */
    data: CatsDataDto;
};
