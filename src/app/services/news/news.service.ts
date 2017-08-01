import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Http, Response, RequestOptions } from '@angular/http';

import { News } from '../../models/news';

@Injectable()
export class NewsService {

  constructor(private http: Http) { }

  getNews = (): Observable<object[]> => {
    return this.http.get('/server/news')
        .map((res: Response) => res.json() as object[])
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

  addNews = (news: object): Observable<number> => {
      return this.http.post('/server/news/add', news)
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
