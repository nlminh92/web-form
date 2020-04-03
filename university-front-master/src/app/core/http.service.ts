import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})
export abstract class HttpService {

    protected urlApi = environment.apiEndpoint;
    protected headers: HttpHeaders;

    constructor(protected http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers.set('Content-Type', 'application/json');
        this.headers.set('Accept', 'application/json');
    }

    protected GET(api, customEndpoint?): Observable<any> {
        return this.http
            .get(customEndpoint ? customEndpoint + api : this.urlApi + api, { headers: this.headers });

    }

    protected GETPDF(api, customEndpoint?): Observable<any> {
        this.headers = new HttpHeaders();
        this.headers.set('Content-Type', 'application/json');
        this.headers.set('Accept', 'application/pdf');
        return this.http
            .get(customEndpoint ? customEndpoint + api : this.urlApi + api, { headers: this.headers, responseType: 'blob' as 'json' });

    }

    protected POST(api, data): Observable<any> {
        return this.http
            .post(this.urlApi + api, data, { headers: this.headers });
    }

    protected POSTBINARY(api, data): Observable<any> {
        return this.http
            .post(this.urlApi + api, data, { responseType: 'arraybuffer', headers: this.headers });
    }

    protected PUT(api, data): Observable<any> {
        return this.http
            .put(this.urlApi + api, data, { headers: this.headers });
    }

    protected DELETE(api, data): Observable<any> {
        return this.http.request('delete', this.urlApi + api, { body: data, headers: this.headers });
    }

    protected POSTERROR(api, data): Observable<any> {
        return this.http
            .post(this.urlApi + api, data, { headers: this.headers });

    }
}
