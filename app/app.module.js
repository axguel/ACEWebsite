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
var sidemenudutytolead_component_1 = require('./components/sidemenudutytolead/sidemenudutytolead.component');
var sidemenudutytoleadspanish_component_1 = require('./components/sidemenudutytolead/sidemenudutytoleadspanish.component');
var sidemenudutytoprosper_component_1 = require('./components/sidemenudutytoprosper/sidemenudutytoprosper.component');
var sidemenudutytoprosperspanish_component_1 = require('./components/sidemenudutytoprosper/sidemenudutytoprosperspanish.component');
var sidemenuruleofthumb_component_1 = require('./components/sidemenuruleofthumb/sidemenuruleofthumb.component');
var sidemenuruleofthumbspanish_component_1 = require('./components/sidemenuruleofthumb/sidemenuruleofthumbspanish.component');
//the main pages
var home_component_1 = require('./components/pages/home.component');
var about_component_1 = require('./components/pages/about.component');
var mychapter_component_1 = require('./components/pages/mychapter.component');
var chapterleaders_component_1 = require('./components/pages/chapterleaders.component');
var businessresources_component_1 = require('./components/pages/businessresources.component');
var contact_component_1 = require('./components/pages/contact.component');
var comingsoon_component_1 = require('./components/pages/comingsoon.component');
//subpages
var agenda_component_1 = require('./components/pages/subpages/agenda.component');
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
//finances
var finances_component_1 = require('./components/pages/subpages/financials/finances.component');
var mexicofinances_component_1 = require('./components/pages/subpages/financials/mexicofinances.component');
var phifinances_component_1 = require('./components/pages/subpages/financials/phifinances.component');
var perufinances_component_1 = require('./components/pages/subpages/financials/perufinances.component');
//psychology
var psychology_component_1 = require('./components/pages/subpages/psychology/psychology.component');
var mexicopsychology_component_1 = require('./components/pages/subpages/psychology/mexicopsychology.component');
var phipsychology_component_1 = require('./components/pages/subpages/psychology/phipsychology.component');
var perupsychology_component_1 = require('./components/pages/subpages/psychology/perupsychology.component');
//building
var building_component_1 = require('./components/pages/subpages/buildingandmain/building.component');
var mexicobuilding_component_1 = require('./components/pages/subpages/buildingandmain/mexicobuilding.component');
var phibuilding_component_1 = require('./components/pages/subpages/buildingandmain/phibuilding.component');
var perubuilding_component_1 = require('./components/pages/subpages/buildingandmain/perubuilding.component');
//hiring
var hiring_component_1 = require('./components/pages/subpages/hiring/hiring.component');
var mexicohiring_component_1 = require('./components/pages/subpages/hiring/mexicohiring.component');
var phihiring_component_1 = require('./components/pages/subpages/hiring/phihiring.component');
var peruhiring_component_1 = require('./components/pages/subpages/hiring/peruhiring.component');
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
//englishdutytolead
var lesson1_component_3 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson1.component');
var lesson2_component_3 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson2.component');
var lesson3_component_3 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson3.component');
var lesson4_component_3 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson4.component');
var lesson5_component_3 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson5.component');
var lesson6_component_3 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson6.component');
var lesson7_component_3 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson7.component');
var lesson8_component_3 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson8.component');
var lesson9_component_3 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson9.component');
var lesson10_component_3 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson10.component');
var lesson11_component_3 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson11.component');
var lesson12_component_3 = require('./components/pages/subpages/dutytolead/allenglishlessons/lesson12.component');
//spanishdutytolead
var lesson1_component_4 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson1.component');
var lesson2_component_4 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson2.component');
var lesson3_component_4 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson3.component');
var lesson4_component_4 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson4.component');
var lesson5_component_4 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson5.component');
var lesson6_component_4 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson6.component');
var lesson7_component_4 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson7.component');
var lesson8_component_4 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson8.component');
var lesson9_component_4 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson9.component');
var lesson10_component_4 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson10.component');
var lesson11_component_4 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson11.component');
var lesson12_component_4 = require('./components/pages/subpages/dutytolead/allspanishlessons/lesson12.component');
//englishdutytoprosper
var lesson1_component_5 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson1.component');
var lesson2_component_5 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson2.component');
var lesson3_component_5 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson3.component');
var lesson4_component_5 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson4.component');
var lesson5_component_5 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson5.component');
var lesson6_component_5 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson6.component');
var lesson7_component_5 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson7.component');
var lesson8_component_5 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson8.component');
var lesson9_component_5 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson9.component');
var lesson10_component_5 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson10.component');
var lesson11_component_5 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson11.component');
var lesson12_component_5 = require('./components/pages/subpages/dutytoprosper/allenglishlessons/lesson12.component');
//spanishdutytoprosper
var lesson1_component_6 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson1.component');
var lesson2_component_6 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson2.component');
var lesson3_component_6 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson3.component');
var lesson4_component_6 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson4.component');
var lesson5_component_6 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson5.component');
var lesson6_component_6 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson6.component');
var lesson7_component_6 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson7.component');
var lesson8_component_6 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson8.component');
var lesson9_component_6 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson9.component');
var lesson10_component_6 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson10.component');
var lesson11_component_6 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson11.component');
var lesson12_component_6 = require('./components/pages/subpages/dutytoprosper/allspanishlessons/lesson12.component');
//ruleofthumb
var lessonsenglish_component_2 = require('./components/pages/subpages/ruleofthumb/lessonsenglish.component');
var lessonsspanish_component_2 = require('./components/pages/subpages/ruleofthumb/lessonsspanish.component');
//englishruleofthumblessons
var lesson1_component_7 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson1.component');
var lesson2_component_7 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson2.component');
var lesson3_component_7 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson3.component');
var lesson4_component_7 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson4.component');
var lesson5_component_7 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson5.component');
var lesson6_component_7 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson6.component');
var lesson7_component_7 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson7.component');
var lesson8_component_7 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson8.component');
var lesson9_component_7 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson9.component');
var lesson10_component_7 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson10.component');
var lesson11_component_7 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson11.component');
var lesson12_component_7 = require('./components/pages/subpages/ruleofthumb/allenglishlessons/lesson12.component');
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
var lesson1_component_8 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson1.component');
var lesson2_component_8 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson2.component');
var lesson3_component_8 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson3.component');
var lesson4_component_8 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson4.component');
var lesson5_component_8 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson5.component');
var lesson6_component_8 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson6.component');
var lesson7_component_8 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson7.component');
var lesson8_component_8 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson8.component');
var lesson9_component_8 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson9.component');
var lesson10_component_8 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson10.component');
var lesson11_component_8 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson11.component');
var lesson12_component_8 = require('./components/pages/subpages/ruleofthumb/allspanishlessons/lesson12.component');
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
                sidemenudutytolead_component_1.SideMenuDutytoLeadComponent,
                sidemenudutytoleadspanish_component_1.SideMenuDutytoLeadSpanishComponent,
                sidemenudutytoprosper_component_1.SideMenuDutytoProsperComponent,
                sidemenudutytoprosperspanish_component_1.SideMenuDutytoProsperSpanishComponent,
                sidemenuruleofthumb_component_1.SideMenuRuleofThumbComponent,
                sidemenuruleofthumbspanish_component_1.SideMenuRuleofThumbSpanishComponent,
                jumbotron_component_1.JumbotronComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                comingsoon_component_1.ComingSoonComponent,
                about_component_1.AboutComponent,
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
                dutytolead_component_1.DutytoLeadComponent,
                dutytoprosper_component_1.DutytoProsperComponent,
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
                lesson1_component_3.DTLLesson1EnglishComponent,
                lesson2_component_3.DTLLesson2EnglishComponent,
                lesson3_component_3.DTLLesson3EnglishComponent,
                lesson4_component_3.DTLLesson4EnglishComponent,
                lesson5_component_3.DTLLesson5EnglishComponent,
                lesson6_component_3.DTLLesson6EnglishComponent,
                lesson7_component_3.DTLLesson7EnglishComponent,
                lesson8_component_3.DTLLesson8EnglishComponent,
                lesson9_component_3.DTLLesson9EnglishComponent,
                lesson10_component_3.DTLLesson10EnglishComponent,
                lesson11_component_3.DTLLesson11EnglishComponent,
                lesson12_component_3.DTLLesson12EnglishComponent,
                lesson1_component_4.DTLLesson1SpanishComponent,
                lesson2_component_4.DTLLesson2SpanishComponent,
                lesson3_component_4.DTLLesson3SpanishComponent,
                lesson4_component_4.DTLLesson4SpanishComponent,
                lesson5_component_4.DTLLesson5SpanishComponent,
                lesson6_component_4.DTLLesson6SpanishComponent,
                lesson7_component_4.DTLLesson7SpanishComponent,
                lesson8_component_4.DTLLesson8SpanishComponent,
                lesson9_component_4.DTLLesson9SpanishComponent,
                lesson10_component_4.DTLLesson10SpanishComponent,
                lesson11_component_4.DTLLesson11SpanishComponent,
                lesson12_component_4.DTLLesson12SpanishComponent,
                lesson1_component_5.DTPLesson1EnglishComponent,
                lesson2_component_5.DTPLesson2EnglishComponent,
                lesson3_component_5.DTPLesson3EnglishComponent,
                lesson4_component_5.DTPLesson4EnglishComponent,
                lesson5_component_5.DTPLesson5EnglishComponent,
                lesson6_component_5.DTPLesson6EnglishComponent,
                lesson7_component_5.DTPLesson7EnglishComponent,
                lesson8_component_5.DTPLesson8EnglishComponent,
                lesson9_component_5.DTPLesson9EnglishComponent,
                lesson10_component_5.DTPLesson10EnglishComponent,
                lesson11_component_5.DTPLesson11EnglishComponent,
                lesson12_component_5.DTPLesson12EnglishComponent,
                lesson1_component_6.DTPLesson1SpanishComponent,
                lesson2_component_6.DTPLesson2SpanishComponent,
                lesson3_component_6.DTPLesson3SpanishComponent,
                lesson4_component_6.DTPLesson4SpanishComponent,
                lesson5_component_6.DTPLesson5SpanishComponent,
                lesson6_component_6.DTPLesson6SpanishComponent,
                lesson7_component_6.DTPLesson7SpanishComponent,
                lesson8_component_6.DTPLesson8SpanishComponent,
                lesson9_component_6.DTPLesson9SpanishComponent,
                lesson10_component_6.DTPLesson10SpanishComponent,
                lesson11_component_6.DTPLesson11SpanishComponent,
                lesson12_component_6.DTPLesson12SpanishComponent,
                lesson1_component_7.ROTLesson1EnglishComponent,
                lesson2_component_7.ROTLesson2EnglishComponent,
                lesson3_component_7.ROTLesson3EnglishComponent,
                lesson4_component_7.ROTLesson4EnglishComponent,
                lesson5_component_7.ROTLesson5EnglishComponent,
                lesson6_component_7.ROTLesson6EnglishComponent,
                lesson7_component_7.ROTLesson7EnglishComponent,
                lesson8_component_7.ROTLesson8EnglishComponent,
                lesson9_component_7.ROTLesson9EnglishComponent,
                lesson10_component_7.ROTLesson10EnglishComponent,
                lesson11_component_7.ROTLesson11EnglishComponent,
                lesson12_component_7.ROTLesson12EnglishComponent,
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
                lesson1_component_8.ROTLesson1SpanishComponent,
                lesson2_component_8.ROTLesson2SpanishComponent,
                lesson3_component_8.ROTLesson3SpanishComponent,
                lesson4_component_8.ROTLesson4SpanishComponent,
                lesson5_component_8.ROTLesson5SpanishComponent,
                lesson6_component_8.ROTLesson6SpanishComponent,
                lesson7_component_8.ROTLesson7SpanishComponent,
                lesson8_component_8.ROTLesson8SpanishComponent,
                lesson9_component_8.ROTLesson9SpanishComponent,
                lesson10_component_8.ROTLesson10SpanishComponent,
                lesson11_component_8.ROTLesson11SpanishComponent,
                lesson12_component_8.ROTLesson12SpanishComponent,
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
                mexicolegalities_component_1.MexicoLegalitiesComponent,
                peruhiring_component_1.PeruHiringComponent,
                phihiring_component_1.PhiHiringComponent,
                mexicohiring_component_1.MexicoHiringComponent,
                perubuilding_component_1.PeruBuildingComponent,
                phibuilding_component_1.PhiBuildingComponent,
                mexicobuilding_component_1.MexicoBuildingComponent,
                perufinances_component_1.PeruFinancesComponent,
                phifinances_component_1.PhiFinancesComponent,
                mexicofinances_component_1.MexicoFinancesComponent,
                perupsychology_component_1.PeruPsychologyComponent,
                phipsychology_component_1.PhiPsychologyComponent,
                mexicopsychology_component_1.MexicoPsychologyComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map