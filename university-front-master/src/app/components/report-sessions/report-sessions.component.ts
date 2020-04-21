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
    displayedColumns = ['stt', 'typee', 'code', 'created_at', 'name', 'mobilephone', 'email'];
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
        const title = 'Danh sach dang ky';
        const header = ['STT', 'Loại form', 'Mã hồ sơ', 'Thoi gian tao', 'Họ tên', 'Giới tính', 'Ngày sinh', 'Nơi sinh', 'Số CMND / Thẻ CCCD',
            'Địa chỉ liên hệ', 'Điện thoại liên hệ', 'Email', "Năm lớp 10", "Mã tỉnh lớp 10", "Mã trường lớp 10", "Năm lớp 11", "Mã tỉnh lớp 11", "Mã trường lớp 11", "Năm lớp 12", "Mã tỉnh lớp 12", "Mã trường lớp 12",
            'Năm tốt nghiệp', 'Khu vực', 'Ưu tiên', 'Ngày thi đánh giá năng lực', 'Số báo danh', 'Điểm thi', 'Ngành 1 (Form1)', 'Ngành 2 (Form2)', 'Ngành 3 (Form1)', 'Ngành 4 (Form1)',
            'Dân tộc', 'Ngày cấp CMND', 'Nơi cấp CMND', 'Hộ khẩu thường trú', 'Mã tỉnh (Hộ khẩu)', 'Mã huyện (Hộ khẩu)', 'Mã xã(Hộ khẩu)',
            'Ngành 1(form2)', 'Tổ hợp ngành 1', 'Điểm tb 1 (Lớp 10)', 'Điểm tb 2 (Lớp 10)', 'Điểm tb 3 (Lớp 10)', 'Điểm tb 1 (Lớp 11)', 'Điểm tb 2 (Lớp 11)', 'Điểm tb 3 (Lớp 11)', 'Lựa chọn', 'Điểm tb 1 (Lớp 12)', 'Điểm tb 2 (Lớp 12)', 'Điểm tb 3 (Lớp 12)',
            'Ngành 2(form2)', 'Tổ hợp ngành 2', 'Điểm tb 1 (Lớp 10)', 'Điểm tb 2 (Lớp 10)', 'Điểm tb 3 (Lớp 10)', 'Điểm tb 1 (Lớp 11)', 'Điểm tb 2 (Lớp 11)', 'Điểm tb 3 (Lớp 11)', 'Lựa chọn', 'Điểm tb 1 (Lớp 12)', 'Điểm tb 2 (Lớp 12)', 'Điểm tb 3 (Lớp 12)',
            'Ngành 3(form2)', 'Tổ hợp ngành 3', 'Điểm tb 1 (Lớp 10)', 'Điểm tb 2 (Lớp 10)', 'Điểm tb 3 (Lớp 10)', 'Điểm tb 1 (Lớp 11)', 'Điểm tb 2 (Lớp 11)', 'Điểm tb 3 (Lớp 11)', 'Lựa chọn', 'Điểm tb 1 (Lớp 12)', 'Điểm tb 2 (Lớp 12)', 'Điểm tb 3 (Lớp 12)',
            'Ngành 4(form2)', 'Tổ hợp ngành 4', 'Điểm tb 1 (Lớp 10)', 'Điểm tb 2 (Lớp 10)', 'Điểm tb 3 (Lớp 10)', 'Điểm tb 1 (Lớp 11)', 'Điểm tb 2 (Lớp 11)', 'Điểm tb 3 (Lớp 11)', 'Lựa chọn', 'Điểm tb 1 (Lớp 12)', 'Điểm tb 2 (Lớp 12)', 'Điểm tb 3 (Lớp 12)',
            'Ngành 5(form2)', 'Tổ hợp ngành 5', 'Điểm tb 1 (Lớp 10)', 'Điểm tb 2 (Lớp 10)', 'Điểm tb 3 (Lớp 10)', 'Điểm tb 1 (Lớp 11)', 'Điểm tb 2 (Lớp 11)', 'Điểm tb 3 (Lớp 11)', 'Lựa chọn', 'Điểm tb 1 (Lớp 12)', 'Điểm tb 2 (Lớp 12)', 'Điểm tb 3 (Lớp 12)',
            'Ngành 6(form2)', 'Tổ hợp ngành 6', 'Điểm tb 1 (Lớp 10)', 'Điểm tb 2 (Lớp 10)', 'Điểm tb 3 (Lớp 10)', 'Điểm tb 1 (Lớp 11)', 'Điểm tb 2 (Lớp 11)', 'Điểm tb 3 (Lớp 11)', 'Lựa chọn', 'Điểm tb 1 (Lớp 12)', 'Điểm tb 2 (Lớp 12)', 'Điểm tb 3 (Lớp 12)',
            'Ngành 7(form2)', 'Tổ hợp ngành 7', 'Điểm tb 1 (Lớp 10)', 'Điểm tb 2 (Lớp 10)', 'Điểm tb 3 (Lớp 10)', 'Điểm tb 1 (Lớp 11)', 'Điểm tb 2 (Lớp 11)', 'Điểm tb 3 (Lớp 11)', 'Lựa chọn', 'Điểm tb 1 (Lớp 12)', 'Điểm tb 2 (Lớp 12)', 'Điểm tb 3 (Lớp 12)',
            'Ngành 8(form2)', 'Tổ hợp ngành 8', 'Điểm tb 1 (Lớp 10)', 'Điểm tb 2 (Lớp 10)', 'Điểm tb 3 (Lớp 10)', 'Điểm tb 1 (Lớp 11)', 'Điểm tb 2 (Lớp 11)', 'Điểm tb 3 (Lớp 11)', 'Lựa chọn', 'Điểm tb 1 (Lớp 12)', 'Điểm tb 2 (Lớp 12)', 'Điểm tb 3 (Lớp 12)',
            'Ngành 9(form2)', 'Tổ hợp ngành 9', 'Điểm tb 1 (Lớp 10)', 'Điểm tb 2 (Lớp 10)', 'Điểm tb 3 (Lớp 10)', 'Điểm tb 1 (Lớp 11)', 'Điểm tb 2 (Lớp 11)', 'Điểm tb 3 (Lớp 11)', 'Lựa chọn', 'Điểm tb 1 (Lớp 12)', 'Điểm tb 2 (Lớp 12)', 'Điểm tb 3 (Lớp 12)',
            'Ngành 10(form2)', 'Tổ hợp ngành 10', 'Điểm tb 1 (Lớp 10)', 'Điểm tb 2 (Lớp 10)', 'Điểm tb 3 (Lớp 10)', 'Điểm tb 1 (Lớp 11)', 'Điểm tb 2 (Lớp 11)', 'Điểm tb 3 (Lớp 11)', 'Lựa chọn', 'Điểm tb 1 (Lớp 12)', 'Điểm tb 2 (Lớp 12)', 'Điểm tb 3 (Lớp 12)'];

        const workbook: ExcelProper.Workbook = new Excel.Workbook();
        const worksheet = workbook.addWorksheet(title);

        let titleRow = worksheet.addRow([title]);

        worksheet.addRow([]);
        const headerRow = worksheet.addRow(header);
        headerRow.eachCell((cell, number) => {
            cell.border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            cell.font = {bold: true};
            worksheet.getColumn(4).width = 30;
            worksheet.getColumn(5).width = 30;
            worksheet.getColumn(7).width = 20;
            worksheet.getColumn(8).width = 60;
            worksheet.getColumn(9).width = 30;
            worksheet.getColumn(10).width = 90;
            worksheet.getColumn(11).width = 20;
            worksheet.getColumn(12).width = 40;
            worksheet.getColumn(13).width = 30;
            worksheet.getColumn(14).width = 20;
            worksheet.getColumn(15).width = 20;
            worksheet.getColumn(16).width = 30;
            worksheet.getColumn(17).width = 20;
            worksheet.getColumn(18).width = 20;
            worksheet.getColumn(19).width = 30;
            worksheet.getColumn(20).width = 20;
            worksheet.getColumn(21).width = 20;
            worksheet.getColumn(22).width = 20;
            worksheet.getColumn(25).width = 25;
            worksheet.getColumn(26).width = 15;
            worksheet.getColumn(28).width = 50;
            worksheet.getColumn(29).width = 50;
            worksheet.getColumn(30).width = 50;
            worksheet.getColumn(31).width = 50;
            worksheet.getColumn(33).width = 20;
            worksheet.getColumn(34).width = 30;
            worksheet.getColumn(35).width = 25;
            worksheet.getColumn(36).width = 25;
            worksheet.getColumn(37).width = 25;
            worksheet.getColumn(38).width = 25;
            worksheet.getColumn(39).width = 50;
            worksheet.getColumn(40).width = 20;
            worksheet.getColumn(41).width = 20;
            worksheet.getColumn(42).width = 20;
            worksheet.getColumn(43).width = 20;
            worksheet.getColumn(44).width = 20;
            worksheet.getColumn(45).width = 20;
            worksheet.getColumn(46).width = 20;
            worksheet.getColumn(47).width = 50;
            worksheet.getColumn(48).width = 20;
            worksheet.getColumn(49).width = 20;
            worksheet.getColumn(50).width = 20;

            worksheet.getColumn(51).width = 50;
            worksheet.getColumn(52).width = 20;
            worksheet.getColumn(53).width = 20;
            worksheet.getColumn(54).width = 20;
            worksheet.getColumn(55).width = 20;
            worksheet.getColumn(56).width = 20;
            worksheet.getColumn(57).width = 20;
            worksheet.getColumn(58).width = 20;
            worksheet.getColumn(59).width = 50;
            worksheet.getColumn(60).width = 20;
            worksheet.getColumn(61).width = 20;
            worksheet.getColumn(62).width = 20;

            worksheet.getColumn(63).width = 50;
            worksheet.getColumn(64).width = 20;
            worksheet.getColumn(65).width = 20;
            worksheet.getColumn(66).width = 20;
            worksheet.getColumn(67).width = 20;
            worksheet.getColumn(68).width = 20;
            worksheet.getColumn(69).width = 20;
            worksheet.getColumn(70).width = 20;
            worksheet.getColumn(71).width = 50;
            worksheet.getColumn(72).width = 20;
            worksheet.getColumn(73).width = 20;
            worksheet.getColumn(74).width = 20;

            worksheet.getColumn(75).width = 50;
            worksheet.getColumn(76).width = 20;
            worksheet.getColumn(77).width = 20;
            worksheet.getColumn(78).width = 20;
            worksheet.getColumn(79).width = 20;
            worksheet.getColumn(80).width = 20;
            worksheet.getColumn(81).width = 20;
            worksheet.getColumn(82).width = 20;
            worksheet.getColumn(83).width = 50;
            worksheet.getColumn(84).width = 20;
            worksheet.getColumn(85).width = 20;
            worksheet.getColumn(86).width = 20;

            worksheet.getColumn(87).width = 20;
            worksheet.getColumn(88).width = 20;
            worksheet.getColumn(89).width = 20;
            worksheet.getColumn(90).width = 20;
            worksheet.getColumn(91).width = 20;
            worksheet.getColumn(92).width = 20;
            worksheet.getColumn(93).width = 20;
            worksheet.getColumn(94).width = 20;
            worksheet.getColumn(95).width = 50;
            worksheet.getColumn(96).width = 20;
            worksheet.getColumn(97).width = 20;
            worksheet.getColumn(98).width = 20;

            worksheet.getColumn(99).width = 20;
            worksheet.getColumn(100).width = 20;
            worksheet.getColumn(101).width = 20;
            worksheet.getColumn(102).width = 20;
            worksheet.getColumn(103).width = 20;
            worksheet.getColumn(104).width = 20;
            worksheet.getColumn(105).width = 20;
            worksheet.getColumn(106).width = 20;
            worksheet.getColumn(107).width = 50;
            worksheet.getColumn(108).width = 20;
            worksheet.getColumn(109).width = 20;
            worksheet.getColumn(110).width = 20;

            worksheet.getColumn(111).width = 20;
            worksheet.getColumn(112).width = 20;
            worksheet.getColumn(113).width = 20;
            worksheet.getColumn(114).width = 20;
            worksheet.getColumn(115).width = 20;
            worksheet.getColumn(116).width = 20;
            worksheet.getColumn(117).width = 20;
            worksheet.getColumn(118).width = 20;
            worksheet.getColumn(119).width = 50;
            worksheet.getColumn(120).width = 20;
            worksheet.getColumn(121).width = 20;
            worksheet.getColumn(122).width = 20;

            worksheet.getColumn(123).width = 20;
            worksheet.getColumn(124).width = 20;
            worksheet.getColumn(125).width = 20;
            worksheet.getColumn(126).width = 20;
            worksheet.getColumn(127).width = 20;
            worksheet.getColumn(128).width = 20;
            worksheet.getColumn(129).width = 20;
            worksheet.getColumn(130).width = 20;
            worksheet.getColumn(131).width = 50;
            worksheet.getColumn(132).width = 20;
            worksheet.getColumn(133).width = 20;
            worksheet.getColumn(134).width = 20;

            worksheet.getColumn(135).width = 20;
            worksheet.getColumn(136).width = 20;
            worksheet.getColumn(137).width = 20;
            worksheet.getColumn(138).width = 20;
            worksheet.getColumn(139).width = 20;
            worksheet.getColumn(140).width = 20;
            worksheet.getColumn(141).width = 20;
            worksheet.getColumn(142).width = 20;
            worksheet.getColumn(143).width = 50;
            worksheet.getColumn(144).width = 20;
            worksheet.getColumn(145).width = 20;
            worksheet.getColumn(146).width = 20;

            worksheet.getColumn(147).width = 20;
            worksheet.getColumn(148).width = 20;
            worksheet.getColumn(149).width = 20;
            worksheet.getColumn(150).width = 20;
            worksheet.getColumn(151).width = 20;
            worksheet.getColumn(152).width = 20;
            worksheet.getColumn(153).width = 20;
            worksheet.getColumn(154).width = 20;
            worksheet.getColumn(155).width = 50;
            worksheet.getColumn(156).width = 20;
            worksheet.getColumn(157).width = 20;
            worksheet.getColumn(158).width = 20;
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
                    element.created_at,
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
                    element.combination1,
                    element.diemtb11,
                    element.diemtb12,
                    element.diemtb13,
                    element.diemtb14,
                    element.diemtb15,
                    element.diemtb16,
                    element.option1,
                    element.diemtb17,
                    element.diemtb18,
                    element.diemtb19,

                    element.career_form_2_name,
                    element.combination2,
                    element.diemtb21,
                    element.diemtb22,
                    element.diemtb23,
                    element.diemtb24,
                    element.diemtb25,
                    element.diemtb26,
                    element.option2,
                    element.diemtb27,
                    element.diemtb28,
                    element.diemtb29,

                    element.career_form_3_name,
                    element.combination3,
                    element.diemtb31,
                    element.diemtb32,
                    element.diemtb33,
                    element.diemtb34,
                    element.diemtb35,
                    element.diemtb36,
                    element.option3,
                    element.diemtb37,
                    element.diemtb38,
                    element.diemtb39,

                    element.career_form_4_name,
                    element.combination4,
                    element.diemtb41,
                    element.diemtb42,
                    element.diemtb43,
                    element.diemtb44,
                    element.diemtb45,
                    element.diemtb46,
                    element.option4,
                    element.diemtb47,
                    element.diemtb48,
                    element.diemtb49,

                    element.career_form_5_name,
                    element.combination5,
                    element.diemtb51,
                    element.diemtb52,
                    element.diemtb53,
                    element.diemtb54,
                    element.diemtb55,
                    element.diemtb56,
                    element.option5,
                    element.diemtb57,
                    element.diemtb58,
                    element.diemtb59,

                    element.career_form_6_name,
                    element.combination6,
                    element.diemtb61,
                    element.diemtb62,
                    element.diemtb63,
                    element.diemtb64,
                    element.diemtb65,
                    element.diemtb66,
                    element.option6,
                    element.diemtb67,
                    element.diemtb68,
                    element.diemtb69,

                    element.career_form_7_name,
                    element.combination7,
                    element.diemtb71,
                    element.diemtb72,
                    element.diemtb73,
                    element.diemtb74,
                    element.diemtb75,
                    element.diemtb76,
                    element.option7,
                    element.diemtb77,
                    element.diemtb78,
                    element.diemtb79,

                    element.career_form_8_name,
                    element.combination8,
                    element.diemtb81,
                    element.diemtb82,
                    element.diemtb83,
                    element.diemtb84,
                    element.diemtb85,
                    element.diemtb86,
                    element.option8,
                    element.diemtb87,
                    element.diemtb88,
                    element.diemtb89,

                    element.career_form_9_name,
                    element.combination9,
                    element.diemtb91,
                    element.diemtb92,
                    element.diemtb93,
                    element.diemtb94,
                    element.diemtb95,
                    element.diemtb96,
                    element.option9,
                    element.diemtb97,
                    element.diemtb98,
                    element.diemtb99,

                    element.career_form_10_name,
                    element.combination10,
                    element.diemtb101,
                    element.diemtb102,
                    element.diemtb103,
                    element.diemtb104,
                    element.diemtb105,
                    element.diemtb106,
                    element.option10,
                    element.diemtb107,
                    element.diemtb108,
                    element.diemtb109
                ]
            );
        });

        arr_data.forEach(d => {
            worksheet.addRow(d);
        });

        workbook.xlsx.writeBuffer().then((data) => {
            let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            fs.saveAs(blob, 'thong_ke_theo_thoi_gian.xlsx');
        });
    }


}
