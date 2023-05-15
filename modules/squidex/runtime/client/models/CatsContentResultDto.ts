/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CatsContentDto } from './CatsContentDto';

export type CatsContentResultDto = {
    /**
     * The total count of  contents.
     */
    total: number;
    /**
     * The contents.
     */
    items: Array<CatsContentDto>;
};
