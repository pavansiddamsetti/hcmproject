import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { MenberdashboardComponent } from './components/menberdashboard/menberdashboard.component';
import { NewmemberComponent } from './components/newmember/newmember.component';
import { SearchComponent } from './components/search/search.component';
import { CliamsubmitComponent } from './components/cliamsubmit/cliamsubmit.component';
import { NgxPaginationModule } from 'ngx-pagination';
const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'register', component:UserRegisterComponent},
  {path:'admin', component:AdmindashboardComponent},
  {path:'member', component:MenberdashboardComponent},
  {path:'admin/newmember', component: NewmemberComponent},
  {path:'admin/searchmember',component:SearchComponent},
  {path:'submitcliam',component:CliamsubmitComponent},
  {path:'member/membersearch', component: SearchComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UserRegisterComponent,
    AdmindashboardComponent,
    MenberdashboardComponent,
    NewmemberComponent,
    SearchComponent,
    CliamsubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
