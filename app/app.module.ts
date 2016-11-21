import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';

//page components
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {FooterComponent} from './components/footer/footer.component';

//the main pages
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {DonorsComponent} from './components/pages/donors.component';
import {MyChapterComponent} from './components/pages/mychapter.component';
import {ChapterLeadersComponent} from './components/pages/chapterleaders.component';
import {BusinessResourcesComponent} from './components/pages/businessresources.component';
import {ContactComponent} from './components/pages/contact.component';

//subpages
import {AgendaComponent} from './components/pages/subpages/agenda.component';

//routing component
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, 
                  NavbarComponent, 
                  JumbotronComponent,
                  FooterComponent,
                  HomeComponent,
                  AboutComponent,
                  DonorsComponent,
                  MyChapterComponent,
                  ChapterLeadersComponent,
                  BusinessResourcesComponent,
                  ContactComponent,
                  AgendaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
