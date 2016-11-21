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
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map