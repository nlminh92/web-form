import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '@app/core/services/user.service';
import { SelectionService } from '@app/core/services/selections.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    error = "";

    submit() {
        if (this.form.valid) {
            let data = this.form.getRawValue();
            console.log(data);
            this.userService.logIn(data).subscribe(res => {
                if(res.code == 1) {
                    this.error = "";
                    let user = JSON.stringify(res.data);
                    localStorage.setItem('user', user);
                    this.router.navigate(['admin/sessions'])
                } else {
                    this.error = res.message;
                }
            })
        }
    }

    constructor(
        private router: Router,
        private userService: UserService,
        private selectionService: SelectionService
    ) {
    }

    ngOnInit() {
        const userInfo = localStorage.getItem('user');

        if (!(userInfo === undefined || userInfo === null)) {
            this.router.navigate(['admin/sessions'])
        }
    }
}
