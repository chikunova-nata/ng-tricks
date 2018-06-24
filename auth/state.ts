@State<AuthStateModel>({
    name: 'auth'
  })
  export class AuthState {
  
    @Selector()
    static token(state: AuthStateModel) { return state.token; }
  
    constructor(private authService: AuthService) {}
  
    @Action(Login)
    login({ patchState }: StateContext<AuthStateModel>, { payload: { username } }: Login) {
      return this.authService.login(payload).pipe(tap((result: { token: string }) => {
        patchState({ token, username });
      }))
    }
  
    @Action(Logout)
    logout({ setState, getState }: StateContext<AuthStateModel>) {
      const { token } = getState();
      return this.authService.logout(token).pipe(tap(() => {
        setState({});
      });
    }
  
  }