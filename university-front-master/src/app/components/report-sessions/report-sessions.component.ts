import { Component, OnInit } from '@angular/core';
import { ReportService } from '@app/core/services/report.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SessionService } from '@app/core/services/session.service';
import * as fs from 'file-saver';
import * as Excel from 'exceljs/dist/exceljs.min.js';
import * as moment from 'moment';
import * as ExcelProper from 'exceljs';
import {element} from 'protractor';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-report-sessions',
  templateUrl: './report-sessions.component.html',
  styleUrls: ['./report-sessions.component.scss']
})
export class ReportSessionsComponent implements OnInit {

    list_sessions = [];
    data = [];
    displayedColumns = ['stt', 'typee', 'code', 'name', 'mobilephone', 'email', 'created_at'];
    dataSource = new MatTableDataSource([]);
    session_id = -1;
    from_time = new Date();
    to_time = new Date();
    constructor(
        private reportService: ReportService,
        private sessionService: SessionService
    ) { }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.reportService.getReportSession({from_time: this.from_time, to_time: this.to_time}).subscribe(res => {
            this.data = res.data;
            this.dataSource = new MatTableDataSource(res.data);
        })
    }

    exportExcel() {
        const format = 'dd/MM/yyyy';
        const locale = 'en-US';
        const title = 'Danh sách đăng ký';
        const header = ['STT', 'Họ tên', 'Giới tính', 'Ngày sinh', 'Nơi sinh', 'Số Chứng minh nhân dân / Thẻ căn cước công dân',
            'Địa chỉ liên hệ', 'Điện thoại liên hệ', 'Email', "Năm lớp 10", "Mã tỉnh", "Mã trường", "Năm lớp 11", "Mã tỉnh", "Mã trường", "Năm lớp 12", "Mã tỉnh", "Mã trường",
            'Năm tốt nghiệp', 'Khu vực', 'Đối tượng ưu tiên', 'Ngày thi đánh giá năng lực', 'Số báo danh', 'Điểm thi', 'Ngành 1', 'Mã ngành',
            'Ngành 2', 'Mã ngành', 'Ngành 3', 'Mã ngành', 'Ngành 4', 'Mã ngành'];

        const workbook: ExcelProper.Workbook = new Excel.Workbook();
        const worksheet = workbook.addWorksheet(title);

        let titleRow = worksheet.addRow([title]);

        worksheet.addRow([]);
        const headerRow = worksheet.addRow(header);
        headerRow.eachCell((cell, number) => {
            cell.border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            cell.font = {bold: true};
        });

        let arr_data = [];
        let i = 0;
        this.data.forEach(element => {
            i ++;
            arr_data.push(
                [
                    i,
                    element.name,
                    element.gender,
                    element.birthday,
                    element.place_of_birth,
                    element.identity_card,
                    element.address,
                    element.mobilephone,
                    element.email,
                    element.grade_ten,
                    element.grade_ten_province_code,
                    element.grade_ten_school_code,
                    element.grade_eleven,
                    element.grade_eleven_province_code,
                    element.grade_eleven_school_code,
                    element.grade_twelve,
                    element.grade_twelve_province_code,
                    element.grade_twelve_school_code,
                    element.graduate_year,
                    element.area,
                    element.priority,
                    element.fixture,
                    element.registration_number,
                    element.point,
                    element.career_1_name,
                    element.career_1_code,
                    element.career_2_name,
                    element.career_2_code,
                    element.career_3_name,
                    element.career_3_code,
                    element.career_4_name,
                    element.career_4_code
                ]
            );
        });

        arr_data.forEach(d => {
            worksheet.addRow(d);
        });

        workbook.xlsx.writeBuffer().then((data) => {
            let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            fs.saveAs(blob, 'thong_ke.xlsx');
        });
    }


}
