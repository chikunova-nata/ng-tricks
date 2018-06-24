loadDocuments$ = this.actions$.pipe(
    ofType<documentActions.Fetch>(documentActions.FETCH)
    switchMapTo(
        this.documentsService
          .getDocuments().pipe(
             map(docs => new documentActions.FetchSuccess(docs))
             catchError(err => of(
                   new ErrorOccurred({
                       action: { type: documentActions.FETCH },
                       error,
                   })
               ))
           )
     )
 )