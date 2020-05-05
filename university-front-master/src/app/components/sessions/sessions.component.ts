import { Component, OnInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SessionService } from '@app/core/services/session.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SessionFormComponent} from '../session-form/session-form.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
    // displayedColumns = ['stt', 'name', 'from', 'to', 'edit', 'delete'];
    displayedColumns = ['stt', 'name', 'from', 'to', 'type', 'delete'];
    dataSource = new MatTableDataSource([]);
    constructor(
        private sessionService: SessionService,
        private _snackBar: MatSnackBar,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getData();
    }


    getData() {
        this.sessionService.index().subscribe(res => {
            this.dataSource = new MatTableDataSource<any>(res.data);
        });
    }

    openDialog(data): void {
        const dialogRef = this.dialog.open(SessionFormComponent, {
            width: '450px',
            data: data
        });

        dialogRef.afterClosed().subscribe(result => {
            this.getData();
        });
    }

    destroy(id) {
        this.sessionService.destroy(id).subscribe(res => {
            console.log(res);
            if(res.code == 1) {
                this._snackBar.open('Xóa thành công', "x", {
                    duration: 2000,
                    panelClass: ['background-success']
                });
                this.dataSource = new MatTableDataSource([]);
                this.getData();
            } else {
                this._snackBar.open(res.message, "x", {
                    duration: 2000,
                    panelClass: ['background-success']
                });
            }
        });
    }

}
