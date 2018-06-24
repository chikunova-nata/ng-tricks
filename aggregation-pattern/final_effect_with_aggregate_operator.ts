@Effect()
public getAggregatedProductInformation$ = this._actions$
    .ofType(GetProductSummaryAction.TYPE)
    .pipe(
        aggregate<
	    GetProductSummaryAction, 
	    GotProductInformationAction, 
	    GotShippingInformationAction, 
	    GetAggregatedProductInformationFailAction>(
		    this._actions$.ofType(GotProductInformationAction.TYPE),
		    this._actions$.ofType(GotShippingInformationAction.TYPE),
		    this._actions$.ofType(GetAggregatedProductInformationFailAction.TYPE)
	    )
    )
    .map(([gotProductInformationAction, gotShippingInformationAction]) => {
        return new GotProductSummaryAction(
          categoryInformation: gotProductInformationAction.productInformation,
          shippingInformation: gotShippingInformationAction.shippingInformation
        );
    })
    .catch(error => new GetProductSummaryFailAction(error));