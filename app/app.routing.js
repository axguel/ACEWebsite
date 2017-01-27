"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/pages/home.component');
var about_component_1 = require('./components/pages/about.component');
var donors_component_1 = require('./components/pages/donors.component');
var mychapter_component_1 = require('./components/pages/mychapter.component');
var chapterleaders_component_1 = require('./components/pages/chapterleaders.component');
var businessresources_component_1 = require('./components/pages/businessresources.component');
var comingsoon_component_1 = require('./components/pages/comingsoon.component');
var contact_component_1 = require('./components/pages/contact.component');
//subpages
var agenda_component_1 = require('./components/pages/subpages/agenda.component');
var hiring_component_1 = require('./components/pages/subpages/hiring.component');
var building_component_1 = require('./components/pages/subpages/building.component');
var psychology_component_1 = require('./components/pages/subpages/psychology.component');
var finances_component_1 = require('./components/pages/subpages/finances.component');
var bookoflessons_component_1 = require('./components/pages/subpages/bookoflessons.component');
var dutytolead_component_1 = require('./components/pages/subpages/dutytolead.component');
var dutytoprosper_component_1 = require('./components/pages/subpages/dutytoprosper.component');
var ruleofthumb_component_1 = require('./components/pages/subpages/ruleofthumb.component');
var findchapter_component_1 = require('./components/pages/subpages/findchapter.component');
//legalities
var legalities_component_1 = require('./components/pages/subpages/legalities/legalities.component');
var mexicolegalities_component_1 = require('./components/pages/subpages/legalities/mexicolegalities.component');
var philegalities_component_1 = require('./components/pages/subpages/legalities/philegalities.component');
var perulegalities_component_1 = require('./components/pages/subpages/legalities/perulegalities.component');
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
//englishruleofthumblessons 
var lesson1_component_3 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson1.component');
var lesson2_component_3 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson2.component');
var lesson3_component_3 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson3.component');
var lesson4_component_3 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson4.component');
var lesson5_component_3 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson5.component');
var lesson6_component_3 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson6.component');
var lesson7_component_3 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson7.component');
var lesson8_component_3 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson8.component');
var lesson9_component_3 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson9.component');
var lesson10_component_3 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson10.component');
var lesson11_component_3 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson11.component');
var lesson12_component_3 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson12.component');
var lesson13_component_1 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson13.component');
var lesson14_component_1 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson14.component');
var lesson15_component_1 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson15.component');
var lesson16_component_1 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson16.component');
var lesson17_component_1 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson17.component');
var lesson18_component_1 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson18.component');
var lesson19_component_1 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson19.component');
var lesson20_component_1 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson20.component');
var lesson21_component_1 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson21.component');
var lesson22_component_1 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson22.component');
var lesson23_component_1 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson23.component');
var lesson24_component_1 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson24.component');
var lesson25_component_1 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson25.component');
//spanishruleofthumblessons
var lesson1_component_4 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson1.component');
var lesson2_component_4 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson2.component');
var lesson3_component_4 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson3.component');
var lesson4_component_4 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson4.component');
var lesson5_component_4 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson5.component');
var lesson6_component_4 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson6.component');
var lesson7_component_4 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson7.component');
var lesson8_component_4 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson8.component');
var lesson9_component_4 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson9.component');
var lesson10_component_4 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson10.component');
var lesson11_component_4 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson11.component');
var lesson12_component_4 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson12.component');
var lesson13_component_2 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson13.component');
var lesson14_component_2 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson14.component');
var lesson15_component_2 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson15.component');
var lesson16_component_2 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson16.component');
var lesson17_component_2 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson17.component');
var lesson18_component_2 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson18.component');
var lesson19_component_2 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson19.component');
var lesson20_component_2 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson20.component');
var lesson21_component_2 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson21.component');
var lesson22_component_2 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson22.component');
var lesson23_component_2 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson23.component');
var lesson24_component_2 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson24.component');
var lesson25_component_2 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson25.component');
//englishdutytolead
var lesson1_component_5 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson1.component');
var lesson2_component_5 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson2.component');
var lesson3_component_5 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson3.component');
var lesson4_component_5 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson4.component');
var lesson5_component_5 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson5.component');
var lesson6_component_5 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson6.component');
var lesson7_component_5 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson7.component');
var lesson8_component_5 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson8.component');
var lesson9_component_5 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson9.component');
var lesson10_component_5 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson10.component');
var lesson11_component_5 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson11.component');
var lesson12_component_5 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson12.component');
//spanishdutytolead
var lesson1_component_6 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson1.component');
var lesson2_component_6 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson2.component');
var lesson3_component_6 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson3.component');
var lesson4_component_6 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson4.component');
var lesson5_component_6 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson5.component');
var lesson6_component_6 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson6.component');
var lesson7_component_6 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson7.component');
var lesson8_component_6 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson8.component');
var lesson9_component_6 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson9.component');
var lesson10_component_6 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson10.component');
var lesson11_component_6 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson11.component');
var lesson12_component_6 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson12.component');
//englishdutytoprosper
var lesson1_component_7 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson1.component');
var lesson2_component_7 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson2.component');
var lesson3_component_7 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson3.component');
var lesson4_component_7 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson4.component');
var lesson5_component_7 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson5.component');
var lesson6_component_7 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson6.component');
var lesson7_component_7 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson7.component');
var lesson8_component_7 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson8.component');
var lesson9_component_7 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson9.component');
var lesson10_component_7 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson10.component');
var lesson11_component_7 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson11.component');
var lesson12_component_7 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson12.component');
//spanishdutytoprosper
var lesson1_component_8 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson1.component');
var lesson2_component_8 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson2.component');
var lesson3_component_8 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson3.component');
var lesson4_component_8 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson4.component');
var lesson5_component_8 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson5.component');
var lesson6_component_8 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson6.component');
var lesson7_component_8 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson7.component');
var lesson8_component_8 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson8.component');
var lesson9_component_8 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson9.component');
var lesson10_component_8 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson10.component');
var lesson11_component_8 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson11.component');
var lesson12_component_8 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson12.component');
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
        path: 'dutytolead',
        component: dutytolead_component_1.DutytoLeadComponent
    },
    {
        path: 'dutytoprosper',
        component: dutytoprosper_component_1.DutytoProsperComponent
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
    },
    {
        path: 'dutytoleadlesson1English',
        component: lesson1_component_5.DTLLesson1EnglishComponent
    },
    {
        path: 'dutytoleadlesson2English',
        component: lesson2_component_5.DTLLesson2EnglishComponent
    },
    {
        path: 'dutytoleadlesson3English',
        component: lesson3_component_5.DTLLesson3EnglishComponent
    },
    {
        path: 'dutytoleadlesson4English',
        component: lesson4_component_5.DTLLesson4EnglishComponent
    },
    {
        path: 'dutytoleadlesson5English',
        component: lesson5_component_5.DTLLesson5EnglishComponent
    },
    {
        path: 'dutytoleadlesson6English',
        component: lesson6_component_5.DTLLesson6EnglishComponent
    },
    {
        path: 'dutytoleadlesson7English',
        component: lesson7_component_5.DTLLesson7EnglishComponent
    },
    {
        path: 'dutytoleadlesson8English',
        component: lesson8_component_5.DTLLesson8EnglishComponent
    },
    {
        path: 'dutytoleadlesson9English',
        component: lesson9_component_5.DTLLesson9EnglishComponent
    },
    {
        path: 'dutytoleadlesson10English',
        component: lesson10_component_5.DTLLesson10EnglishComponent
    },
    {
        path: 'dutytoleadlesson11English',
        component: lesson11_component_5.DTLLesson11EnglishComponent
    },
    {
        path: 'dutytoleadlesson12English',
        component: lesson12_component_5.DTLLesson12EnglishComponent
    },
    {
        path: 'dutytoleadlesson1Spanish',
        component: lesson1_component_6.DTLLesson1SpanishComponent
    },
    {
        path: 'dutytoleadlesson2Spanish',
        component: lesson2_component_6.DTLLesson2SpanishComponent
    },
    {
        path: 'dutytoleadlesson3Spanish',
        component: lesson3_component_6.DTLLesson3SpanishComponent
    },
    {
        path: 'dutytoleadlesson4Spanish',
        component: lesson4_component_6.DTLLesson4SpanishComponent
    },
    {
        path: 'dutytoleadlesson5Spanish',
        component: lesson5_component_6.DTLLesson5SpanishComponent
    },
    {
        path: 'dutytoleadlesson6Spanish',
        component: lesson6_component_6.DTLLesson6SpanishComponent
    },
    {
        path: 'dutytoleadlesson7Spanish',
        component: lesson7_component_6.DTLLesson7SpanishComponent
    },
    {
        path: 'dutytoleadlesson8Spanish',
        component: lesson8_component_6.DTLLesson8SpanishComponent
    },
    {
        path: 'dutytoleadlesson9Spanish',
        component: lesson9_component_6.DTLLesson9SpanishComponent
    },
    {
        path: 'dutytoleadlesson10Spanish',
        component: lesson10_component_6.DTLLesson10SpanishComponent
    },
    {
        path: 'dutytoleadlesson11Spanish',
        component: lesson11_component_6.DTLLesson11SpanishComponent
    },
    {
        path: 'dutytoleadlesson12Spanish',
        component: lesson12_component_6.DTLLesson12SpanishComponent
    },
    {
        path: 'ruleofthumblesson1English',
        component: lesson1_component_3.ROTLesson1EnglishComponent
    },
    {
        path: 'ruleofthumblesson2English',
        component: lesson2_component_3.ROTLesson2EnglishComponent
    },
    {
        path: 'ruleofthumblesson3English',
        component: lesson3_component_3.ROTLesson3EnglishComponent
    },
    {
        path: 'ruleofthumblesson4English',
        component: lesson4_component_3.ROTLesson4EnglishComponent
    },
    {
        path: 'ruleofthumblesson5English',
        component: lesson5_component_3.ROTLesson5EnglishComponent
    },
    {
        path: 'ruleofthumblesson6English',
        component: lesson6_component_3.ROTLesson6EnglishComponent
    },
    {
        path: 'ruleofthumblesson7English',
        component: lesson7_component_3.ROTLesson7EnglishComponent
    },
    {
        path: 'ruleofthumblesson8English',
        component: lesson8_component_3.ROTLesson8EnglishComponent
    },
    {
        path: 'ruleofthumblesson9English',
        component: lesson9_component_3.ROTLesson9EnglishComponent
    },
    {
        path: 'ruleofthumblesson10English',
        component: lesson10_component_3.ROTLesson10EnglishComponent
    },
    {
        path: 'ruleofthumblesson11English',
        component: lesson11_component_3.ROTLesson11EnglishComponent
    },
    {
        path: 'ruleofthumblesson12English',
        component: lesson12_component_3.ROTLesson12EnglishComponent
    },
    {
        path: 'ruleofthumblesson13English',
        component: lesson13_component_1.ROTLesson13EnglishComponent
    },
    {
        path: 'ruleofthumblesson14English',
        component: lesson14_component_1.ROTLesson14EnglishComponent
    },
    {
        path: 'ruleofthumblesson15English',
        component: lesson15_component_1.ROTLesson15EnglishComponent
    },
    {
        path: 'ruleofthumblesson16English',
        component: lesson16_component_1.ROTLesson16EnglishComponent
    },
    {
        path: 'ruleofthumblesson17English',
        component: lesson17_component_1.ROTLesson17EnglishComponent
    },
    {
        path: 'ruleofthumblesson18English',
        component: lesson18_component_1.ROTLesson18EnglishComponent
    },
    {
        path: 'ruleofthumblesson19English',
        component: lesson19_component_1.ROTLesson19EnglishComponent
    },
    {
        path: 'ruleofthumblesson20English',
        component: lesson20_component_1.ROTLesson20EnglishComponent
    },
    {
        path: 'ruleofthumblesson21English',
        component: lesson21_component_1.ROTLesson21EnglishComponent
    },
    {
        path: 'ruleofthumblesson22English',
        component: lesson22_component_1.ROTLesson22EnglishComponent
    },
    {
        path: 'ruleofthumblesson23English',
        component: lesson23_component_1.ROTLesson23EnglishComponent
    },
    {
        path: 'ruleofthumblesson24English',
        component: lesson24_component_1.ROTLesson24EnglishComponent
    },
    {
        path: 'ruleofthumblesson25English',
        component: lesson25_component_1.ROTLesson25EnglishComponent
    },
    {
        path: 'ruleofthumblesson1Spanish',
        component: lesson1_component_4.ROTLesson1SpanishComponent
    },
    {
        path: 'ruleofthumblesson2Spanish',
        component: lesson2_component_4.ROTLesson2SpanishComponent
    },
    {
        path: 'ruleofthumblesson3Spanish',
        component: lesson3_component_4.ROTLesson3SpanishComponent
    },
    {
        path: 'ruleofthumblesson4Spanish',
        component: lesson4_component_4.ROTLesson4SpanishComponent
    },
    {
        path: 'ruleofthumblesson5Spanish',
        component: lesson5_component_4.ROTLesson5SpanishComponent
    },
    {
        path: 'ruleofthumblesson6Spanish',
        component: lesson6_component_4.ROTLesson6SpanishComponent
    },
    {
        path: 'ruleofthumblesson7Spanish',
        component: lesson7_component_4.ROTLesson7SpanishComponent
    },
    {
        path: 'ruleofthumblesson8Spanish',
        component: lesson8_component_4.ROTLesson8SpanishComponent
    },
    {
        path: 'ruleofthumblesson9Spanish',
        component: lesson9_component_4.ROTLesson9SpanishComponent
    },
    {
        path: 'ruleofthumblesson10Spanish',
        component: lesson10_component_4.ROTLesson10SpanishComponent
    },
    {
        path: 'ruleofthumblesson11Spanish',
        component: lesson11_component_4.ROTLesson11SpanishComponent
    },
    {
        path: 'ruleofthumblesson12Spanish',
        component: lesson12_component_4.ROTLesson12SpanishComponent
    },
    {
        path: 'ruleofthumblesson13Spanish',
        component: lesson13_component_2.ROTLesson13SpanishComponent
    },
    {
        path: 'ruleofthumblesson14Spanish',
        component: lesson14_component_2.ROTLesson14SpanishComponent
    },
    {
        path: 'ruleofthumblesson15Spanish',
        component: lesson15_component_2.ROTLesson15SpanishComponent
    },
    {
        path: 'ruleofthumblesson16Spanish',
        component: lesson16_component_2.ROTLesson16SpanishComponent
    },
    {
        path: 'ruleofthumblesson17Spanish',
        component: lesson17_component_2.ROTLesson17SpanishComponent
    },
    {
        path: 'ruleofthumblesson18Spanish',
        component: lesson18_component_2.ROTLesson18SpanishComponent
    },
    {
        path: 'ruleofthumblesson19Spanish',
        component: lesson19_component_2.ROTLesson19SpanishComponent
    },
    {
        path: 'ruleofthumblesson20Spanish',
        component: lesson20_component_2.ROTLesson20SpanishComponent
    },
    {
        path: 'ruleofthumblesson21Spanish',
        component: lesson21_component_2.ROTLesson21SpanishComponent
    },
    {
        path: 'ruleofthumblesson22Spanish',
        component: lesson22_component_2.ROTLesson22SpanishComponent
    },
    {
        path: 'ruleofthumblesson23Spanish',
        component: lesson23_component_2.ROTLesson23SpanishComponent
    },
    {
        path: 'ruleofthumblesson24Spanish',
        component: lesson24_component_2.ROTLesson24SpanishComponent
    },
    {
        path: 'ruleofthumblesson25Spanish',
        component: lesson25_component_2.ROTLesson25SpanishComponent
    },
    {
        path: 'featurecomingsoon',
        component: comingsoon_component_1.ComingSoonComponent
    },
    {
        path: 'mexicolegalities',
        component: mexicolegalities_component_1.MexicoLegalitiesComponent
    },
    {
        path: 'perulegalities',
        component: perulegalities_component_1.PeruLegalitiesComponent
    },
    {
        path: 'philegalities',
        component: philegalities_component_1.PhiLegalitiesComponent
    },
    {
        path: 'dutytoprosperlesson1English',
        component: lesson1_component_7.DTPLesson1EnglishComponent
    },
    {
        path: 'dutytoprosperlesson2English',
        component: lesson2_component_7.DTPLesson2EnglishComponent
    },
    {
        path: 'dutytoprosperlesson3English',
        component: lesson3_component_7.DTPLesson3EnglishComponent
    },
    {
        path: 'dutytoprosperlesson4English',
        component: lesson4_component_7.DTPLesson4EnglishComponent
    },
    {
        path: 'dutytoprosperlesson5English',
        component: lesson5_component_7.DTPLesson5EnglishComponent
    },
    {
        path: 'dutytoprosperlesson6English',
        component: lesson6_component_7.DTPLesson6EnglishComponent
    },
    {
        path: 'dutytoprosperlesson7English',
        component: lesson7_component_7.DTPLesson7EnglishComponent
    },
    {
        path: 'dutytoprosperlesson8English',
        component: lesson8_component_7.DTPLesson8EnglishComponent
    },
    {
        path: 'dutytoprosperlesson9English',
        component: lesson9_component_7.DTPLesson9EnglishComponent
    },
    {
        path: 'dutytoprosperlesson10English',
        component: lesson10_component_7.DTPLesson10EnglishComponent
    },
    {
        path: 'dutytoprosperlesson11English',
        component: lesson11_component_7.DTPLesson11EnglishComponent
    },
    {
        path: 'dutytoprosperlesson12English',
        component: lesson12_component_7.DTPLesson12EnglishComponent
    },
    {
        path: 'dutytoprosperlesson1Spanish',
        component: lesson1_component_8.DTPLesson1SpanishComponent
    },
    {
        path: 'dutytoprosperlesson2Spanish',
        component: lesson2_component_8.DTPLesson2SpanishComponent
    },
    {
        path: 'dutytoprosperlesson3Spanish',
        component: lesson3_component_8.DTPLesson3SpanishComponent
    },
    {
        path: 'dutytoprosperlesson4Spanish',
        component: lesson4_component_8.DTPLesson4SpanishComponent
    },
    {
        path: 'dutytoprosperlesson5Spanish',
        component: lesson5_component_8.DTPLesson5SpanishComponent
    },
    {
        path: 'dutytoprosperlesson6Spanish',
        component: lesson6_component_8.DTPLesson6SpanishComponent
    },
    {
        path: 'dutytoprosperlesson7Spanish',
        component: lesson7_component_8.DTPLesson7SpanishComponent
    },
    {
        path: 'dutytoprosperlesson8Spanish',
        component: lesson8_component_8.DTPLesson8SpanishComponent
    },
    {
        path: 'dutytoprosperlesson9Spanish',
        component: lesson9_component_8.DTPLesson9SpanishComponent
    },
    {
        path: 'dutytoprosperlesson10Spanish',
        component: lesson10_component_8.DTPLesson10SpanishComponent
    },
    {
        path: 'dutytoprosperlesson11Spanish',
        component: lesson11_component_8.DTPLesson11SpanishComponent
    },
    {
        path: 'dutytoprosperlesson12Spanish',
        component: lesson12_component_8.DTPLesson12SpanishComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map