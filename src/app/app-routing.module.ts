import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full'},
  { path : "courses", component: CoursesComponent},
  { path : "courses/:id", component: CoursesDetailComponent},
  { path : "home", component: HomeComponent},
  { path: "admin", component: AdminComponent},
  { path: "admin/add", component: AdminAddComponent},
  { path: "admin/edit/:id", component: AdminEditComponent},
  { path : "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
