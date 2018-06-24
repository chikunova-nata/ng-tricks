import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/debounceTime';

import { LayoutActionTypes, LayoutComposeMessage, LayoutShortcutKeyDown } from './layout.actions';

@Injectable()
export class LayoutEffects {

  @Effect()
  onKeyDownPress$ = this.actions$
    .ofType(LayoutActionTypes.ShortcutKeyDown)
    .debounceTime(300)
    .switchMap((data: LayoutShortcutKeyDown) => {

      switch (data.payload) {

        // C keyboard button
        case 67:
          return Observable.of(new LayoutComposeMessage(true));

        // ESC keyboard button
        case 27:
          return Observable.of(new LayoutComposeMessage(false));

        default:

          return Observable.empty();
      }

    });

  constructor(private actions$: Actions) {}
}