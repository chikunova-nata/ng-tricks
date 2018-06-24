@Effect()
public getProductSummary$ = this._actions$
  .ofType(GetProductSummaryAction.TYPE)
  .flatMap((action: GetProductSummaryAction) => [
    new GetProductInformationAction(action.productId),
    new GetShippingInformationAction(action.productId)
  ]); 