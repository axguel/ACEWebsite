import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {DonorsComponent} from './components/pages/donors.component';
import {MyChapterComponent} from './components/pages/mychapter.component';
import {ChapterLeadersComponent} from './components/pages/chapterleaders.component';
import {BusinessResourcesComponent} from './components/pages/businessresources.component';
import {ComingSoonComponent} from './components/pages/comingsoon.component';
import {ContactComponent} from './components/pages/contact.component';

//subpages
import {AgendaComponent} from './components/pages/subpages/agenda.component';
import {HiringComponent} from './components/pages/subpages/hiring.component';
import {BuildingComponent} from './components/pages/subpages/building.component';
import {PsychologyComponent} from './components/pages/subpages/psychology.component';
import {FinancesComponent} from './components/pages/subpages/finances.component';
import {BookofLessonsComponent} from './components/pages/subpages/bookoflessons.component';
import {RuleofThumbComponent} from './components/pages/subpages/ruleofthumb.component';
import {FindChapterComponent} from './components/pages/subpages/findchapter.component';

//legalities
import {LegalitiesComponent} from './components/pages/subpages/legalities/legalities.component';
import {MexicoLegalitiesComponent} from './components/pages/subpages/legalities/mexicolegalities.component';
import {PhiLegalitiesComponent} from './components/pages/subpages/legalities/philegalities.component';
import {PeruLegalitiesComponent} from './components/pages/subpages/legalities/perulegalities.component';


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
    },
    {
        path:'ruleofthumblesson1English',
        component:ROTLesson1EnglishComponent
    },
    {
        path:'ruleofthumblesson2English',
        component:ROTLesson2EnglishComponent
    },
    {
        path:'ruleofthumblesson3English',
        component:ROTLesson3EnglishComponent
    },
    {
        path:'ruleofthumblesson4English',
        component:ROTLesson4EnglishComponent
    },
    {
        path:'ruleofthumblesson5English',
        component:ROTLesson5EnglishComponent
    },
    {
        path:'ruleofthumblesson6English',
        component:ROTLesson6EnglishComponent
    },
    {
        path:'ruleofthumblesson7English',
        component:ROTLesson7EnglishComponent
    },
    {
        path:'ruleofthumblesson8English',
        component:ROTLesson8EnglishComponent
    },
    {
        path:'ruleofthumblesson9English',
        component:ROTLesson9EnglishComponent
    },
    {
        path:'ruleofthumblesson10English',
        component:ROTLesson10EnglishComponent
    },
    {
        path:'ruleofthumblesson11English',
        component:ROTLesson11EnglishComponent
    },
    {
        path:'ruleofthumblesson12English',
        component:ROTLesson12EnglishComponent
    },
    {
        path:'ruleofthumblesson13English',
        component:ROTLesson13EnglishComponent
    },
    {
        path:'ruleofthumblesson14English',
        component:ROTLesson14EnglishComponent
    },
    {
        path:'ruleofthumblesson15English',
        component:ROTLesson15EnglishComponent
    },
    {
        path:'ruleofthumblesson16English',
        component:ROTLesson16EnglishComponent
    },
    {
        path:'ruleofthumblesson17English',
        component:ROTLesson17EnglishComponent
    },
    {
        path:'ruleofthumblesson18English',
        component:ROTLesson18EnglishComponent
    },
    {
        path:'ruleofthumblesson19English',
        component:ROTLesson19EnglishComponent
    },
    {
        path:'ruleofthumblesson20English',
        component:ROTLesson20EnglishComponent
    },
    {
        path:'ruleofthumblesson21English',
        component:ROTLesson21EnglishComponent
    },
    {
        path:'ruleofthumblesson22English',
        component:ROTLesson22EnglishComponent
    },
    {
        path:'ruleofthumblesson23English',
        component:ROTLesson23EnglishComponent
    },
    {
        path:'ruleofthumblesson24English',
        component:ROTLesson24EnglishComponent
    },
    {
        path:'ruleofthumblesson25English',
        component:ROTLesson25EnglishComponent
    },
    {
        path:'ruleofthumblesson1Spanish',
        component:ROTLesson1SpanishComponent
    },
    {
        path:'ruleofthumblesson2Spanish',
        component:ROTLesson2SpanishComponent
    },
    {
        path:'ruleofthumblesson3Spanish',
        component:ROTLesson3SpanishComponent
    },
    {
        path:'ruleofthumblesson4Spanish',
        component:ROTLesson4SpanishComponent
    },
    {
        path:'ruleofthumblesson5Spanish',
        component:ROTLesson5SpanishComponent
    },
    {
        path:'ruleofthumblesson6Spanish',
        component:ROTLesson6SpanishComponent
    },
    {
        path:'ruleofthumblesson7Spanish',
        component:ROTLesson7SpanishComponent
    },
    {
        path:'ruleofthumblesson8Spanish',
        component:ROTLesson8SpanishComponent
    },
    {
        path:'ruleofthumblesson9Spanish',
        component:ROTLesson9SpanishComponent
    },
    {
        path:'ruleofthumblesson10Spanish',
        component:ROTLesson10SpanishComponent
    },
    {
        path:'ruleofthumblesson11Spanish',
        component:ROTLesson11SpanishComponent
    },
    {
        path:'ruleofthumblesson12Spanish',
        component:ROTLesson12SpanishComponent
    },
    {
        path:'ruleofthumblesson13Spanish',
        component:ROTLesson13SpanishComponent
    },
    {
        path:'ruleofthumblesson14Spanish',
        component:ROTLesson14SpanishComponent
    },
    {
        path:'ruleofthumblesson15Spanish',
        component:ROTLesson15SpanishComponent
    },
    {
        path:'ruleofthumblesson16Spanish',
        component:ROTLesson16SpanishComponent
    },
    {
        path:'ruleofthumblesson17Spanish',
        component:ROTLesson17SpanishComponent
    },
    {
        path:'ruleofthumblesson18Spanish',
        component:ROTLesson18SpanishComponent
    },
    {
        path:'ruleofthumblesson19Spanish',
        component:ROTLesson19SpanishComponent
    },
    {
        path:'ruleofthumblesson20Spanish',
        component:ROTLesson20SpanishComponent
    },
    {
        path:'ruleofthumblesson21Spanish',
        component:ROTLesson21SpanishComponent
    },
    {
        path:'ruleofthumblesson22Spanish',
        component:ROTLesson22SpanishComponent
    },
    {
        path:'ruleofthumblesson23Spanish',
        component:ROTLesson23SpanishComponent
    },
    {
        path:'ruleofthumblesson24Spanish',
        component:ROTLesson24SpanishComponent
    },
    {
        path:'ruleofthumblesson25Spanish',
        component:ROTLesson25SpanishComponent
    },
    {
        path:'featurecomingsoon',
        component:ComingSoonComponent
    },
    {
        path:'mexicolegalities',
        component:MexicoLegalitiesComponent
    },
    {
        path:'perulegalities',
        component:PeruLegalitiesComponent
    },
    {
        path:'philegalities',
        component:PhiLegalitiesComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);