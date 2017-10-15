import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Http, Response, RequestOptions } from '@angular/http';

import { Query } from '../../models/query';

@Injectable()
export class FeedbackService {

  constructor( private http: Http ) {}

  askQuery = (query: Query): Observable<number> => {
    return this.http.post('/server/askthehec/ask', {
      name: query.name,
      to: query.to,
      subject: query.subject,
      message: query.message,
      email: query.email
    }).map(res => res.status)
      .catch((error: any) => {
        if (error.status) {
          return Observable.of(error.status);
        } else {
          return Observable.throw(error.message || error);
        }
      });
  };
  getQuery = (id: string): Observable<Query> => {
    return this.http.get('/server/askthehec/asked/' + id)
      .map((res: Response) => res.json() as Query)
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
  respondQuery = (response: string, id: string): Observable<number> => {
    return this.http.post('/server/askthehec/respond/' + id, {'response' : response })
      .map(res => res.status)
      .catch((error: any) => {
        if (error.status) {
          return Observable.of(error.status);
        } else {
          return Observable.throw(error.message || error);
        }
      });
  };
  getResponses = (): Observable<Query[]> => {
    return this.http.get('/server/askthehec/responses')
        .map((res: Response) => res.json() as Query[])
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
    reportQuery = (id: string): Observable<number> => {
        return this.http.get('/server/askthehec/report/' + id)
            .map(res => res.status)
            .catch((error: any) => {
                if (error.status) {
                    return Observable.of(error.status);
                } else {
                    return Observable.throw(error.message || error);
                }
            });
    };
}
