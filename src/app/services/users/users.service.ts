import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Http, Response } from '@angular/http';

import { User } from '../../models/user';

@Injectable()
export class UsersService {

  currentUser: Promise<User>;

  constructor( private http: Http ) {
    this.init();
  }

  init = (): void => {
    this.currentUser = this.http.get('/server/accounts/me')
        .map((response: Response) => response.json() as User)
        .catch((err: any, caught) => {
          return Observable.of(null);
        }).toPromise();
  }

  handleError = (error: any): Observable<any> => {
    if (error.status === 401) {
      this.currentUser = Promise.resolve(null);
    }
    if (error.status) {
      return Observable.of(error.status);
    }
    return Observable.throw(error.message || error);
  }

  getUser = (): Promise<User> => this.currentUser;

  getUsers = (): Observable<Array<User>> => {
    return this.http.get('/server/accounts/users')
        .map((res: Response) => res.json() as Array<User>)
        .catch((error: any) => {
          if (error.status === 404) {
            return Observable.of([]);
          } else {
            return Observable.throw(error.json().error || error.message || error);
          }
        });
  }

  signIn = (user: string, pass: string): Observable<number> => {
    return this.http.post('/server/accounts/signin', { username: user, password: pass})
        .map((response: Response) => {
          this.currentUser = Promise.resolve(response.json() as User);
          return response.status;
        })
        .catch(this.handleError);
  }

  signUp = (user: string, pass: string): Observable<number> => {
    return this.http.post('/server/accounts/signup', { username: user, password: pass})
        .map(response => {
          this.currentUser = Promise.resolve(response.json() as User);
          return response.status;
        })
        .catch(this.handleError);
  }

  requestLevel = (level: string): Observable<number> => {
    return this.http.post(`/server/accounts/request`, {
      level: level
    })
        .map(response => {
          this.currentUser.then((user: User) => {
            user.levelsRequested.push(level);
            return user;
          });
          return response.status;
        })
        .catch(this.handleError);
  }

  approve = (id: string, level: string): Observable<number> => {
    return this.http.post(`/server/accounts/approve`, {
      id: id,
      level: level
    })
        .map(response => response.status)
        .catch(this.handleError);
  }

  deny = (id: string, level: string): Observable<number> => {
    return this.http.post(`/server/accounts/deny`, {
      id: id,
      level: level
    })
        .map(res => res.status)
        .catch(this.handleError);
  }

  deleteUser = (id: string): Observable<number> => {
    return this.http.post(`/server/accounts/delete`, {
      id: id
    })
        .map(res => res.status)
        .catch(this.handleError);
  }

  logout = (): void => {
    this.currentUser = Promise.resolve(null);
    // To execute observable, it is converted to a promise
    this.http.post('/server/accounts/logout', {})
        .toPromise();
  }

  check = (): Promise<boolean> => {
    return this.currentUser.then((user: User) => {
      return user != null;
    });
  }

  checkLevel = (level: string): Promise<boolean> => {
    return this.currentUser.then((user: User) => {
      console.log('Request for ' + level);
      console.log(user);
      return user != null && user.levelsCurrent.indexOf(level) !== -1;
    });
  }

  checkAdmin = (): Promise<boolean> => this.checkLevel('admin');

}
