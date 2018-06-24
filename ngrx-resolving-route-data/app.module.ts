import { StoreModule } from '@ngrx/store';
import { storeReducers } from './app.state';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(storeReducers),
    AppModule
  ],
  declarations: [AppComponent],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }