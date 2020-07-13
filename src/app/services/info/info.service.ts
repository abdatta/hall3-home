import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/*import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';*/

import { Response, RequestOptions } from '@angular/http';
import { HttpClient } from '../http.client';

@Injectable()
export class InfoService {

  constructor( private http: HttpClient ) {}

  getAdministrationInfo = (id: string): Observable<object> => this.getInfo('administration', id);
  updateAdministrationInfo = (id: string, diff: object[]): Observable<number> => this.updateInfo('administration', id, diff);

  getPeopleInfo = (id: string): Observable<object> => this.getInfo('people', id);
  updatePeopleInfo = (id: string, diff: object[]): Observable<number> => this.updateInfo('people', id, diff);

  getFacilityInfo = (id: string): Observable<object> => this.getInfo('facilities', id);
  updateFacilityInfo = (id: string, diff: object[]): Observable<number> => this.updateInfo('facilities', id, diff);

  getOneAlumnus = (value: string): Observable<object> => this.getFilteredData('alumni','id', value);
  
  private getInfo(category: string, id: string): Observable<object> {
    return this.http.get(`/server/info/${category}/${id}`)
      .pipe(
        map((res: Response) => res.json() as object),
        catchError((error: any) => {
          if (error.status) {
            return of({
              'err': error.status,
              'info': [{ name: 'Oops! Some Error Ocurred' }]
            });
          } else {
            return Observable.throw(error.json().error || error.message || error);
          }
        })
      );
  }

  private updateInfo(category: string, id: string, diff: object[]): Observable<number> {
    return this.http.post(`/server/info/${category}/${id}`, { diff: diff })
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

  private getFilteredData = (category: string, field: string, value: string): Observable<object> => {
    return this.http.get(`/server/info/people/${category}?${field}=${value}`)
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
}
