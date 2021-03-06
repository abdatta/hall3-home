import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Http, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '../http.client';

import { News } from '../../models/news';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews = (): Observable<object[]> => {
    return this.http.get('/server/news')
        .pipe(
            map((res: Response) => res.json() as object[]),
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
  }

    getTopNews = (): Observable<object[]> => {
        return this.http.get('/server/news/top')
            .pipe(
                map((res: Response) => res.json() as object[]),
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
    }

    getCatNews = (cat: string | string[]): Observable<object[]> => {
        if (typeof cat !== 'string') {
            cat = cat.join('&category=');
        }
        return this.http.get('/server/news/filter?category=' + encodeURIComponent(cat))
            .pipe(
                map((res: Response) => res.json() as object[]),
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
    }

    getUserNews = (name: string): Observable<object[]> => {
        return this.http.get('/server/news/filter?by=' + encodeURIComponent(name))
            .pipe(
                map((res: Response) => res.json() as object[]),
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
    }

    getOneNews = (id: string): Observable<object> => {
        return this.http.get('/server/news/id/' + id)
            .pipe(
                map((res: Response) => res.json() as object),
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
    }

  addNews = (news: object): Observable<number> => {
      return this.http.post('/server/news/add', news)
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

    updateNews = (news: object, id: string): Observable<number> => {
        return this.http.post('/server/news/update/' + id, news)
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

    subscribe = (cat: string, id: string): Observable<number> => {
        return this.http.post('/server/news/subscribe/', { cat, id })
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

    unsubscribe = (cat: string, id: string): Observable<number> => {
        return this.http.post('/server/news/unsubscribe/', { cat, id })
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

    upsertMailList(list_name: string, emails: string[]) {
        return this.http.post('/server/news/mail_list/upsert', { list_name, emails })
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

    getMailLists(onlyListNames?: boolean): Observable<object[]> {
        return this.http.get('/server/news/mail_lists' + (onlyListNames ? '?select=list_name' : ''))
            .pipe(
                map((res: Response) => res.json() as {list_name: string, emails: string[]}[]),
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
    }

    deleteMailList(list_name) {
        return this.http.delete('/server/news/mail_list/delete?list_name=' + encodeURIComponent(list_name))
            .pipe(
                map(res => res.status),
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
    }
}
