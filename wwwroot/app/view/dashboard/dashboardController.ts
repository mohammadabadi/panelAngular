
module WebPanel {
    //    'use strict'
    export class dashboardController {
        private apiBaseUrl: string;
        private routeUrl: string;
        static $inject = ['$scope'];
        constructor(
            private $scope: any) {
            $scope.ctrl = this;
            this.apiBaseUrl = "";
            $scope.mas = 'DashboardController';
        }

    }

    WebPanel.Main.webApp.controller('dashboardController', dashboardController);

}