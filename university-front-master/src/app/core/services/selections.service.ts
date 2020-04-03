import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/http.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class SelectionService extends HttpService {
    constructor(protected http: HttpClient) {
        super(http);
    }

    getProvinces() {
        return this.GET('/provinces').pipe(
            map(response => {
                return response;
            })
        );
    }

    getCareers() {
        return this.GET('/careers').pipe(
            map(response => {
                return response;
            })
        );
    }

    getCareersForm() {
        return this.GET('/careers-form').pipe(
            map(response => {
                return response;
            })
        );
    }

    getCombination() {
        return this.GET('/combination').pipe(
            map(response => {
                return response;
            })
        );
    }

    getDistricts(province_id) {
        return this.GET(`/districts?province_id=${province_id}`).pipe(
            map(response => {
                return response;
            })
        );
    }

    getWards(district_id) {
        return this.GET(`/wards?district_id=${district_id}`).pipe(
            map(response => {
                return response;
            })
        );
    }
}
