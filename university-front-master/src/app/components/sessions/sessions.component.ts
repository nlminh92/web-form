import { Component, OnInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SessionService } from '@app/core/services/session.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SessionFormComponent} from '../session-form/session-form.component';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
    // displayedColumns = ['stt', 'name', 'from', 'to', 'edit', 'delete'];
    displayedColumns = ['stt', 'name', 'from', 'to'];
    dataSource = new MatTableDataSource([]);
    constructor(
        private sessionService: SessionService,
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

}
