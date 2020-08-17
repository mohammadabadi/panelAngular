var WebPanel;
(function (WebPanel) {
    var Routes = /** @class */ (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($stateProvider, $urlRouterProvider, $locationProvider) {
            var basePaths = '/app';
            // Redirect any unmatched url
            //$urlRouterProvider.otherwise("/dashboard");
            // $stateProvider
            //     // Dashboard
            //     .state('dashboard', {
            //         url: "/dashboard",
            //         templateUrl: basePaths + '/index.html',
            //         data: { pageTitle: 'پنل مدیریت' },
            //         controller: "dashboardController"
            //         // resolve: {
            //         //     deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //         //         return $ocLazyLoad.load({
            //         //             name: 'WebApp',
            //         //             insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
            //         //             files: [
            //         //                 basePaths + 'view/dashboard/dashboard.js',
            //         //                 basePaths + 'view/dashboard/dashboardController.js',
            //         //             ]
            //         //         });
            //         //     }]
            //         // }
            //     });
            //tickets
            // .state('tickets', {
            //     url: "/tickets",
            //     templateUrl: basePaths + "view/tickets/tickets-list/index.html",
            //     data: {
            //         pageTitle: 'مدیریت تیکت ها',
            //         breadcrumds: [
            //             {
            //                 pageTitle: 'مدیریت تیکت ها',
            //                 pageUrl: 'tickets',
            //             }
            //         ]
            //     },
            //     controller: "ticketsController",
            //     resolve: {
            //         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 name: 'WebApp',
            //                 insertBefore: '#ng_load_plugins_before',
            //                 files: [
            //                     basePaths + '/tickets/tickets-list/tickets-list.config.js',
            //                     basePaths + '/tickets/tickets-list/tickets-list.controller.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            //tickets add
            // .state('tickets-add', {
            //     url: "/tickets/add",
            //     templateUrl: basePaths + "/tickets/tickets-add/index.html",
            //     data: {
            //         pageTitle: 'ثبت تیکت',
            //         breadcrumds: [
            //             {
            //                 pageTitle: 'مدیریت تیکت ها',
            //                 pageUrl: 'tickets',
            //             },
            //             {
            //                 pageTitle: 'ثبت تیکت',
            //                 pageUrl: 'tickets-add',
            //             }
            //         ]
            //     },
            //     controller: "ticketsAddController",
            //     resolve: {
            //         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 name: 'WebApp',
            //                 insertBefore: '#ng_load_plugins_before',
            //                 files: [
            //                     basePaths + '/tickets/tickets-add/tickets-add.config.js',
            //                     basePaths + '/tickets/tickets-add/tickets-add.controller.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            //tickets details
            // .state('tickets-details', {
            //     url: "/tickets/:id/details",
            //     templateUrl: basePaths + "/tickets/tickets-details/index.html",
            //     data: {
            //         pageTitle: ' مشاهده تیکت',
            //         breadcrumds: [
            //             {
            //                 pageTitle: 'مدیریت تیکت ها',
            //                 pageUrl: 'tickets',
            //             },
            //             {
            //                 pageTitle: ' مشاهده تیکت',
            //                 pageUrl: 'tickets-details',
            //             }
            //         ]
            //     },
            //     controller: "ticketsDetailsController",
            //     resolve: {
            //         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 name: 'WebApp',
            //                 insertBefore: '#ng_load_plugins_before',
            //                 files: [
            //                     basePaths + '/tickets/tickets-details/tickets-details.config.js',
            //                     basePaths + '/tickets/tickets-details/tickets-details.controller.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            //wiki spaces manager
            // .state('wiki-spaces', {
            //     url: "/wiki/spaces",
            //     templateUrl: basePaths + "/wiki/spaces-manager/index.html",
            //     data: {
            //         pageTitle: 'مشاهده فضا های دایرکتوری',
            //         breadcrumds: [
            //             {
            //                 pageTitle: 'مشاهده فضا های دایرکتوری',
            //                 pageUrl: 'wiki-spaces',
            //             }
            //         ]
            //     },
            //     controller: "wikiSpaceManagerController",
            //     resolve: {
            //         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 name: 'WebApp',
            //                 insertBefore: '#ng_load_plugins_before',
            //                 files: [
            //                     basePaths + '/wiki/spaces-manager/space-manager.config.js',
            //                     basePaths + '/wiki/spaces-manager/space-manager.Controller.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('wiki-spaces.edit', {
            //     url: "/:id/edit",
            //     templateUrl: basePaths + "/wiki/spaces-manager/partials/dialog-new-space.html",
            // })
            // .state('wiki-spaces.add', {
            //     url: "/add",
            //     templateUrl: basePaths + "/wiki/spaces-manager/partials/dialog-new-space.html",
            // })
            //wiki pages manager
            // .state('wiki-pages', {
            //     url: "/wiki/spaces/:spaceId/pages",
            //     templateUrl: basePaths + "/wiki/pages-manager/index.html",
            //     data: {
            //         pageTitle: 'مدیریت صفحات',
            //         breadcrumds: [
            //             {
            //                 pageTitle: 'مشاهده فضا های دایرکتوری',
            //                 pageUrl: 'wiki-spaces',
            //             },
            //             {
            //                 pageTitle: ' مدیریت صفحات',
            //                 pageUrl: 'wiki-pages',
            //             }
            //         ]
            //     },
            //     controller: "wikiPageManagerController",
            //     resolve: {
            //         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 name: 'WebApp',
            //                 insertBefore: '#ng_load_plugins_before',
            //                 files: [
            //                     basePaths + '/wiki/pages-manager/pages-manager.config.js',
            //                     basePaths + '/wiki/pages-manager/pages-manager.controller.js',
            //                     basePaths + '/wiki/pages-manager/pages-manager.style.css',
            //                     '/lib/dropify/dist/css/dropify.css',
            //                     '/lib/dropify/dist/js/dropify.min.js',
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('wiki-pages.contents', {
            //     url: "/:pageId/contents",
            //     templateUrl: basePaths + "/wiki/page-contents-manager/index.html",
            //     controller: "wikiPageContentsManagerController",
            //     resolve: {
            //         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 name: 'WebApp',
            //                 insertBefore: '#ng_load_plugins_before',
            //                 files: [
            //                     basePaths + '/wiki/page-contents-manager/page-contents-manager.config.js',
            //                     basePaths + '/wiki/page-contents-manager/page-contents-manager.controller.js',
            //                 ]
            //             });
            //         }]
            //     }
            // });
            //$locationProvider.html5Mode({
            //    enabled: true,
            //    requireBase: false
            //});
        };
        Routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
        return Routes;
    }());
    WebPanel.Routes = Routes;
})(WebPanel || (WebPanel = {}));
//# sourceMappingURL=app.routes.js.map
var WebPanel;
(function (WebPanel) {
    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.baseUrl = {
            api: "http://accounting.dayanshop.org/Api/",
        };
        Main.webApp = angular.module('webApp', ["ui.router",
            "ui.bootstrap",
            "oc.lazyLoad"
        ]);
        return Main;
    }());
    WebPanel.Main = Main;
})(WebPanel || (WebPanel = {}));
//# sourceMappingURL=app.module.js.map
var Dashboard = function () {

    return {

        initTest: function () {

        },

        init: function () {

            this.initTest();
        }
    };

}();

Dashboard.init();
// jQuery(document).ready(function () {
//     Dashboard.init(); // init metronic core componets
// });
// if (App.isAngularJsApp() === false) {
//     jQuery(document).ready(function () {
//         Dashboard.init(); // init metronic core componets
//     });
// }
var WebPanel;
(function (WebPanel) {
    var controllers;
    (function (controllers) {
        var DashboardController = /** @class */ (function () {
            function DashboardController() {
            }
            return DashboardController;
        }());
        controllers.DashboardController = DashboardController;
        angular.module('webApp').controller('dashboardController', DashboardController);
    })(controllers = WebPanel.controllers || (WebPanel.controllers = {}));
})(WebPanel || (WebPanel = {}));
//# sourceMappingURL=dashboardController.js.map