import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';

import { TeacherComponent } from './teacher/teacher.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { FormsComponent } from "./forms/forms.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { TablesComponent } from "./tables/tables.component";
import { IconsComponent } from "./icons/icons.component";
import { TypographyComponent } from "./typography/typography.component";
import { AlertsComponent } from "./alerts/alerts.component";
import { AccordionsComponent } from "./accordions/accordions.component";
import { BadgesComponent } from "./badges/badges.component";
import { ProgressbarComponent } from "./progressbar/progressbar.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { TooltipsComponent } from "./tooltips/tooltips.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { TabsComponent } from "./tabs/tabs.component";
import { LoginComponent } from "./session/login/login.component";
import { RegisterComponent } from "./session/register/register.component";
import { MainComponent } from "./main/main.component";
import {ParentComponent} from './parent/parent.component';
import {ParentAddComponent} from './parent/parent-add/parent-add.component';
import { ChildrenComponent } from './parent/children/children.component';
import { ChildrenAddComponent } from './parent/children/children-add/children-add.component';



const routes: Routes = [
  { path: "", redirectTo: "session/login", pathMatch: "full" },
  { path: "session/login", component: LoginComponent },
  {
    path: "main",
    component: MainComponent,canActivate:[AuthGuard],
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "teachers", component: TeacherComponent },
      { path: "teachers/add", component: TeacherAddComponent },
      { path: "parents", component: ParentComponent },
      { path: "parents/add", component: ParentAddComponent },
      { path: "children", component: ChildrenComponent },
      { path: "children/add", component: ChildrenAddComponent },
        { path: 'dropdowns', component: DropdownComponent },


    ],
  },
      //  { path: 'forms', component: FormsComponent }

  // { path: 'session/register', component: RegisterComponent,},
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'session/login', component: LoginComponent },
 
  // { path: 'buttons', component: ButtonsComponent },
  // { path: 'tables', component: TablesComponent },
  // { path: 'icons', component: IconsComponent },
  // { path: 'typography', component: TypographyComponent },
  // { path: 'alerts', component: AlertsComponent },
  // { path: 'accordions', component: AccordionsComponent },
  // { path: 'badges', component: BadgesComponent },
  // { path: 'progressbar', component: ProgressbarComponent },
  // { path: 'breadcrumbs', component: BreadcrumbsComponent },
  // { path: 'pagination', component: PaginationComponent },
  // { path: 'dropdowns', component: DropdownComponent },
  // { path: 'tooltips', component: TooltipsComponent },
  // { path: 'carousel', component: CarouselComponent },
  // { path: 'tabs', component: TabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
