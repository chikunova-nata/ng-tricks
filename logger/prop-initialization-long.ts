export class DocumentContainer {
  
    companyName$: Observable<string>;
    documentStatus$: Observable<number>;

    constructor(
        private store: Store<AppStore.AppState>,
    ) {
        this.companyName$ = this.store.select(detailsSelector.getDocumentCompanyName);
        this.documentStatus$ = this.store.select(detailsSelector.getDocumentStatus);
    }
}