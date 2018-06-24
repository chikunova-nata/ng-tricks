export function reducer(state = initialState, action: AuthActionsUnion): State {
    switch (action.type) {
      case AuthActionTypes.LoginSuccess: {
        return {
          ...state,
          loggedIn: true,
          user: action.payload.user,
        };
      }
  
      case AuthActionTypes.Logout: {
        return initialState;
      }
  
      default: {
        return state;
      }
    }
  }