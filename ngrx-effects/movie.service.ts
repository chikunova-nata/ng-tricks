import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Movie } from '../models/movie.model';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(`/api/movies`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
    
}