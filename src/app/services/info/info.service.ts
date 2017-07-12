import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Http, Response, RequestOptions } from '@angular/http';

@Injectable()
export class InfoService {

  constructor( private http: Http ) {}

  // Observable string sources
  private tabSource = new Subject<string>();

  // Observable string streams
  tabSet$ = this.tabSource.asObservable();

  // Service message commands
  setTab(tab: string) {
    this.tabSource.next(tab);
  }

  getAdministration = (id = ''): Observable<object> => {
    return this.http.get('http://127.0.0.1:1111/data/administration/' + id)
      .map((res: Response) => res.json() as object)
      .catch((error: any) => {
        if (error.status) {
          return Observable.of({
            'err': error.status
          });
        } else {
          return Observable.throw(error.json().error || error.message || error);
        }
      });
  };

  getPeople = (id = ''): Observable<object> => {
    return this.http.get('http://127.0.0.1:1111/data/people/' + id)
      .map((res: Response) => res.json() as object)
      .catch((error: any) => {
        if (error.status) {
          return Observable.of({
            'err': error.status
          });
        } else {
          return Observable.throw(error.json().error || error.message || error);
        }
      });
  };
}
