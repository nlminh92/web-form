import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import {FormControlHelper} from '@app/core/helpers';
import { SessionService } from '@app/core/services/session.service';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent implements OnInit {
    public form: FormGroup;
    submited = false;
    formValidation = {
        'id': [],
        'name': [
            { type: 'required', messageKey: 'form.validation.required' }
        ],
        'from_time': [
            { type: 'required', messageKey: 'form.validation.required' }
        ],
        'to_time': [
            { type: 'required', messageKey: 'form.validation.required' }
        ]
    };
    constructor(
        public dialogRef: MatDialogRef<SessionFormComponent>,
        private sessionService: SessionService,
        @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit(): void {
        const formGroupObj = FormControlHelper.generateFormControls(this.formValidation);
        if (formGroupObj) {
            this.form = new FormGroup(formGroupObj);
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    submit() {
        this.submited = true;
        if(this.form.valid) {
            this.sessionService.create(this.form.getRawValue()).subscribe(res => {
                this.dialogRef.close();
            })
        }
    }

}
