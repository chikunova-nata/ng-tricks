@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate() {
    return this.store.select(AuthState.token);
  }

}