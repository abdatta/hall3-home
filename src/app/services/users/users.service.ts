import { Injectable } from '@angular/core';
import { Subject, Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
/*import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catchError';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';*/

import { Response } from '@angular/http';
import { HttpClient } from '../http.client';

import { User } from '../../models/user';

@Injectable()
export class UsersService {

  private currentUser: Promise<User>;

  // Observable string sources
  private logSource = new Subject<boolean>();

  // Observable string streams
  logStat$ = this.logSource.asObservable();

  // Service message commands
  logStat() {
    this.currentUser.then((user: User) => {
      this.logSource.next(user != null);
    });
  }

  constructor( private http: HttpClient ) {
    this.init();
  }

  init = (): void => {
    this.currentUser = this.http.get('/server/accounts/me')
      .pipe(
        map((response: Response) => response.json() as User),
        catchError((err: any, caught) => of(null))
      ).toPromise();
    this.logStat();
  }

  handleError = (error: any): Observable<any> => {
    if (error.status === 401) {
      this.currentUser = Promise.resolve(null);
    }
    if (error.status) {
      return of(error.status);
    }
    return Observable.throw(error.message || error);
  }

  getUser = (): Promise<User> => this.currentUser;

  getUsers = (level: string): Observable<Array<User>> => {
    return this.http.get('/server/accounts/users/' + level)
      .pipe(
        map((res: Response) => res.json() as Array<User>),
        catchError((error: any) => {
          if (error.status === 404) {
            return of([]);
          } else {
            return Observable.throw(error.json().error || error.message || error);
          }
        })
      );
  }

  signIn = (user: string, pass: string): Observable<number> => {
    return this.http.post('/server/accounts/signin', { username: user, password: pass})
      .pipe(
        map((response: Response) => {
          this.currentUser = Promise.resolve(response.json() as User);
          this.logStat();
          return response.status;
        }),
        catchError(this.handleError)
      );
  }

  signUp = (name: string, user: string, email: string, pass: string): Observable<number> => {
    return this.http.post('/server/accounts/signup', { name: name, username: user, email: email, password: pass })
      .pipe(
        map((response: Response) => {
          this.currentUser = Promise.resolve(response.json() as User);
          this.logStat();
          return response.status;
        }),
        catchError(this.handleError)
      );
  }

  changePassword = (currpass: string, newpass: string): Observable<number> => {
    return this.http.post('/server/accounts/changepassword', { password: { curr: currpass, new: newpass} })
      .pipe(
        map((response: Response) => {
          if (response.status === 200) { this.logout(); }
          return response.status;
        }),
        catchError(this.handleError)
      );
  }

  requestLevel = (level: string): Observable<number> => {
    return this.http.post(`/server/accounts/request`, { level: level })
      .pipe(
        map(response => {
          this.currentUser.then((user: User) => {
            user.levelsRequested.push(level);
            return user;
          });
          return response.status;
        }),
        catchError(this.handleError)
      );
  }

  approve = (id: string, level: string): Observable<number> => {
    return this.http.post(`/server/accounts/approve`, { id: id, level: level })
      .pipe(
        map(response => response.status),
        catchError(this.handleError)
      );
  }

  deny = (id: string, level: string): Observable<number> => {
    return this.http.post(`/server/accounts/deny`, { id: id, level: level })
      .pipe(
        map(res => res.status),
        catchError(this.handleError)
      );
  }

  deleteUser = (id: string): Observable<number> => {
    return this.http.post(`/server/accounts/delete`, { id: id })
      .pipe(
        map(res => res.status),
        catchError(this.handleError)
       );
  }

  transferRequest = (transfers: object): Observable<number> => {
    return this.http.post('/server/accounts/transfer', transfers)
      .pipe(
        map((response: Response) => response.status),
        catchError(this.handleError)
      );
  }


  logout = (): void => {
    this.currentUser = Promise.resolve(null);
    // To execute observable, it is converted to a promise
    this.http.post('/server/accounts/logout', {})
        .toPromise();
    this.logStat();
  }

  check = (): Promise<boolean> => {
    return this.currentUser.then((user: User) => {
      return user != null;
    });
  }

  checkLevel = (levels: string[] = []): Promise<boolean> => {
    levels = levels.slice(); levels.push('admin');
    return this.currentUser.then((user: User) =>
      user != null && levels.some(level => user.levelsCurrent.indexOf(level) !== -1)
    );
  }

  checkAdmin = (): Promise<boolean> => this.checkLevel();

}
