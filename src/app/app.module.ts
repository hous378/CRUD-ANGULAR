import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComptesListComponent } from './components/comptes-list/comptes-list.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { ComptesAddComponent } from './components/comptes-add/comptes-add.component';

import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const my_routes = [
{path: 'list', component: ComptesListComponent},
{path: 'add', component: ComptesAddComponent},
{path: 'welcome', component: WelcomeComponent},
{path: '', component: WelcomeComponent, pathMatch: 'full'},
{path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComptesListComponent,
    FooterComponent,
    ComptesAddComponent,
    WelcomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(my_routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
