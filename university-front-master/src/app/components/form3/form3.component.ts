import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import { form3Validation } from '@app/models/form-validations/index';
import {FormControlHelper} from '@app/core/helpers';
import { SelectionService } from '@app/core/services/selections.service';
import { FormService } from '@app/core/services/form.service';
import { saveAs } from 'file-saver';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-form3',
    templateUrl: './form3.component.html',
    styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {
    public form: FormGroup;
    public formValidationModel: any;
    submited = false;

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
            this.formService.saveDataForm3(this.form.getRawValue()).subscribe(res => {
                this.submited = false;
                this.waiting = false;
                if(res.code == 1) {
                    this.exportFile(res.data);
                    // this.form.reset();
                    this._snackBar.open('Lưu thông tin thành công', "x", {
                        duration: 2000,
                    });
                    // location.reload();
                } else {
                    this._snackBar.open(res.message, "x", {
                        duration: 2000,
                    });
                }
            });
        } else {
            this._snackBar.open('Dữ liệu không hợp lệ, vui lòng kiểm tra lại thông tin', "x", {
                duration: 2000,
            });
        }
    }

    exportFile(url) {
        this.formService.export(url).subscribe(data => saveAs(data, `form3.pdf`));
    }

}
