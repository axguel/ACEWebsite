import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';

//page components
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {FooterComponent} from './components/footer/footer.component';
import {SideMenuBookofLessonsComponent} from './components/sidemenubookoflessons/sidemenubookoflessons.component';
import {SideMenuBookofLessonsSpanishComponent} from './components/sidemenubookoflessons/sidemenubookoflessonsspanish.component';
import {SideMenuRuleofThumbComponent} from './components/sidemenuruleofthumb/sidemenuruleofthumb.component';
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
import {BookofLessonsComponent} from './components/pages/subpages/bookoflessons.component';
import {RuleofThumbComponent} from './components/pages/subpages/ruleofthumb.component';
import {FindChapterComponent} from './components/pages/subpages/findchapter.component';


//lessonspages
import {LessonsEnglishComponent} from './components/pages/subpages/bookoflessons/lessonsenglish.component';
import {LessonsSpanishComponent} from './components/pages/subpages/bookoflessons/lessonsspanish.component';
import {BookofLessonsIntroComponent} from './components/pages/subpages/bookoflessons/allenglishlessons/introduction.component';

//englishbookoflessons
import {BOLLesson1EnglishComponent} from './components/pages/subpages/bookoflessons/allenglishlessons/lesson1.component';
import {BOLLesson2EnglishComponent} from './components/pages/subpages/bookoflessons/allenglishlessons/lesson2.component';
import {BOLLesson3EnglishComponent} from './components/pages/subpages/bookoflessons/allenglishlessons/lesson3.component';
import {BOLLesson4EnglishComponent} from './components/pages/subpages/bookoflessons/allenglishlessons/lesson4.component';
import {BOLLesson5EnglishComponent} from './components/pages/subpages/bookoflessons/allenglishlessons/lesson5.component';
import {BOLLesson6EnglishComponent} from './components/pages/subpages/bookoflessons/allenglishlessons/lesson6.component';
import {BOLLesson7EnglishComponent} from './components/pages/subpages/bookoflessons/allenglishlessons/lesson7.component';
import {BOLLesson8EnglishComponent} from './components/pages/subpages/bookoflessons/allenglishlessons/lesson8.component';
import {BOLLesson9EnglishComponent} from './components/pages/subpages/bookoflessons/allenglishlessons/lesson9.component';
import {BOLLesson10EnglishComponent} from './components/pages/subpages/bookoflessons/allenglishlessons/lesson10.component';
import {BOLLesson11EnglishComponent} from './components/pages/subpages/bookoflessons/allenglishlessons/lesson11.component';
import {BOLLesson12EnglishComponent} from './components/pages/subpages/bookoflessons/allenglishlessons/lesson12.component';

//spanishbookoflessons
import {BOLLesson1SpanishComponent} from './components/pages/subpages/bookoflessons/allspanishlessons/lesson1.component';
import {BOLLesson2SpanishComponent} from './components/pages/subpages/bookoflessons/allspanishlessons/lesson2.component';
import {BOLLesson3SpanishComponent} from './components/pages/subpages/bookoflessons/allspanishlessons/lesson3.component';
import {BOLLesson4SpanishComponent} from './components/pages/subpages/bookoflessons/allspanishlessons/lesson4.component';
import {BOLLesson5SpanishComponent} from './components/pages/subpages/bookoflessons/allspanishlessons/lesson5.component';
import {BOLLesson6SpanishComponent} from './components/pages/subpages/bookoflessons/allspanishlessons/lesson6.component';
import {BOLLesson7SpanishComponent} from './components/pages/subpages/bookoflessons/allspanishlessons/lesson7.component';
import {BOLLesson8SpanishComponent} from './components/pages/subpages/bookoflessons/allspanishlessons/lesson8.component';
import {BOLLesson9SpanishComponent} from './components/pages/subpages/bookoflessons/allspanishlessons/lesson9.component';
import {BOLLesson10SpanishComponent} from './components/pages/subpages/bookoflessons/allspanishlessons/lesson10.component';
import {BOLLesson11SpanishComponent} from './components/pages/subpages/bookoflessons/allspanishlessons/lesson11.component';
import {BOLLesson12SpanishComponent} from './components/pages/subpages/bookoflessons/allspanishlessons/lesson12.component';


//ruleofthumb
import {RuleofThumbLessonsEnglishComponent} from './components/pages/subpages/ruleofthumb/lessonsenglish.component';
import {RuleofThumbLessonsSpanishComponent} from './components/pages/subpages/ruleofthumb/lessonsspanish.component';

//routing component
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, 
                  NavbarComponent,
                  SideMenuBookofLessonsComponent,
                  SideMenuBookofLessonsSpanishComponent,
                  SideMenuRuleofThumbComponent, 
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
                  BookofLessonsComponent,
                  FindChapterComponent,
                  LessonsEnglishComponent,
                  LessonsSpanishComponent,
                  RuleofThumbComponent,
                  RuleofThumbLessonsEnglishComponent,
                  RuleofThumbLessonsSpanishComponent,
                  BookofLessonsIntroComponent,
                  BOLLesson1EnglishComponent,
                  BOLLesson2EnglishComponent,
                  BOLLesson3EnglishComponent,
                  BOLLesson4EnglishComponent,
                  BOLLesson5EnglishComponent,
                  BOLLesson6EnglishComponent,
                  BOLLesson7EnglishComponent,
                  BOLLesson8EnglishComponent,
                  BOLLesson9EnglishComponent,
                  BOLLesson10EnglishComponent,
                  BOLLesson11EnglishComponent,
                  BOLLesson12EnglishComponent,
                  BOLLesson1SpanishComponent,
                  BOLLesson2SpanishComponent,
                  BOLLesson3SpanishComponent,
                  BOLLesson4SpanishComponent,
                  BOLLesson5SpanishComponent,
                  BOLLesson6SpanishComponent,
                  BOLLesson7SpanishComponent,
                  BOLLesson8SpanishComponent,
                  BOLLesson9SpanishComponent,
                  BOLLesson10SpanishComponent,
                  BOLLesson11SpanishComponent,
                  BOLLesson12SpanishComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
