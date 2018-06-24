@Effect()
public getProductSummary$ = this._actions$
  .ofType(GetProductSummaryAction.TYPE)
  .flatMap((action: GetProductSummaryAction) => {
    const correlationParams = action.correlationParams;
    correlationParams.parentActionType = GetProductSummaryAction.TYPE;
      return [
        new GetProductInformationAction(action.productId, correlationParams),
        new GetShippingInformationAction(action.productId, correlationParams)
      ]
    });