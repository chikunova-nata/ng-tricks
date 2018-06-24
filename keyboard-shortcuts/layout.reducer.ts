import * as layoutActions from './layout.actions';

export interface State {
  composingMessage: boolean;
  loadingMessages: boolean;
}

export const initialState: State = {
  composingMessage: false,
  loadingMessages: false,
};

export function reducer(state = initialState, action: layoutActions.LayoutActions): State {
  switch (action.type) {

    case layoutActions.LayoutActionTypes.LoadingMessages:

      return Object.assign({}, state, {
        loadingMessages: action.payload,
      });

    case layoutActions.LayoutActionTypes.ComposingMessage:

      return Object.assign({}, state, {
        composingMessage: action.payload,
      });

    default:
      return state;
  }
}