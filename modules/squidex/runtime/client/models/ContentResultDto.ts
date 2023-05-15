/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContentDto } from './ContentDto';

export type ContentResultDto = {
    /**
     * The total count of  contents.
     */
    total: number;
    /**
     * The contents.
     */
    items: Array<ContentDto>;
};
