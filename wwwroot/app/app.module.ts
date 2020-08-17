module WebPanel {
    export class Main {  
        static baseUrl = {
            api: "http://accounting.dayanshop.org/Api/",
            //api: "http://localhost:58564/Api/",
            //template: "/theTba-Contents/Components/Warehouse/Templates/app/pages/"
        }
        static webApp = angular.module('webApp', ["ui.router",
            "ui.bootstrap",
            "oc.lazyLoad"
            ]);
            /* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
            // .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
            //     $ocLazyLoadProvider.config({
            //         // global configs go here
            //     });
            // }])

            // //AngularJS v1.3.x workaround for old style controller declarition in HTML
            // .config(['$controllerProvider', function ($controllerProvider) {
            //     // this option might be handy for migrating old apps, but please don't use it
            //     // in new ones!
            //     $controllerProvider.allowGlobals();
            // }]);

            // // toastr config
            // .config(function (toastrConfig) {
            //     angular.extend(toastrConfig, {
            //         autoDismiss: false,
            //         containerId: 'toast-container',
            //         maxOpened: 0,
            //         newestOnTop: true,
            //         positionClass: 'toast-top-left',
            //         preventDuplicates: false,
            //         preventOpenDuplicates: false,
            //         target: 'body'
            //     });
            // })

            // Routing
            //.config(WebPanel.Routes.configureRoutes);
    }
}