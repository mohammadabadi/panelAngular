module WebPanel {
    export class Main {  
        static webApp = angular.module('webApp', ["ui.router",
        "ui.bootstrap",   
        "oc.lazyLoad",
        "ngSanitize",
        "ngTable",
        "elif",
        "toastr"
        ])
        /* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
        .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
              $ocLazyLoadProvider.config({
                  // global configs go here
              });
          }])
         //toastr config
         .config(function (toastrConfig) {
            angular.extend(toastrConfig, {
                autoDismiss: false,
                containerId: 'toast-container',
                maxOpened: 0,
                newestOnTop: true,
                positionClass: 'toast-top-left',
                preventDuplicates: false,
                preventOpenDuplicates: false,
                target: 'body'
            });
        })
        .run(($rootScope, $state) => {
            $rootScope.$on('$locationChangeSuccess', function () {
                $rootScope.$on('$viewContentLoaded', function(){
                    //Here your view content is fully loaded !!
                    $rootScope.urlData = $state.current.data;
                    $rootScope.title = $rootScope.urlData[$rootScope.urlData.length - 1].pageTitle;
                });
            })
        })
        // Routing
            .config(WebPanel.Routes.configureRoutes);
    }
}