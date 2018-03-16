import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Http, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '../http.client';

import { News } from '../../models/news';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

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

    getTopNews = (): Observable<object[]> => {
        return this.http.get('/server/news/top')
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

    getCatNews = (cat: string | string[]): Observable<object[]> => {
        if(typeof cat !== 'string')
            cat = cat.join('&category=');
        return this.http.get('/server/news/filter?category=' + cat)
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

    getUserNews = (name: string): Observable<object[]> => {
        return this.http.get('/server/news/filter?by=' + name)
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

    getOneNews = (id: string): Observable<object> => {
        return this.http.get('/server/news/id/' + id)
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

    updateNews = (news: object, id: string): Observable<number> => {
        return this.http.post('/server/news/update/' + id, news)
            .map(res => res.status)
            .catch((error: any) => {
                if (error.status) {
                    return Observable.of(error.status);
                } else {
                    return Observable.throw(error.message || error);
                }
            });
    };

    subscribe = (cat: string, id: string): Observable<number> => {
        return this.http.post('/server/news/subscribe/', {
            'cat': cat,
            'id' : id
            })
            .map(res => res.status)
            .catch((error: any) => {
                if (error.status) {
                    return Observable.of(error.status);
                } else {
                    return Observable.throw(error.message || error);
                }
            });
    }

    unsubscribe = (cat: string, id: string): Observable<number> => {
        return this.http.post('/server/news/unsubscribe/', {
         'cat': cat,
         'id' : id
     })
            .map(res => res.status)
            .catch((error: any) => {
                if (error.status) {
                    return Observable.of(error.status);
                } else {
                    return Observable.throw(error.message || error);
                }
            });
    }
}
