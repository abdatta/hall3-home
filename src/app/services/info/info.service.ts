import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Response, RequestOptions } from '@angular/http';
import { HttpClient } from '../http.client';

@Injectable()
export class InfoService {

    private data: object = {
        administration: null,
        people: null
    };

  constructor( private http: HttpClient ) {}

  // Service message commands
  setTab(tab: string) {
    // TODO: Remove all call to setTab() from all components
  }

  getAdministration = (id = ''): Observable<object> => {
      if (this.data['administration'] === null || !this.data['administration'].hasOwnProperty(id)) {
          return this.http.get('/server/data/administration/' + id)
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
      } else {
          return Observable.of(this.data['administration'][id]);
      }
  };

  getPeople = (id: string): Observable<object> => {
    return this.http.get('/server/data/people/' + id)
      .map((res: Response) => res.json() as object)
      .catch((error: any) => {
        if (error.status) {
          return Observable.of({
            'err': error.status,
            'info': [{ name: 'Oops! Some Error Ocurred' }]
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

  getFacilityData = (id: string): Observable<object> => {
      return this.http.get('/server/data/facilities/' + id)
          .map((res: Response) => res.json() as object)
          .catch((error: any) => {
              if (error.status) {
                return Observable.of({
                  'err': error.status,
                  'info': [{ name: 'Oops! Some Error Ocurred' }]
                });
              } else {
                return Observable.throw(error.json().error || error.message || error);
              }
          });
  }

    updateFacilityData = (name: string, data: object[]): Observable<number> => {
        return this.http.post('/server/data/facilities/' + name, {
            'data': data
        })  .map(res => res.status)
            .catch((error: any) => {
                if (error.status) {
                    return Observable.of(error.status);
                } else {
                    return Observable.throw(error.message || error);
                }
            });
    };

}
