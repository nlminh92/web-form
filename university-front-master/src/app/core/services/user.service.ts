import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/http.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class UserService extends HttpService {
    constructor(protected http: HttpClient) {
        super(http);
    }

    logIn(data) {
        return this.POST('/sign_in', data).pipe(
            map(response => {
                return response;
            })
        );
    }
}
