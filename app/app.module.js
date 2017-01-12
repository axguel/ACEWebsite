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
var sidemenuruleofthumbspanish_component_1 = require('./components/sidemenuruleofthumb/sidemenuruleofthumbspanish.component');
//the main pages
var home_component_1 = require('./components/pages/home.component');
var about_component_1 = require('./components/pages/about.component');
var donors_component_1 = require('./components/pages/donors.component');
var mychapter_component_1 = require('./components/pages/mychapter.component');
var chapterleaders_component_1 = require('./components/pages/chapterleaders.component');
var businessresources_component_1 = require('./components/pages/businessresources.component');
var contact_component_1 = require('./components/pages/contact.component');
var comingsoon_component_1 = require('./components/pages/comingsoon.component');
//subpages
var agenda_component_1 = require('./components/pages/subpages/agenda.component');
var hiring_component_1 = require('./components/pages/subpages/hiring.component');
var building_component_1 = require('./components/pages/subpages/building.component');
var psychology_component_1 = require('./components/pages/subpages/psychology.component');
var finances_component_1 = require('./components/pages/subpages/finances.component');
var bookoflessons_component_1 = require('./components/pages/subpages/bookoflessons.component');
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
                sidemenuruleofthumbspanish_component_1.SideMenuRuleofThumbSpanishComponent,
                jumbotron_component_1.JumbotronComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                comingsoon_component_1.ComingSoonComponent,
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
                lesson12_component_2.BOLLesson12SpanishComponent,
                lesson1_component_3.ROTLesson1EnglishComponent,
                lesson2_component_3.ROTLesson2EnglishComponent,
                lesson3_component_3.ROTLesson3EnglishComponent,
                lesson4_component_3.ROTLesson4EnglishComponent,
                lesson5_component_3.ROTLesson5EnglishComponent,
                lesson6_component_3.ROTLesson6EnglishComponent,
                lesson7_component_3.ROTLesson7EnglishComponent,
                lesson8_component_3.ROTLesson8EnglishComponent,
                lesson9_component_3.ROTLesson9EnglishComponent,
                lesson10_component_3.ROTLesson10EnglishComponent,
                lesson11_component_3.ROTLesson11EnglishComponent,
                lesson12_component_3.ROTLesson12EnglishComponent,
                lesson13_component_1.ROTLesson13EnglishComponent,
                lesson14_component_1.ROTLesson14EnglishComponent,
                lesson15_component_1.ROTLesson15EnglishComponent,
                lesson16_component_1.ROTLesson16EnglishComponent,
                lesson17_component_1.ROTLesson17EnglishComponent,
                lesson18_component_1.ROTLesson18EnglishComponent,
                lesson19_component_1.ROTLesson19EnglishComponent,
                lesson20_component_1.ROTLesson20EnglishComponent,
                lesson21_component_1.ROTLesson21EnglishComponent,
                lesson22_component_1.ROTLesson22EnglishComponent,
                lesson23_component_1.ROTLesson23EnglishComponent,
                lesson24_component_1.ROTLesson24EnglishComponent,
                lesson25_component_1.ROTLesson25EnglishComponent,
                lesson1_component_4.ROTLesson1SpanishComponent,
                lesson2_component_4.ROTLesson2SpanishComponent,
                lesson3_component_4.ROTLesson3SpanishComponent,
                lesson4_component_4.ROTLesson4SpanishComponent,
                lesson5_component_4.ROTLesson5SpanishComponent,
                lesson6_component_4.ROTLesson6SpanishComponent,
                lesson7_component_4.ROTLesson7SpanishComponent,
                lesson8_component_4.ROTLesson8SpanishComponent,
                lesson9_component_4.ROTLesson9SpanishComponent,
                lesson10_component_4.ROTLesson10SpanishComponent,
                lesson11_component_4.ROTLesson11SpanishComponent,
                lesson12_component_4.ROTLesson12SpanishComponent,
                lesson13_component_2.ROTLesson13SpanishComponent,
                lesson14_component_2.ROTLesson14SpanishComponent,
                lesson15_component_2.ROTLesson15SpanishComponent,
                lesson16_component_2.ROTLesson16SpanishComponent,
                lesson17_component_2.ROTLesson17SpanishComponent,
                lesson18_component_2.ROTLesson18SpanishComponent,
                lesson19_component_2.ROTLesson19SpanishComponent,
                lesson20_component_2.ROTLesson20SpanishComponent,
                lesson21_component_2.ROTLesson21SpanishComponent,
                lesson22_component_2.ROTLesson22SpanishComponent,
                lesson23_component_2.ROTLesson23SpanishComponent,
                lesson24_component_2.ROTLesson24SpanishComponent,
                lesson25_component_2.ROTLesson25SpanishComponent,
                perulegalities_component_1.PeruLegalitiesComponent,
                philegalities_component_1.PhiLegalitiesComponent,
                mexicolegalities_component_1.MexicoLegalitiesComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map