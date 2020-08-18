module WebPanel {
    //    'use strict'
        export class AppController {
            private apiBaseUrl: string;
            private routeUrl: string;
            static $inject = ['$scope'];
            constructor(
                private $scope: any) {
                $scope.ctrl = this;
                this.apiBaseUrl = "";
                // this.routeUrl = "/Accounting/@index.dn/";
                $scope.hello = 'hello fdsfdf';
               }
    
        }
    
        WebPanel.Main.webApp.controller('AppController', AppController);
    
    }