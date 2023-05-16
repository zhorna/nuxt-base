/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QueryDto = {
    /**
     * The optional list of ids to query.
     */
    Ids?: Array<string> | null;
    /**
     * The optional odata query.
     */
    OData?: string | null;
    /**
     * The optional json query.
     */
    JsonQuery?: any;
    /**
     * The parent id (for assets).
     */
    ParentId?: string | null;
};
