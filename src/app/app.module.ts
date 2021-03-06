import { AuthGuard } from './auth.guard';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ApiModule} from "./api/api.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import {Http, HttpModule} from "@angular/http";
import { LoginComponent } from './session/login/login.component';
import { RegisterComponent } from './session/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule,MatSnackBarModule} from '@angular/material';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component'
import {MatDividerModule} from '@angular/material/divider';
import { TeacherEditComponent } from './teacher/teacher-edit/teacher-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TeacherDeleteComponent } from './teacher/teacher-delete/teacher-delete.component';
import { ParentComponent } from './parent/parent.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ParentAddComponent } from './parent/parent-add/parent-add.component';
import { ParentEditComponent } from './parent/parent-edit/parent-edit.component';
import { ParentDeleteComponent } from './parent/parent-delete/parent-delete.component';
import { ChildrenComponent } from './parent/children/children.component';
import { ChildrenAddComponent } from './parent/children/children-add/children-add.component';

import {MatButtonToggleModule} from '@angular/material/button-toggle';




@NgModule({
  declarations: [
    
    MainComponent,
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent,
    LoginComponent,
    RegisterComponent,
    TeacherComponent,
    TeacherAddComponent,
    TeacherEditComponent,
    TeacherDeleteComponent,
    ParentComponent,
    ParentAddComponent,
    ParentEditComponent,
    ParentDeleteComponent,
    ChildrenComponent,
    ChildrenAddComponent
  ],
  imports: [
 
    MatProgressBarModule,
    MatButtonModule,MatSnackBarModule,
    MatInputModule,
    ApiModule,
    BrowserModule,
    RouterModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonToggleModule
    
    
  ],
  entryComponents: [
    ParentEditComponent,
    ParentDeleteComponent,
    TeacherEditComponent,
    TeacherDeleteComponent,
    ChildrenComponent,
    ChildrenAddComponent,
    
],
  providers: [AuthGuard,ApiModule],
  bootstrap: [AppComponent]
})
export class AppModule { }