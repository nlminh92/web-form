import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// App modules
import { SharedModule } from '@app/shared/shared.module';

// App component
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
// Spinner
import { SpinnerComponent } from '@app/shared/spinner/spinner.component';
import { LoginComponent } from './components/login/login.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { SessionFormComponent } from './components/session-form/session-form.component';
import { ListCurriculumsComponent } from './components/list-curriculums/list-curriculums.component';
import { ReportSessionsComponent } from './components/report-sessions/report-sessions.component';
import { ReportCareersComponent } from './components/report-careers/report-careers.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { Form3Component } from './components/form3/form3.component';

@NgModule({
	declarations: [
		AppComponent,
		SpinnerComponent,
		LoginComponent,
		AdminLayoutComponent,
		SessionsComponent,
		SessionFormComponent,
		ListCurriculumsComponent,
		ReportSessionsComponent,
		ReportCareersComponent,
		HomepageComponent,
		Form1Component,
		Form2Component,
		Form3Component
	],
	imports: [
		// Angular
		BrowserModule,
		BrowserAnimationsModule,
		// Routing
		AppRoutingModule,
        FlexLayoutModule,
		// App modules
		SharedModule,
	],
	providers: [],
    entryComponents:[
        SessionFormComponent
    ],

	bootstrap: [AppComponent]
})
export class AppModule { }
