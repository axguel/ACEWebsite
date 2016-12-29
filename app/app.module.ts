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
import {LegalitiesComponent} from './components/pages/subpages/legalities.component';
import {HiringComponent} from './components/pages/subpages/hiring.component';
import {BuildingComponent} from './components/pages/subpages/building.component';
import {PsychologyComponent} from './components/pages/subpages/psychology.component';
import {FinancesComponent} from './components/pages/subpages/finances.component';
import {LessonsComponent} from './components/pages/subpages/lessons.component';
import {FindChapterComponent} from './components/pages/subpages/findchapter.component';


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
                  AgendaComponent,
                  LegalitiesComponent,
                  BuildingComponent,
                  HiringComponent,
                  PsychologyComponent,
                  FinancesComponent,
                  LessonsComponent,
                  FindChapterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
