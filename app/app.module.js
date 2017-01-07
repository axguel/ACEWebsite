"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
//page components
var navbar_component_1 = require('./components/navbar/navbar.component');
var jumbotron_component_1 = require('./components/jumbotron/jumbotron.component');
var footer_component_1 = require('./components/footer/footer.component');
var sidemenubookoflessons_component_1 = require('./components/sidemenubookoflessons/sidemenubookoflessons.component');
var sidemenubookoflessonsspanish_component_1 = require('./components/sidemenubookoflessons/sidemenubookoflessonsspanish.component');
var sidemenuruleofthumb_component_1 = require('./components/sidemenuruleofthumb/sidemenuruleofthumb.component');
//the main pages
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
//englishbookoflessons
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
//routing component
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                sidemenubookoflessons_component_1.SideMenuBookofLessonsComponent,
                sidemenubookoflessonsspanish_component_1.SideMenuBookofLessonsSpanishComponent,
                sidemenuruleofthumb_component_1.SideMenuRuleofThumbComponent,
                jumbotron_component_1.JumbotronComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                donors_component_1.DonorsComponent,
                mychapter_component_1.MyChapterComponent,
                chapterleaders_component_1.ChapterLeadersComponent,
                businessresources_component_1.BusinessResourcesComponent,
                contact_component_1.ContactComponent,
                agenda_component_1.AgendaComponent,
                legalities_component_1.LegalitiesComponent,
                building_component_1.BuildingComponent,
                hiring_component_1.HiringComponent,
                psychology_component_1.PsychologyComponent,
                finances_component_1.FinancesComponent,
                bookoflessons_component_1.BookofLessonsComponent,
                findchapter_component_1.FindChapterComponent,
                lessonsenglish_component_1.LessonsEnglishComponent,
                lessonsspanish_component_1.LessonsSpanishComponent,
                ruleofthumb_component_1.RuleofThumbComponent,
                lessonsenglish_component_2.RuleofThumbLessonsEnglishComponent,
                lessonsspanish_component_2.RuleofThumbLessonsSpanishComponent,
                introduction_component_1.BookofLessonsIntroComponent,
                lesson1_component_1.BOLLesson1EnglishComponent,
                lesson2_component_1.BOLLesson2EnglishComponent,
                lesson3_component_1.BOLLesson3EnglishComponent,
                lesson4_component_1.BOLLesson4EnglishComponent,
                lesson5_component_1.BOLLesson5EnglishComponent,
                lesson6_component_1.BOLLesson6EnglishComponent,
                lesson7_component_1.BOLLesson7EnglishComponent,
                lesson8_component_1.BOLLesson8EnglishComponent,
                lesson9_component_1.BOLLesson9EnglishComponent,
                lesson10_component_1.BOLLesson10EnglishComponent,
                lesson11_component_1.BOLLesson11EnglishComponent,
                lesson12_component_1.BOLLesson12EnglishComponent,
                lesson1_component_2.BOLLesson1SpanishComponent,
                lesson2_component_2.BOLLesson2SpanishComponent,
                lesson3_component_2.BOLLesson3SpanishComponent,
                lesson4_component_2.BOLLesson4SpanishComponent,
                lesson5_component_2.BOLLesson5SpanishComponent,
                lesson6_component_2.BOLLesson6SpanishComponent,
                lesson7_component_2.BOLLesson7SpanishComponent,
                lesson8_component_2.BOLLesson8SpanishComponent,
                lesson9_component_2.BOLLesson9SpanishComponent,
                lesson10_component_2.BOLLesson10SpanishComponent,
                lesson11_component_2.BOLLesson11SpanishComponent,
                lesson12_component_2.BOLLesson12SpanishComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map