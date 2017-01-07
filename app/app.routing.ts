import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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


const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'donors',
        component: DonorsComponent
    },
    {
        path:'mychapter',
        component: MyChapterComponent
    },
    {
        path:'chapterleaders',
        component: ChapterLeadersComponent
    },
    {
        path:'businessresources',
        component:BusinessResourcesComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'monthlyagendas',
        component:AgendaComponent
    },
    {
        path:'legalities',
        component:LegalitiesComponent
    },
    {
        path:'building',
        component:BuildingComponent
    },
    {
        path:'hiring',
        component:HiringComponent
    },
    {
        path:'psychology',
        component:PsychologyComponent
    },
    {
        path:'finances',
        component:FinancesComponent
    },
    {
        path:'bookoflessons',
        component:BookofLessonsComponent
    },
    {
        path:'findchapter',
        component:FindChapterComponent
    },
    {
        path:'englishbookoflessons',
        component:LessonsEnglishComponent
    },
    {
        path:'spanishbookoflessons',
        component:LessonsSpanishComponent
    },
    {
        path:'ruleofthumb',
        component:RuleofThumbComponent
    },
    {
        path:'spanishruleofthumb',
        component:RuleofThumbLessonsSpanishComponent
    },
    {
        path:'englishruleofthumb',
        component:RuleofThumbLessonsEnglishComponent
    },
    {
        path:'bookoflessonsintroduction',
        component:BookofLessonsIntroComponent
    },
    {
        path:'bookoflessonslesson1English',
        component:BOLLesson1EnglishComponent
    },
    {
        path:'bookoflessonslesson2English',
        component:BOLLesson2EnglishComponent
    },
    {
        path:'bookoflessonslesson3English',
        component:BOLLesson3EnglishComponent
    },
    {
        path:'bookoflessonslesson4English',
        component:BOLLesson4EnglishComponent
    },
    {
        path:'bookoflessonslesson5English',
        component:BOLLesson5EnglishComponent
    },
    {
        path:'bookoflessonslesson6English',
        component:BOLLesson6EnglishComponent
    },
    {
        path:'bookoflessonslesson7English',
        component:BOLLesson7EnglishComponent
    },
    {
        path:'bookoflessonslesson8English',
        component:BOLLesson8EnglishComponent
    },
    {
        path:'bookoflessonslesson9English',
        component:BOLLesson9EnglishComponent
    },
    {
        path:'bookoflessonslesson10English',
        component:BOLLesson10EnglishComponent
    },
    {
        path:'bookoflessonslesson11English',
        component:BOLLesson11EnglishComponent
    },
    {
        path:'bookoflessonslesson12English',
        component:BOLLesson12EnglishComponent
    },
    {
        path:'bookoflessonslesson1Spanish',
        component:BOLLesson1SpanishComponent
    },
    {
        path:'bookoflessonslesson2Spanish',
        component:BOLLesson2SpanishComponent
    },
    {
        path:'bookoflessonslesson3Spanish',
        component:BOLLesson3SpanishComponent
    },
    {
        path:'bookoflessonslesson4Spanish',
        component:BOLLesson4SpanishComponent
    },
    {
        path:'bookoflessonslesson5Spanish',
        component:BOLLesson5SpanishComponent
    },
    {
        path:'bookoflessonslesson6Spanish',
        component:BOLLesson6SpanishComponent
    },
    {
        path:'bookoflessonslesson7Spanish',
        component:BOLLesson7SpanishComponent
    },
    {
        path:'bookoflessonslesson8Spanish',
        component:BOLLesson8SpanishComponent
    },
    {
        path:'bookoflessonslesson9Spanish',
        component:BOLLesson9SpanishComponent
    },
    {
        path:'bookoflessonslesson10Spanish',
        component:BOLLesson10SpanishComponent
    },
    {
        path:'bookoflessonslesson11Spanish',
        component:BOLLesson11SpanishComponent
    },
    {
        path:'bookoflessonslesson12Spanish',
        component:BOLLesson12SpanishComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);