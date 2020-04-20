import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/http.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})


@Injectable({
  providedIn: 'root'
})
export class SessionService extends HttpService {
    constructor(protected http: HttpClient) {
        super(http);
    }

    index() {
        return this.GET(`/sessions`).pipe(
            map(response => {
                return response;
            })
        );
    }

    create(data) {
        return this.POST('/sessions', data).pipe(
            map(response => {
                return response;
            })
        );
    }

    destroy(id) {
        return this.POST('/session_destroy', {id: id}).pipe(
            map(response => {
                return response;
            })
        );
    }
}
