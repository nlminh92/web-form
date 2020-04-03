import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class FormService extends HttpService {

    protected urlApi = environment.apiEndpoint;
    constructor(protected http: HttpClient) {
        super(http);
    }

    // Hàm save đây
    save(data) {
        data['birthday'] = this.dateFormat(data['birthday'], 'yyyy-MM-ddd');
        data['fixture'] = this.dateFormat(data['fixture'], 'yyyy-MM-ddd');
        console.log(data);
        // url nó sẽ là http://localhost:8042/saveData
        return this.POST('/saveData', data).pipe(
            map(response => {
                return response;
            })
        );
    }

    saveDataForm2(data) {
        data['birthday'] = this.dateFormat(data['birthday'], 'yyyy-MM-ddd');
        return this.POST('/saveForm', data).pipe(
            map(response => {
                return response;
            })
        );
    }

    saveDataForm3(data) {
      data['birthday'] = this.dateFormat(data['birthday'], 'yyyy-MM-ddd');
      return this.POST('/saveDataForm', data).pipe(
          map(response => {
              return response;
          })
      );
    }

    export(download_endpoint) {
        return this.http.get(this.urlApi + download_endpoint,
            {responseType: 'blob'});
    }

    dateFormat(dateStr, format) {
        const today = new Date(dateStr);
        const yy = today.getFullYear();
        let mm = today.getMonth();
        mm = mm + 1;
        const zeroString = '00';
        const _mm = zeroString.substring((mm + '').length, 4) + mm;
        const dd = today.getDate();
        const _dd = zeroString.substring((dd + '').length, 4) + dd;
        console.log(format);
        console.log(format == 'yyyy-MM-ddd');

        if (format == 'dd/MM/yyyy') {
            return _dd + '/' + _mm + '/' + yy;
        } if (format == 'yyyy-MM-ddd') {
            return yy + '-' + _mm + '-' + _dd;
        } else {
            return _mm + '/' + _dd + '/' + yy;
        }
    }
}
