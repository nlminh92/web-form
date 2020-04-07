import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/http.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ReportService extends HttpService {
    constructor(protected http: HttpClient) {
        super(http);
    }

    getCurriculums(session_id) {
        return this.GET(`/curriculumns?session_id=${session_id}`).pipe(
            map(response => {
                return response;
            })
        );
    }

    getReportCareer(session_id) {
        return this.GET(`/report-careers?session_id=${session_id}`).pipe(
            map(response => {
                return response;
            })
        );
    }

    getReportCareerForm(session_id) {
        return this.GET(`/report-careers-form?session_id=${session_id}`).pipe(
            map(response => {
                return response;
            })
        );
    }

    getReportSession(data) {
        return this.POST('/report-sessions', data).pipe(
            map(response => {
                return response;
            })
        );
    }
}
