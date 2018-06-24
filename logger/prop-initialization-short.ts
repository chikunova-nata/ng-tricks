export class DocumentContainer {
  
    companyName$ = this.store.select(detailsSelector.getDocumentCompanyName);
    documentStatus$ = this.store.select(detailsSelector.getDocumentStatus);

    constructor(private store: Store<AppStore.AppState>) { }
}