/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CatsDataDto = {
    /**
     * name
     */
    name?: Record<string, string | null> | null;
    /**
     * description
     */
    description?: Record<string, string | null> | null;
    /**
     * bestFriend
     */
    bestFriend?: Record<string, Array<string> | null> | null;
};
