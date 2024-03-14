import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  { //se puede pasar mas de 1 parametro por ejemplo: 'courses/:courseName/:id'
    path: 'courses/:courseName',
    component: CoursesDetailsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
    children:[
      {
        path: '',
        component:ContactInfoComponent,
      },
    ]
  },
  {
    path:'about',
    component: AboutComponent,
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full',
  },
  {
    path: '**',
    component:PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    CoursesComponent,
    CoursesDetailsComponent,
    ContactCreateComponent,
    ContactDetailComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
