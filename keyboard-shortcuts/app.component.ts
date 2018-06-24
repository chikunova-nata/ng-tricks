import {Component, HostListener, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store';
import { LayoutActionTypes } from './layout/layout.actions';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  composeMessage$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.composeMessage$ = this.store.select('layout').pluck('composingMessage');
  }
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event) {

    this.store.dispatch({
      type: LayoutActionTypes.ShortcutKeyDown,
      payload: event.keyCode,
    });
  }

}