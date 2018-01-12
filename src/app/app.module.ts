import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { NgProgressModule } from '@ngx-progressbar/core';
// import { GithubComponent } from './github/github.component';

const routes:Routes=[
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    // GithubComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgProgressModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
gitName ='';
gitHubDetails;
name = '';
id ='';
url = '' ;
avatar_url ='';


}
