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
import {SideMenuRuleofThumbSpanishComponent} from './components/sidemenuruleofthumb/sidemenuruleofthumbspanish.component';
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

//englishruleofthumblessons
import {ROTLesson1EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson1.component';
import {ROTLesson2EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson2.component';
import {ROTLesson3EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson3.component';
import {ROTLesson4EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson4.component';
import {ROTLesson5EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson5.component';
import {ROTLesson6EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson6.component';
import {ROTLesson7EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson7.component';
import {ROTLesson8EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson8.component';
import {ROTLesson9EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson9.component';
import {ROTLesson10EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson10.component';
import {ROTLesson11EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson11.component';
import {ROTLesson12EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson12.component';
import {ROTLesson13EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson13.component';
import {ROTLesson14EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson14.component';
import {ROTLesson15EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson15.component';
import {ROTLesson16EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson16.component';
import {ROTLesson17EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson17.component';
import {ROTLesson18EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson18.component';
import {ROTLesson19EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson19.component';
import {ROTLesson20EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson20.component';
import {ROTLesson21EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson21.component';
import {ROTLesson22EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson22.component';
import {ROTLesson23EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson23.component';
import {ROTLesson24EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson24.component';
import {ROTLesson25EnglishComponent} from './components/pages/subpages/ruleofthumb/allenglishlessons/lesson25.component';

//spanishruleofthumblessons
import {ROTLesson1SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson1.component';
import {ROTLesson2SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson2.component';
import {ROTLesson3SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson3.component';
import {ROTLesson4SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson4.component';
import {ROTLesson5SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson5.component';
import {ROTLesson6SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson6.component';
import {ROTLesson7SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson7.component';
import {ROTLesson8SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson8.component';
import {ROTLesson9SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson9.component';
import {ROTLesson10SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson10.component';
import {ROTLesson11SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson11.component';
import {ROTLesson12SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson12.component';
import {ROTLesson13SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson13.component';
import {ROTLesson14SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson14.component';
import {ROTLesson15SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson15.component';
import {ROTLesson16SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson16.component';
import {ROTLesson17SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson17.component';
import {ROTLesson18SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson18.component';
import {ROTLesson19SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson19.component';
import {ROTLesson20SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson20.component';
import {ROTLesson21SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson21.component';
import {ROTLesson22SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson22.component';
import {ROTLesson23SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson23.component';
import {ROTLesson24SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson24.component';
import {ROTLesson25SpanishComponent} from './components/pages/subpages/ruleofthumb/allspanishlessons/lesson25.component';

//routing component
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, 
                  NavbarComponent,
                  SideMenuBookofLessonsComponent,
                  SideMenuBookofLessonsSpanishComponent,
                  SideMenuRuleofThumbComponent, 
                  SideMenuRuleofThumbSpanishComponent,
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
                  BOLLesson12SpanishComponent,
                  ROTLesson1EnglishComponent,
                  ROTLesson2EnglishComponent,
                  ROTLesson3EnglishComponent,
                  ROTLesson4EnglishComponent,
                  ROTLesson5EnglishComponent,
                  ROTLesson6EnglishComponent,
                  ROTLesson7EnglishComponent,
                  ROTLesson8EnglishComponent,
                  ROTLesson9EnglishComponent,
                  ROTLesson10EnglishComponent,
                  ROTLesson11EnglishComponent,
                  ROTLesson12EnglishComponent,
                  ROTLesson13EnglishComponent,
                  ROTLesson14EnglishComponent,
                  ROTLesson15EnglishComponent,
                  ROTLesson16EnglishComponent,
                  ROTLesson17EnglishComponent,
                  ROTLesson18EnglishComponent,
                  ROTLesson19EnglishComponent,
                  ROTLesson20EnglishComponent,
                  ROTLesson21EnglishComponent,
                  ROTLesson22EnglishComponent,
                  ROTLesson23EnglishComponent,
                  ROTLesson24EnglishComponent,
                  ROTLesson25EnglishComponent,
                   ROTLesson1SpanishComponent,
                  ROTLesson2SpanishComponent,
                  ROTLesson3SpanishComponent,
                  ROTLesson4SpanishComponent,
                  ROTLesson5SpanishComponent,
                  ROTLesson6SpanishComponent,
                  ROTLesson7SpanishComponent,
                  ROTLesson8SpanishComponent,
                  ROTLesson9SpanishComponent,
                  ROTLesson10SpanishComponent,
                  ROTLesson11SpanishComponent,
                  ROTLesson12SpanishComponent,
                  ROTLesson13SpanishComponent,
                  ROTLesson14SpanishComponent,
                  ROTLesson15SpanishComponent,
                  ROTLesson16SpanishComponent,
                  ROTLesson17SpanishComponent,
                  ROTLesson18SpanishComponent,
                  ROTLesson19SpanishComponent,
                  ROTLesson20SpanishComponent,
                  ROTLesson21SpanishComponent,
                  ROTLesson22SpanishComponent,
                  ROTLesson23SpanishComponent,
                  ROTLesson24SpanishComponent,
                  ROTLesson25SpanishComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
