import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';

/*import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/observable/fromPromise';*/

@Injectable()
export class HttpClient {

  private localIP: string;

  constructor(private http: Http) {}

  addLocalIP(headers: Headers) {
    if (window['localIP']) {
      headers.append('localip', window['localIP']);
    }
  }

  get(url: any, options: RequestOptionsArgs = {}) {
    options.headers = options.headers || new Headers();
    this.addLocalIP(options.headers);
    return this.http.get(url, options);
  }

  post(url: string, body: any, options: RequestOptionsArgs = {}) {
    options.headers = options.headers || new Headers();
    this.addLocalIP(options.headers);
    return this.http.post(url, body, options);
  }

  delete(url: string, options: RequestOptionsArgs = {}) {
    options.headers = options.headers || new Headers();
    this.addLocalIP(options.headers);
    return this.http.delete(url, options);
  }
}
