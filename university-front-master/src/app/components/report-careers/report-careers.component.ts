import {Component, OnInit} from '@angular/core';
import {ReportService} from '@app/core/services/report.service';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import {SessionService} from '@app/core/services/session.service';

@Component({
    selector: 'app-report-careers',
    templateUrl: './report-careers.component.html',
    styleUrls: ['./report-careers.component.scss']
})
export class ReportCareersComponent implements OnInit {
    data = [];
    displayedColumns = ['stt', 'career', 'count'];
    dataSource = new MatTableDataSource([]);
    dataSourceForm = new MatTableDataSource([]);
    list_sessions = [];
    session_id = -1;

    constructor(
        private reportService: ReportService,
        private sessionService: SessionService
    ) {
    }

    ngOnInit() {
        this.getSessions();
    }

    getSessions() {
        this.list_sessions.push({id: -1, name: 'Tất cả'});
        this.sessionService.index().subscribe(res => {
            this.list_sessions = res.data;
            this.data = res.data;
            if (res.data.length > 0) {
                this.session_id = res.data[res.data.length - 1].id;
                this.getData();
                this.getDataForm();
            }
        });
    }

    getData() {
        this.reportService.getReportCareer(this.session_id).subscribe(res => {
            this.dataSource = new MatTableDataSource(res.data);
        });
    }
    getDataForm() {
        this.reportService.getReportCareerForm(this.session_id).subscribe(res => {
            this.dataSourceForm = new MatTableDataSource(res.data);
        });
    }

    changeSession(event) {
        this.session_id = event.value;
        this.getData();
    }

}
