/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChangeStatusDto = {
    /**
     * The new status.
     */
    Status: string;
    /**
     * The due time.
     */
    DueTime?: string | null;
    /**
     * True to check referrers of this content.
     */
    CheckReferrers?: boolean;
};
