import { Component, OnInit } from '@angular/core';
import { SessionService } from '@app/core/services/session.service';
import {MatDialog} from '@angular/material/dialog';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ReportService } from '@app/core/services/report.service';

import * as fs from 'file-saver';
import * as Excel from 'exceljs/dist/exceljs.min.js';
import * as moment from 'moment';
import * as ExcelProper from 'exceljs';
import {element} from 'protractor';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-list-curriculums',
  templateUrl: './list-curriculums.component.html',
  styleUrls: ['./list-curriculums.component.scss']
})
export class ListCurriculumsComponent implements OnInit {
    list_sessions = [];
    data = [];
    displayedColumns = ['stt', 'typee', 'code', 'name', 'gender', 'birthday', 'mobilephone', 'email', 'identity_card'];
    dataSource = new MatTableDataSource([]);
    session_id = -1;
    constructor(
        private sessionService: SessionService,
        private reportService: ReportService
    ) { }

  ngOnInit() {
        this.getSessions();
  }

  getSessions() {
        this.list_sessions.push({id: -1, name: "Tất cả"});
        this.sessionService.index().subscribe(res => {
            this.list_sessions = res.data;
            if(res.data.length > 0) {
                this.session_id = res.data[res.data.length - 1].id;
                this.getData();
            }
        })
  }

  changeSession(event) {
        this.session_id = event.value;
        this.getData();
  }

  getData() {
        this.reportService.getCurriculums(this.session_id).subscribe(res => {
            this.dataSource = new MatTableDataSource(res.data);
            this.data = res.data;
        })
  }

