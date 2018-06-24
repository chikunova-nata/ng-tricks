import {
    ActionReducerMap,
    MetaReducer
  } from '@ngrx/store';
  
  import { environment } from '../../environments/environment';
  import * as fromLayout from '../layout/layout.reducer';
  
  export interface State {
    layout: fromLayout.State;
  }
  
  export const reducers: ActionReducerMap<State> = {
    layout: fromLayout.reducer,
  };
  
  export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];