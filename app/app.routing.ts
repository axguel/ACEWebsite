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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);