import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {DonorsComponent} from './components/pages/donors.component';
import {MyChapterComponent} from './components/pages/mychapter.component';
import {ChapterLeadersComponent} from './components/pages/chapterleaders.component';
import {BusinessResourcesComponent} from './components/pages/businessresources.component';
import {ContactComponent} from './components/pages/contact.component';

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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);