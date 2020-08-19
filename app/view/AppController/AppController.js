var WebPanel;
(function (WebPanel) {
    //    'use strict'
    var AppController = /** @class */ (function () {
        function AppController($scope) {
            this.$scope = $scope;
            $scope.ctrl = this;
            this.apiBaseUrl = "";
            // this.routeUrl = "/Accounting/@index.dn/";
            $scope.hello = 'hello fdsfdf';
            $scope.pageName = "پنل مدیریت | ";
        }
        AppController.$inject = ['$scope'];
        return AppController;
    }());
    WebPanel.AppController = AppController;
    WebPanel.Main.webApp.controller('AppController', AppController);
})(WebPanel || (WebPanel = {}));
//# sourceMappingURL=AppController.js.map