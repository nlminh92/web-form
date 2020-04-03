import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { MainLayoutComponent } from '@app/shared/layouts/index';
import { AuthLayoutComponent } from '@app/shared/layouts/index';
// Components
import { LoginComponent } from '@app/components/login/login.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AuthGuard } from '../app/core/auth.guard';
import { SessionsComponent } from './components/sessions/sessions.component';
import { ListCurriculumsComponent } from './components/list-curriculums/list-curriculums.component';
import { ReportSessionsComponent } from './components/report-sessions/report-sessions.component';
import { ReportCareersComponent } from './components/report-careers/report-careers.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { Form3Component } from './components/form3/form3.component';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'form1',
        component: Form1Component
    },
    {
        path: 'form2',
        component: Form2Component
    },
    {
        path: 'form3',
        component: Form3Component
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: AdminLayoutComponent, canActivate: [AuthGuard],
        children: [
            {
                path: "sessions",
                component: SessionsComponent
            },
            {
                path: "list-curriculums",
                component: ListCurriculumsComponent
            },
            {
                path: "report-careers",
                component: ReportCareersComponent
            },
            {
                path: "report-sessions",
                component: ReportSessionsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
