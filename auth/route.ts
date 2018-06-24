export const routes: Routes = [
    {
      path: 'admin',
      loadChildren: './admin/admin.module#AdminModule',
      canActivate: [AuthGuard]
    }
  ];