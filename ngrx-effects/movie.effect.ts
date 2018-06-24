import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../app/store';
import * as movieActions from '../actions/movie.action';
import * as fromServices from '../../services';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private movieService: fromServices.MoviesService
  ) {}

  @Effect()
  loadMovies$ = this.actions$.ofType(movieActions.LOAD_MOVIES).pipe(
    switchMap(() => {
      return this.movieService
        .getMovies()
        .pipe(
          map(movies => new movieActions.LoadMoviesSuccess(movies)),
          catchError(error => of(new movieActions.LoadMoviesFail(error)))
        );
    })
  );

}