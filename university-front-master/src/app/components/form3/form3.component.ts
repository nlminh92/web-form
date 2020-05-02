import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import { form3Validation } from '@app/models/form-validations/index';
import {FormControlHelper} from '@app/core/helpers';
import { SelectionService } from '@app/core/services/selections.service';
import { FormService } from '@app/core/services/form.service';
import { saveAs } from 'file-saver';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-form3',
    templateUrl: './form3.component.html',
    styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {
    public form: FormGroup;
    public formValidationModel: any;
    submited = false;

    uploadedFiles: Array < File > ;
    file: any = null;

    // constructor(private http : HttpClient){
    //
    // }

    @ViewChild('inputFile') myInputVariable: ElementRef;

    reset() {
        this.myInputVariable.nativeElement.value = '';
    }

    fileChange(element) {
        console.log(element.target.files);
        this.uploadedFiles = element.target.files;
        this.upload();
    }

    upload() {
        let formData = new FormData();
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("file", this.uploadedFiles[i], this.uploadedFiles[i].name);
        }
        this.http.post('/api/upload', formData)
        .subscribe((response) => {
            this.file = response['file'];
          })
        }

    genders = [
        {
            value: "male",
            name: "Nam"
        },
        {
            value: "female",
            name: "Nữ"
        }
    ];

    //diploma_numbers = [1, 2, 3, 4, 5, 6];
    waiting = false;

    numberOnly(event): boolean {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !=  46) {
        return false;
      }
      return true;
    }

    constructor(
        private http : HttpClient,
        private router: Router,
        private selectionService: SelectionService,
        private formService: FormService,
        private _snackBar: MatSnackBar
    ) {
        this.formValidationModel = form3Validation;
    }

    ngOnInit() {
        const formGroupObj = FormControlHelper.generateFormControls(this.formValidationModel);
        if (formGroupObj) {
            this.form = new FormGroup(formGroupObj);
        }
    }

    onSubmit() {
        this._snackBar.open("Thành công", "Đang chờ lưu thông tin", {
            duration: 2000,
        });
        console.log(this.form);
        console.log(this.form.value);
        this.submited = true;
        if (this.form.valid) {
            this.waiting = true;
            // Hàm này gửi dữ liệu lên server
            let data = this.form.getRawValue();
            data['file'] = this.file;
            if(!this.file || this.file == '') {
                this._snackBar.open("Vui lòng chọn ảnh", "x", {
                    duration: 2000,
                });
                this.submited = false;
                this.waiting = false;
            } else {
                this.formService.saveDataForm3(data).subscribe(res => {
                    this.submited = false;
                    this.waiting = false;
                    if(res.code == 1) {
                        this.exportFile(res.data);
                        // this.form.reset();
                        this._snackBar.open('Lưu thông tin thành công', "x", {
                            duration: 2000,
                        });
                        this.file = null;
                        this.reset();
                        // location.reload();
                    }
                    else {
                        this._snackBar.open(res.message, "x", {
                            duration: 2000,
                        });
                        this.file = null;
                        this.reset();
                    }
                });
            }
        } else {
            this._snackBar.open('Dữ liệu không hợp lệ, vui lòng kiểm tra lại thông tin', "x", {
                duration: 2000,
            });
        }
    }

    exportFile(url) {
        this.formService.export(url).subscribe(data => saveAs(data, filename));
        let filename = `NK-${Date.now()}.pdf`;
    }

}
