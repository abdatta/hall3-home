import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Http, Response, RequestOptions } from '@angular/http';

@Injectable()
export class InfoService {

    private data: object = {
        administration: null,
        people: null
    };

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
      if (this.data['administration'] === null || !this.data['administration'].hasOwnProperty(id)) {
          return this.http.get('/server/data/administration/' + id)
              .map((res: Response) => res.json() as object)
              // .do(data => this.data['administration'].addProperty(id, data))
              .catch((error: any) => {
                  if (error.status) {
                      return Observable.of({
                          'err': error.status
                      });
                  } else {
                      return Observable.throw(error.json().error || error.message || error);
                  }
              });
      } else {
          return Observable.of(this.data['administration'][id]);
      }
  };

  getPeople = (id = ''): Observable<object> => {
    return this.http.get('/server/data/people/' + id)
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

  getBooks = (): Observable<object> => {
      return this.http.get('/server/data/facilities/books')
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
  }
}
