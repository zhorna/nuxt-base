/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BulkUpdateContentsJobDto } from './BulkUpdateContentsJobDto';

export type BulkUpdateContentsDto = {
    /**
     * The contents to update or insert.
     */
    Jobs: Array<BulkUpdateContentsJobDto>;
    /**
     * True to automatically publish the content.
     * @deprecated
     */
    Publish?: boolean;
    /**
     * True to turn off scripting for faster inserts. Default: true.
     */
    DoNotScript?: boolean;
    /**
     * True to turn off validation for faster inserts. Default: false.
     */
    DoNotValidate?: boolean;
    /**
     * True to turn off validation of workflow rules. Default: false.
     */
    DoNotValidateWorkflow?: boolean;
    /**
     * True to check referrers of deleted contents.
     */
    CheckReferrers?: boolean;
    /**
     * True to turn off costly validation: Unique checks, asset checks and reference checks. Default: true.
     */
    OptimizeValidation?: boolean;
};