  exportExcel() {
      const format = 'dd/MM/yyyy';
      const locale = 'en-US';
      const title = 'Danh sách đăng ký';
      const header = ['STT', 'Loại form', 'Mã hồ sơ', 'Họ tên', 'Giới tính', 'Ngày sinh', 'Nơi sinh', 'Số CMND / Thẻ CCCD',
          'Địa chỉ liên hệ', 'Điện thoại liên hệ', 'Email', "Năm lớp 10", "Mã tỉnh lớp 10", "Mã trường lớp 10", "Năm lớp 11", "Mã tỉnh lớp 11", "Mã trường lớp 11", "Năm lớp 12", "Mã tỉnh lớp 12", "Mã trường lớp 12",
          'Năm tốt nghiệp', 'Khu vực', 'Ưu tiên', 'Ngày thi đánh giá năng lực', 'Số báo danh', 'Điểm thi', 'Ngành 1 (Form1)', 'Ngành 2 (Form2)', 'Ngành 3 (Form1)', 'Ngành 4 (Form1)',
          'Dân tộc', 'Ngày cấp CMND', 'Nơi cấp CMND', 'Hộ khẩu thường trú', 'Mã tỉnh (Hộ khẩu)', 'Mã huyện (Hộ khẩu)', 'Mã xã(Hộ khẩu)',
          'Ngành 1(form2)', 'Tổ hợp ngành 1', 'Điểm tb 1', 'Điểm tb 2', 'Điểm tb 3',
          'Ngành 2(form2)', 'Tổ hợp ngành 2', 'Điểm tb 1', 'Điểm tb 2', 'Điểm tb 3',
          'Ngành 3(form2)', 'Tổ hợp ngành 3', 'Điểm tb 1', 'Điểm tb 2', 'Điểm tb 3',
          'Ngành 4(form2)', 'Tổ hợp ngành 4', 'Điểm tb 1', 'Điểm tb 2', 'Điểm tb 3',
          'Ngành 5(form2)', 'Tổ hợp ngành 5', 'Điểm tb 1', 'Điểm tb 2', 'Điểm tb 3',
          'Ngành 6(form2)', 'Tổ hợp ngành 6', 'Điểm tb 1', 'Điểm tb 2', 'Điểm tb 3',
          'Ngành 7(form2)', 'Tổ hợp ngành 7', 'Điểm tb 1', 'Điểm tb 2', 'Điểm tb 3',
          'Ngành 8(form2)', 'Tổ hợp ngành 8', 'Điểm tb 1', 'Điểm tb 2', 'Điểm tb 3',
          'Ngành 9(form2)', 'Tổ hợp ngành 9', 'Điểm tb 1', 'Điểm tb 2', 'Điểm tb 3',
          'Ngành 10(form2)', 'Tổ hợp ngành 10', 'Điểm tb 1', 'Điểm tb 2', 'Điểm tb 3', 'Ảnh'];

      const workbook: ExcelProper.Workbook = new Excel.Workbook();
      const worksheet = workbook.addWorksheet(title);

      let titleRow = worksheet.addRow([title]);

      worksheet.addRow([]);
      const headerRow = worksheet.addRow(header);
      headerRow.eachCell((cell, number) => {
          cell.border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
          cell.font = {bold: true};
          worksheet.getColumn(4).width = 30;
          worksheet.getColumn(7).width = 60;
          worksheet.getColumn(8).width = 30;
          worksheet.getColumn(9).width = 90;
          worksheet.getColumn(10).width = 20;
          worksheet.getColumn(11).width = 40;
          worksheet.getColumn(12).width = 30;
          worksheet.getColumn(15).width = 30;
          worksheet.getColumn(18).width = 30;
          worksheet.getColumn(25).width = 15;
          worksheet.getColumn(27).width = 30;
          worksheet.getColumn(28).width = 30;
          worksheet.getColumn(29).width = 30;
          worksheet.getColumn(30).width = 30;
          worksheet.getColumn(33).width = 30;
          worksheet.getColumn(38).width = 30;
          worksheet.getColumn(43).width = 30;
          worksheet.getColumn(48).width = 30;
          worksheet.getColumn(53).width = 30;
          worksheet.getColumn(58).width = 30;
          worksheet.getColumn(63).width = 30;
          worksheet.getColumn(68).width = 30;
          worksheet.getColumn(73).width = 30;
          worksheet.getColumn(78).width = 30;
          worksheet.getColumn(83).width = 30;
          worksheet.getColumn(88).width = 30;
          worksheet.getColumn(6).width = 20;
          worksheet.getColumn(13).width = 20;
          worksheet.getColumn(14).width = 20;
          worksheet.getColumn(16).width = 20;
          worksheet.getColumn(17).width = 20;
          worksheet.getColumn(19).width = 20;
          worksheet.getColumn(20).width = 20;
          worksheet.getColumn(21).width = 20;
          worksheet.getColumn(24).width = 25;
          worksheet.getColumn(32).width = 20;
          worksheet.getColumn(34).width = 25;
          worksheet.getColumn(35).width = 25;
          worksheet.getColumn(36).width = 25;
          worksheet.getColumn(37).width = 25;
          worksheet.getColumn(39).width = 20;
          worksheet.getColumn(44).width = 20;
          worksheet.getColumn(49).width = 20;
          worksheet.getColumn(54).width = 20;
          worksheet.getColumn(59).width = 20;
          worksheet.getColumn(64).width = 20;
          worksheet.getColumn(69).width = 20;
          worksheet.getColumn(74).width = 20;
          worksheet.getColumn(79).width = 20;
          worksheet.getColumn(84).width = 20;
      });

      let arr_data = [];
       let i = 0;
      this.data.forEach(element => {
          i ++;
          arr_data.push(
              [
                  i,
                  element.typee,
                  element.code,
                  element.name,
                  element.gender,
                  element.birthday,
                  element.place_of_birth2,
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
                  element.career_2_name,
                  element.career_3_name,
                  element.career_4_name,
                  element.nation,
                  element.identity_card_date,
                  element.identity_card_address,
                  element.permanent_residence,
                  element.province_code,
                  element.district_code,
                  element.village_code,
                  element.career_form_1_name,
                  element.combination1_code,
                  element.diemtb11,
                  element.diemtb12,
                  element.diemtb13,

                  element.career_form_2_name,
                  element.combination2,
                  element.diemtb21,
                  element.diemtb22,
                  element.diemtb23,

                  element.career_form_3_name,
                  element.combination3,
                  element.diemtb31,
                  element.diemtb32,
                  element.diemtb33,

                  element.career_form_4_name,
                  element.combination4,
                  element.diemtb41,
                  element.diemtb42,
                  element.diemtb43,

                  element.career_form_5_name,
                  element.combination5,
                  element.diemtb51,
                  element.diemtb52,
                  element.diemtb53,

                  element.career_form_6_name,
                  element.combination6,
                  element.diemtb61,
                  element.diemtb62,
                  element.diemtb63,

                  element.career_form_7_name,
                  element.combination7,
                  element.diemtb71,
                  element.diemtb72,
                  element.diemtb73,

                  element.career_form_8_name,
                  element.combination8,
                  element.diemtb81,
                  element.diemtb82,
                  element.diemtb83,

                  element.career_form_9_name,
                  element.combination9,
                  element.diemtb91,
                  element.diemtb92,
                  element.diemtb93,

                  element.career_form_10_name,
                  element.combination10,
                  element.diemtb101,
                  element.diemtb102,
                  element.diemtb103,

                  element.image
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
