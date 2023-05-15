/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ErrorDto = {
    /**
     * Error message.
     */
    Message: string;
    /**
     * The error code.
     */
    ErrorCode?: string | null;
    /**
     * The optional trace id.
     */
    TraceId?: string | null;
    /**
     * Link to the error details.
     */
    Type?: string | null;
    /**
     * Detailed error messages.
     */
    Details?: Array<string> | null;
    /**
     * Status code of the http response.
     */
    StatusCode?: number;
};
