import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import { formValidation } from '@app/models/form-validations/index';
import {FormControlHelper} from '@app/core/helpers';
import { SelectionService } from '@app/core/services/selections.service';
import { FormService } from '@app/core/services/form.service';
import { saveAs } from 'file-saver';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-form1',
    templateUrl: './form1.component.html',
    styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
    public form: FormGroup;
    public formValidationModel: any;
    submited = false;
    number_careers = [1, 2, 3, 4];
    numberCareer = 1;

    areas = ['1', '2', '3', '2NT']; // areas co them 1 truong nua la 2NT
    priorities = ['0', '1', '2', '3', '4', '5', '6', '7'];

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

    receiving_result_types = [
        {
            value: 1,
            name: "Trả tại TTCN Văn Bằng"
        },
        {
            value: 2,
            name: "Chuyển phát nhanh đảm bảo"
        }

    ];

    diploma_numbers = [1, 2, 3, 4, 5, 6];
    waiting = false;

    provinces: any;
    districts: any;
    wards: any;
    careers: any;
    career_1_code = "";
    career_2_code = "";
    career_3_code = "";
    career_4_code = "";

    constructor(
        private router: Router,
        private selectionService: SelectionService,
        private formService: FormService,
        private _snackBar: MatSnackBar
    ) {
        this.formValidationModel = formValidation;
    }

    ngOnInit() {
        const formGroupObj = FormControlHelper.generateFormControls(this.formValidationModel);
        if (formGroupObj) {
            this.form = new FormGroup(formGroupObj);
        }

        this.selectionService.getProvinces().subscribe(res => {
           this.provinces = res.data;
        });

        this.selectionService.getCareers().subscribe(res => {
            this.careers = res.data;
        })

      //  this.selectionService.getCombination().subscribe(res => {
      //      this.combination = res.data;
      //  })
    }

    changeProvince(event) {
        this.selectionService.getDistricts(event.value).subscribe(res => {
            this.districts = res.data;
          //  this.form.get('district_id').setValue(null);
          //  this.form.get('ward_id').setValue(null);
        });
    }

    numberOnly(event): boolean {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !=  46) {
        return false;
      }
      return true;
    }

    changeCareer(event, type) {
        let code = "";
        for(let i = 0; i < this.careers.length; i ++) {
            if(this.careers[i].id == event.value) {
                code = this.careers[i].code;
            }
        }

        if(type == "1") {
            this.career_1_code = code;
        }

        if(type == "2") {
            this.career_2_code = code;
        }

        if(type == "3") {
            this.career_3_code = code;
        }

        if(type == "4") {
            this.career_4_code = code;
        }
    }

    changeDistrict(event) {
        this.selectionService.getWards(event.value).subscribe(res => {
            this.wards = res.data;
            this.form.get('ward_id').setValue(null);
        });
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
            this.formService.save(this.form.getRawValue()).subscribe(res => {
                this.submited = false;
                this.waiting = false;
                if(res.code == 1) {
                    this.exportFile(res.data);
                    // this.form.reset();
                    this._snackBar.open('Lưu thông tin thành công', "x", {
                        duration: 2000,
                        panelClass: ['background-success']
                    });
                    // location.reload();
                } else {
                    this._snackBar.open(res.message, "x", {
                        duration: 2000,
                        panelClass: ['background-error']
                    });
                }
            });
        } else {
            this._snackBar.open('Dữ liệu không hợp lệ, lưu thông tin thất bại', "x", {
                duration: 2000,
            });
        }
    }

    exportFile(url) {
        this.formService.export(url).subscribe(data => saveAs(data, `form1.pdf`));
    }

}
