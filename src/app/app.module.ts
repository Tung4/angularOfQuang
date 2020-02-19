import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';

import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { FormsModule} from '@angular/forms';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HomeComponent,
    NotfoundComponent,
    CoursesDetailComponent,
    AdminComponent,
    AdminAddComponent,
    AdminEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
