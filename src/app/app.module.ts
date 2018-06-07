import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComptesListComponent } from './components/comptes-list/comptes-list.component';
import { FooterComponent } from './components/footer/footer.component';

import { ComptesAddComponent } from './components/comptes-add/comptes-add.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CompteDeleteComponent } from './components/compte-delete/compte-delete.component';

const my_routes = [
{path: 'list', component: ComptesListComponent},
{path: 'add', component: ComptesAddComponent},
{path: 'welcome', component: WelcomeComponent},
{path: 'delete/:id', component: CompteDeleteComponent},
{path: '', redirectTo: '/list', pathMatch: 'full'},
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
    NotfoundComponent,
    CompteDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(my_routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
