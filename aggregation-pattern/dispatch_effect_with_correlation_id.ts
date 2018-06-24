export class CorrelationParams {
    public correlationId?: string;
    public parentActionType?: string;
}

const correlationParams: CorrelationParams = {
	correlationId: new uuid()
}

store.dispatch(new GetProductInformationAction(productId, correlationParams));