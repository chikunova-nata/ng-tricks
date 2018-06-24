export class ErrorOccurred implements Action {
    readonly type = ERROR_OCCURRED;
    constructor(
        public payload: {
            action?: Action;
            error?: ErrorData;
        },
    ) {}
}