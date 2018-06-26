import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
/*import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';*/

import { Response, RequestOptions } from '@angular/http';
import { HttpClient } from '../http.client';

import { Query } from '../../models/query';
import { LnFData } from '../../models/lnfdata';

@Injectable()
export class FeedbackService {

  constructor( private http: HttpClient ) {}

  askQuery = (query: Query): Observable<number> => {
    return this.http.post('/server/askthehec/ask', {
      name: query.name,
      to: query.to,
      subject: query.subject,
      message: query.message,
      email: query.email
    }).pipe(
        map(res => res.status),
        catchError((error: any) => {
          if (error.status) {
            return of(error.status);
          } else {
            return Observable.throw(error.message || error);
          }
        })
      );
  };
  getQuery = (id: string): Observable<object> => {
    return this.http.get('/server/askthehec/asked/' + id)
      .pipe(
        map((res: Response) => res.json() as Query),
        catchError((error: any) => {
          if (error.status) {
            return of({
              'err': error.status
            });
          } else {
            return Observable.throw(error.json().error || error.message || error);
          }
        })
      );
  };
  respondQuery = (response: string, id: string): Observable<number> => {
    return this.http.post('/server/askthehec/respond/' + id, {'response' : response })
      .pipe(
        map(res => res.status),
        catchError((error: any) => {
          if (error.status) {
            return of(error.status);
          } else {
            return Observable.throw(error.message || error);
          }
        })
      );
  };
  getResponses = (): Observable<object[]> => {
    return this.http.get('/server/askthehec/responses')
        .pipe(
          map((res: Response) => res.json() as Query[]),
          catchError((error: any) => {
              if (error.status) {
                  return of([{
                      'err': error.status
                  }]);
              } else {
                  return Observable.throw(error.json().error || error.message || error);
              }
          })
        );
    };
    reportQuery = (id: string): Observable<number> => {
        return this.http.get('/server/askthehec/report/' + id)
            .pipe(
              map(res => res.status),
              catchError((error: any) => {
                  if (error.status) {
                      return of(error.status);
                  } else {
                      return Observable.throw(error.message || error);
                  }
              })
            );
    };

    sendlnf = (data: LnFData): Observable<number> => {
      return this.http.post('/server/askthehec/lnf', data )
        .pipe(
          map(res => res.status),
          catchError((error: any) => {
            if (error.status) {
              return of(error.status);
            } else {
              return Observable.throw(error.message || error);
            }
          })
        );
    }
}
