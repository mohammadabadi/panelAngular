module WebPanel.controllers {
    interface IScope extends ng.IScope {
        ctrl: any;
        viewModel: any;
    }

    export class DashboardController {
        // static $inject = ['$scope', '$rootScope', '$q', 'SpaceManagerService'];

        // constructor(private $scope: IScope,
        //     // private $rootScope: WebPanel.Common.Config.IRootScope,
        //     private $q: ng.IQService) {
        //     // set sidebar closed and body solid layout mode
        //     // $rootScope.settings.layout.pageContentWhite = true;
        //     // $rootScope.settings.layout.pageBodySolid = false;
        //     // $rootScope.settings.layout.pageSidebarClosed = false;

        //     // $scope.$on('$viewContentLoaded', function () {
        //     //     // initialize core components
        //     //     App.initAjax();
        //     // });

        //     this.$scope.ctrl = this;
        // }


    }
    angular.module('App').controller('dashboardController', DashboardController);
}