/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SortNode } from './SortNode';

export type QueryJsonDto = {
    Filter?: any;
    FullText?: string | null;
    Skip?: number;
    Take?: number;
    Random?: number;
    Top?: number;
    Sort?: Array<SortNode> | null;
};
