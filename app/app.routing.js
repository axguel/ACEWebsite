"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/pages/home.component');
var about_component_1 = require('./components/pages/about.component');
var donors_component_1 = require('./components/pages/donors.component');
var mychapter_component_1 = require('./components/pages/mychapter.component');
var chapterleaders_component_1 = require('./components/pages/chapterleaders.component');
var businessresources_component_1 = require('./components/pages/businessresources.component');
var contact_component_1 = require('./components/pages/contact.component');
//subpages
var agenda_component_1 = require('./components/pages/subpages/agenda.component');
var legalities_component_1 = require('./components/pages/subpages/legalities.component');
var hiring_component_1 = require('./components/pages/subpages/hiring.component');
var building_component_1 = require('./components/pages/subpages/building.component');
var psychology_component_1 = require('./components/pages/subpages/psychology.component');
var finances_component_1 = require('./components/pages/subpages/finances.component');
var bookoflessons_component_1 = require('./components/pages/subpages/bookoflessons.component');
var ruleofthumb_component_1 = require('./components/pages/subpages/ruleofthumb.component');
var findchapter_component_1 = require('./components/pages/subpages/findchapter.component');
//lessonspages
var lessonsenglish_component_1 = require('./components/pages/subpages/bookoflessons/lessonsenglish.component');
var lessonsspanish_component_1 = require('./components/pages/subpages/bookoflessons/lessonsspanish.component');
var introduction_component_1 = require('./components/pages/subpages/bookoflessons/allenglishlessons/introduction.component');
var lesson1_component_1 = require('./components/pages/subpages/bookoflessons/allenglishlessons/lesson1.component');
var lesson2_component_1 = require('./components/pages/subpages/bookoflessons/allenglishlessons/lesson2.component');
var lesson3_component_1 = require('./components/pages/subpages/bookoflessons/allenglishlessons/lesson3.component');
var lesson4_component_1 = require('./components/pages/subpages/bookoflessons/allenglishlessons/lesson4.component');
var lesson5_component_1 = require('./components/pages/subpages/bookoflessons/allenglishlessons/lesson5.component');
var lesson6_component_1 = require('./components/pages/subpages/bookoflessons/allenglishlessons/lesson6.component');
var lesson7_component_1 = require('./components/pages/subpages/bookoflessons/allenglishlessons/lesson7.component');
var lesson8_component_1 = require('./components/pages/subpages/bookoflessons/allenglishlessons/lesson8.component');
var lesson9_component_1 = require('./components/pages/subpages/bookoflessons/allenglishlessons/lesson9.component');
var lesson10_component_1 = require('./components/pages/subpages/bookoflessons/allenglishlessons/lesson10.component');
var lesson11_component_1 = require('./components/pages/subpages/bookoflessons/allenglishlessons/lesson11.component');
var lesson12_component_1 = require('./components/pages/subpages/bookoflessons/allenglishlessons/lesson12.component');
//spanishbookoflessons
var lesson1_component_2 = require('./components/pages/subpages/bookoflessons/allspanishlessons/lesson1.component');
var lesson2_component_2 = require('./components/pages/subpages/bookoflessons/allspanishlessons/lesson2.component');
var lesson3_component_2 = require('./components/pages/subpages/bookoflessons/allspanishlessons/lesson3.component');
var lesson4_component_2 = require('./components/pages/subpages/bookoflessons/allspanishlessons/lesson4.component');
var lesson5_component_2 = require('./components/pages/subpages/bookoflessons/allspanishlessons/lesson5.component');
var lesson6_component_2 = require('./components/pages/subpages/bookoflessons/allspanishlessons/lesson6.component');
var lesson7_component_2 = require('./components/pages/subpages/bookoflessons/allspanishlessons/lesson7.component');
var lesson8_component_2 = require('./components/pages/subpages/bookoflessons/allspanishlessons/lesson8.component');
var lesson9_component_2 = require('./components/pages/subpages/bookoflessons/allspanishlessons/lesson9.component');
var lesson10_component_2 = require('./components/pages/subpages/bookoflessons/allspanishlessons/lesson10.component');
var lesson11_component_2 = require('./components/pages/subpages/bookoflessons/allspanishlessons/lesson11.component');
var lesson12_component_2 = require('./components/pages/subpages/bookoflessons/allspanishlessons/lesson12.component');
//ruleofthumb
var lessonsenglish_component_2 = require('./components/pages/subpages/ruleofthumb/lessonsenglish.component');
var lessonsspanish_component_2 = require('./components/pages/subpages/ruleofthumb/lessonsspanish.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'donors',
        component: donors_component_1.DonorsComponent
    },
    {
        path: 'mychapter',
        component: mychapter_component_1.MyChapterComponent
    },
    {
        path: 'chapterleaders',
        component: chapterleaders_component_1.ChapterLeadersComponent
    },
    {
        path: 'businessresources',
        component: businessresources_component_1.BusinessResourcesComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'monthlyagendas',
        component: agenda_component_1.AgendaComponent
    },
    {
        path: 'legalities',
        component: legalities_component_1.LegalitiesComponent
    },
    {
        path: 'building',
        component: building_component_1.BuildingComponent
    },
    {
        path: 'hiring',
        component: hiring_component_1.HiringComponent
    },
    {
        path: 'psychology',
        component: psychology_component_1.PsychologyComponent
    },
    {
        path: 'finances',
        component: finances_component_1.FinancesComponent
    },
    {
        path: 'bookoflessons',
        component: bookoflessons_component_1.BookofLessonsComponent
    },
    {
        path: 'findchapter',
        component: findchapter_component_1.FindChapterComponent
    },
    {
        path: 'englishbookoflessons',
        component: lessonsenglish_component_1.LessonsEnglishComponent
    },
    {
        path: 'spanishbookoflessons',
        component: lessonsspanish_component_1.LessonsSpanishComponent
    },
    {
        path: 'ruleofthumb',
        component: ruleofthumb_component_1.RuleofThumbComponent
    },
    {
        path: 'spanishruleofthumb',
        component: lessonsspanish_component_2.RuleofThumbLessonsSpanishComponent
    },
    {
        path: 'englishruleofthumb',
        component: lessonsenglish_component_2.RuleofThumbLessonsEnglishComponent
    },
    {
        path: 'bookoflessonsintroduction',
        component: introduction_component_1.BookofLessonsIntroComponent
    },
    {
        path: 'bookoflessonslesson1English',
        component: lesson1_component_1.BOLLesson1EnglishComponent
    },
    {
        path: 'bookoflessonslesson2English',
        component: lesson2_component_1.BOLLesson2EnglishComponent
    },
    {
        path: 'bookoflessonslesson3English',
        component: lesson3_component_1.BOLLesson3EnglishComponent
    },
    {
        path: 'bookoflessonslesson4English',
        component: lesson4_component_1.BOLLesson4EnglishComponent
    },
    {
        path: 'bookoflessonslesson5English',
        component: lesson5_component_1.BOLLesson5EnglishComponent
    },
    {
        path: 'bookoflessonslesson6English',
        component: lesson6_component_1.BOLLesson6EnglishComponent
    },
    {
        path: 'bookoflessonslesson7English',
        component: lesson7_component_1.BOLLesson7EnglishComponent
    },
    {
        path: 'bookoflessonslesson8English',
        component: lesson8_component_1.BOLLesson8EnglishComponent
    },
    {
        path: 'bookoflessonslesson9English',
        component: lesson9_component_1.BOLLesson9EnglishComponent
    },
    {
        path: 'bookoflessonslesson10English',
        component: lesson10_component_1.BOLLesson10EnglishComponent
    },
    {
        path: 'bookoflessonslesson11English',
        component: lesson11_component_1.BOLLesson11EnglishComponent
    },
    {
        path: 'bookoflessonslesson12English',
        component: lesson12_component_1.BOLLesson12EnglishComponent
    },
    {
        path: 'bookoflessonslesson1Spanish',
        component: lesson1_component_2.BOLLesson1SpanishComponent
    },
    {
        path: 'bookoflessonslesson2Spanish',
        component: lesson2_component_2.BOLLesson2SpanishComponent
    },
    {
        path: 'bookoflessonslesson3Spanish',
        component: lesson3_component_2.BOLLesson3SpanishComponent
    },
    {
        path: 'bookoflessonslesson4Spanish',
        component: lesson4_component_2.BOLLesson4SpanishComponent
    },
    {
        path: 'bookoflessonslesson5Spanish',
        component: lesson5_component_2.BOLLesson5SpanishComponent
    },
    {
        path: 'bookoflessonslesson6Spanish',
        component: lesson6_component_2.BOLLesson6SpanishComponent
    },
    {
        path: 'bookoflessonslesson7Spanish',
        component: lesson7_component_2.BOLLesson7SpanishComponent
    },
    {
        path: 'bookoflessonslesson8Spanish',
        component: lesson8_component_2.BOLLesson8SpanishComponent
    },
    {
        path: 'bookoflessonslesson9Spanish',
        component: lesson9_component_2.BOLLesson9SpanishComponent
    },
    {
        path: 'bookoflessonslesson10Spanish',
        component: lesson10_component_2.BOLLesson10SpanishComponent
    },
    {
        path: 'bookoflessonslesson11Spanish',
        component: lesson11_component_2.BOLLesson11SpanishComponent
    },
    {
        path: 'bookoflessonslesson12Spanish',
        component: lesson12_component_2.BOLLesson12SpanishComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map