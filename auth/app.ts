@Component({
    selector: 'app'
  })
  export class AppComponent {
  
    constructor(private actions: Actions, private router: Router) {}
  
    ngOnInit() {
      this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => this.router.navigate(['/login']));
    }
  
  }