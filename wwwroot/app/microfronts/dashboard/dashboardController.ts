module WebPanel {
    //    'use strict'
    export class dashboardController {
        private apiBaseUrl: string;
        private routeUrl: string;
        private pageName:string;
        static $inject = ['$scope'];
        constructor(
            private $scope: any) {
            $scope.ctrl = this;
            this.apiBaseUrl = "";
            //$scope.mas = 'DashboardنتمختControllerمنن';
        }
    }
    WebPanel.Main.webApp.controller('dashboardController', dashboardController);
}