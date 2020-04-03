// Angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';

// Angular html editor
import { AngularEditorModule } from '@kolkov/angular-editor';

// Material
import { LayoutModule } from '@angular/cdk/layout';
import {
	// Navigation
	MatMenuModule,
	MatSidenavModule,
	MatToolbarModule,
	// Layout
	MatListModule,
	MatCardModule,
	MatGridListModule,
	MatExpansionModule,
	MatTabsModule,
	// Form Controls
	MatInputModule,
	MatSelectModule,
	MatCheckboxModule,
	MatRadioModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatSlideToggleModule,
	// Buttons & indicators
	MatButtonModule,
	MatIconModule,
	MatProgressBarModule,
	// Popups / modals
	MatDialogModule,        // Like a modal
	MatSnackBarModule,      // Like a toast
	MatTooltipModule,
	// Data table
	MatTableModule,
	MatSortModule,          // Sort tables
	MatPaginatorModule
} from '@angular/material';

import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

// Own components
import {
	MainNavComponent,
	MainLayoutComponent,
	FooterComponent,
	ToolbarComponent,
	AccountCardComponent
} from './layouts/index';
// Dialogs
import {
	DialogLogoutComponent
} from './dialogs/index';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { LanguageDropdownComponent } from './layouts/toolbar/language-dropdown/language-dropdown.component';
import { LogoutButtonComponent } from './layouts/toolbar/logout-button/logout-button.component';
import { MenuComponent } from './layouts/sidenav/menu/menu.component';
import { AssignToComponent } from './toasts/assign-to/assign-to.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DialogRemoveItemComponent } from './dialogs/dialog-remove-item/dialog-remove-item.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true,
	wheelSpeed: 2,
	wheelPropagation: true
};

export const MY_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MM/YYYY',
        dateA11yLabel: 'DD/MM/YYYY',
        monthYearA11yLabel: 'MM/YYYY',
    },
};

@NgModule({
	imports: [
		// Angular
		CommonModule,
		RouterModule,
		// Material
		LayoutModule,
		MatCardModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatDialogModule,
		MatMenuModule,
		MatExpansionModule,
		// End Material
		PerfectScrollbarModule
	],
	exports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		/**
         * Material
         */
		// Navigation
		MatMenuModule,
		MatSidenavModule,
		MatToolbarModule,
		// Layout
		MatListModule,
		MatCardModule,
		MatGridListModule,
		MatExpansionModule,
		MatTabsModule,
		// Form Controls
		MatInputModule,
		MatSelectModule,
		MatCheckboxModule,
		MatRadioModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSlideToggleModule,
		// Buttons & indicators
		MatButtonModule,
		MatIconModule,
		MatProgressBarModule,
		// Popups / modals
		MatDialogModule,        // Like a modal
		MatSnackBarModule,      // Like a toast
		MatTooltipModule,
		// Data table
		MatTableModule,
		MatSortModule,          // Sort tables
		MatPaginatorModule,
		/* End Material */
		AngularEditorModule,
		PerfectScrollbarModule
	],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'vi' }, //you can change useValue
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],
	declarations: [
		MainNavComponent,
		MainLayoutComponent,
		FooterComponent,
		ToolbarComponent,
		DialogLogoutComponent,
		AccountCardComponent,
		SidenavComponent,
		LanguageDropdownComponent,
		LogoutButtonComponent,
		MenuComponent,
		AssignToComponent,
		BreadcrumbComponent,
		DialogRemoveItemComponent,
		AuthLayoutComponent
	],
	entryComponents: [
		DialogLogoutComponent,
		DialogRemoveItemComponent,
		AssignToComponent
	]
})
export class SharedModule { }
