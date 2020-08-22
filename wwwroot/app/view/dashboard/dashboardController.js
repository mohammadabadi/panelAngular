var WebPanel;
(function (WebPanel) {
    //    'use strict'
    var dashboardController = /** @class */ (function () {
        function dashboardController($scope) {
            this.$scope = $scope;
            $scope.ctrl = this;
            this.apiBaseUrl = "";
            $scope.mas = 'DashboardنتمختControllerمنن';
            // $scope.pageName = $scope.state.pageTitle;
        }
        dashboardController.$inject = ['$scope'];
        return dashboardController;
    }());
    WebPanel.dashboardController = dashboardController;
    WebPanel.Main.webApp.controller('dashboardController', dashboardController);
})(WebPanel || (WebPanel = {}));
//# sourceMappingURL=dashboardController.js.map