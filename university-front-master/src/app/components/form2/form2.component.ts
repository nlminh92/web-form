import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import { form2Validation } from '@app/models/form-validations/index';
import {FormControlHelper} from '@app/core/helpers';
import { SelectionService } from '@app/core/services/selections.service';
import { FormService } from '@app/core/services/form.service';
import { saveAs } from 'file-saver';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-form2',
    templateUrl: './form2.component.html',
    styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
    public form: FormGroup;
    public formValidationModel: any;
    submited = false;
    number_careers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numberCareer = 1;

  //  areas = [1, 2, 3];
  //  priorities = [1, 2, 3];
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


  //  diploma_numbers = [1, 2, 3, 4, 5, 6];
    waiting = false;

    provinces: any;
    districts: any;
    wards: any;
    careers: any;
    careers_form: any;
    combination: any;
    career_1_code = "";
    career_2_code = "";
    career_3_code = "";
    career_4_code = "";
    career_form_1_code="";
    career_form_2_code="";
    career_form_3_code="";
    career_form_4_code="";
    career_form_5_code="";
    career_form_6_code="";
    career_form_7_code="";
    career_form_8_code="";
    career_form_9_code="";
    career_form_10_code="";
    diemtb11 = "";
    diemtb51 = "";

    constructor(
        private router: Router,
        private selectionService: SelectionService,
        private formService: FormService,
        private _snackBar: MatSnackBar
    ) {
        this.formValidationModel = form2Validation;
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
        });

        this.selectionService.getCareersForm().subscribe(res => {
            this.careers_form = res.data;
        });

        this.selectionService.getCombination().subscribe(res => {
            this.combination = res.data;
        });

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

    changeCareerForm(event, type) {
        let code = "";
        for(let i = 0; i < this.careers_form.length; i ++) {
            if(this.careers_form[i].id == event.value) {
                code = this.careers_form[i].code;
            }
        }

        if(type == "1") {
            this.career_form_1_code = code;
        }
        if(type == "2") {
            this.career_form_2_code = code;
        }
        if(type == "3") {
            this.career_form_3_code = code;
        }
        if(type == "4") {
            this.career_form_4_code = code;
        }
        if(type == "5") {
            this.career_form_5_code = code;
        }
        if(type == "6") {
            this.career_form_6_code = code;
        }
        if(type == "7") {
            this.career_form_7_code = code;
        }
        if(type == "8") {
            this.career_form_8_code = code;
        }
        if(type == "9") {
            this.career_form_9_code = code;
        }
        if(type == "10") {
            this.career_form_10_code = code;
        }
    }



//    changeDistrict(event) {
  //      this.selectionService.getWards(event.value).subscribe(res => {
    //        this.wards = res.data;
    //        this.form.get('ward_id').setValue(null);
    //    });
    //}

    onSubmit() {

        console.log(this.form);
        console.log(this.form.value);
        this.submited = true;
        if (this.form.valid) {
          this._snackBar.open("Thành công", "Đang chờ lưu thông tin", {
              duration: 2000,
          });
            this.waiting = true;
            this.formService.saveDataForm2(this.form.getRawValue()).subscribe(res => {
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
        this.formService.export(url).subscribe(data => saveAs(data, `form2.pdf`));
    }

}
