@NgModule({
    imports: [
      NgxsModule.forRoot([AuthState]),
      NgxsStoragePluginModule.forRoot({
        keys: 'auth.token'
      })
    ]
  })
  export class AppModule {}