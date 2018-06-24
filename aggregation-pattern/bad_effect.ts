@Effect()
public getAggregatedProductInformation$ = this._actions$
    .ofType(GetProductSummaryAction.TYPE)
    .switchMap((action: GetProductSummaryAction) => {
    
      this._store.dispatch(new GetProductInformationAction(action.productId));
      this._store.dispatch(new GetShippingInformationAction(action.productId));
      
      const productInformation$ = this._store.select(ProductSelectors.getProductInformation(action.productId));
      const shippingInformation$ = this._store.select(ProductSelectors.getShippingInformation(action.productId));
      
      return Observable.combineLatest(
              productInformation$,
              shippingInformation$
          )
          .map(([productInformation, shippingInformation]) => {
              return new GotProductSummaryAction(productInformation, shippingInformation);
          });
    })