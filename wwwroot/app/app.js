var WebPanel;
(function (WebPanel) {
    var Routes = /** @class */ (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($stateProvider, $urlRouterProvider, $locationProvider) {
            var basePaths = '/app/view';
            $urlRouterProvider.otherwise("/dashboard");
            $stateProvider
                // Dashboard
                .state('dashboard', {
                url: "/dashboard",
                templateUrl: basePaths + '/dashboard/dashboard.html',
                data: { pageTitle: 'پنل مدیریت' },
                controller: "dashboardController"
                // resolve: {
                //     deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                //         return $ocLazyLoad.load({
                //             name: 'WebApp',
                //             insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                //             files: [
                //                 basePaths + '/dashboard/dashboard.js',
                //                 basePaths + '/dashboard/dashboardController.js',
                //             ]
                //         });
                //     }]
                // }
            })
                //transaction
                .state('transaction', {
                url: "/transaction",
                templateUrl: basePaths + "/accounting/transaction/transaction.html",
                data: {
                    pageTitle: 'مدیریت سند ها'
                },
                controller: "TransactionController"
                // resolve:{
                //     deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                //         return $ocLazyLoad.load({
                //             name: 'WebApp',
                //             insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                //             files: [
                //                 basePaths + '/view/accounting/TransactionController.ts',
                //                 ]
                //         });
                //     }]
                // }
            })
                //transactionDetail
                .state('transactionDetail', {
                url: "/accounting/transactionDetail",
                templateUrl: basePaths + "/accounting/transactionDetail/transactionDetail.html",
                data: {
                    pageTitle: 'دفتر روزنامه'
                },
                controller: "TransactionDetailController"
            });
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
            api: "http://accounting.dayanshop.org/Api/"
            //api: "http://localhost:58564/Api/",
            //template: "/theTba-Contents/Components/Warehouse/Templates/app/pages/"
        };
        Main.webApp = angular.module('webApp', ["ui.router",
            "ui.bootstrap",
            "ngTable",
            "elif"
        ])
            /* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
            //  .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
            //      $ocLazyLoadProvider.config({
            //          // global configs go here
            //      });
            //  }])
            //AngularJS v1.3.x workaround for old style controller declarition in HTML
            //  .config(['$controllerProvider', function ($controllerProvider) {
            //      // this option might be handy for migrating old apps, but please don't use it
            //      // in new ones!
            //      $controllerProvider.allowGlobals();
            //  }])
            // toastr config
            //  .config(function (toastrConfig) {
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
            .config(WebPanel.Routes.configureRoutes);
        return Main;
    }());
    WebPanel.Main = Main;
})(WebPanel || (WebPanel = {}));
//# sourceMappingURL=app.module.js.map
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
        }
        AppController.$inject = ['$scope'];
        return AppController;
    }());
    WebPanel.AppController = AppController;
    WebPanel.Main.webApp.controller('AppController', AppController);
})(WebPanel || (WebPanel = {}));
//# sourceMappingURL=AppController.js.map
var WebPanel;
(function (WebPanel) {
    //    'use strict'
    var dashboardController = /** @class */ (function () {
        function dashboardController($scope) {
            this.$scope = $scope;
            $scope.ctrl = this;
            this.apiBaseUrl = "";
            $scope.mas = 'DashboardController';
        }
        dashboardController.$inject = ['$scope'];
        return dashboardController;
    }());
    WebPanel.dashboardController = dashboardController;
    WebPanel.Main.webApp.controller('dashboardController', dashboardController);
})(WebPanel || (WebPanel = {}));
//# sourceMappingURL=dashboardController.js.map
/// <reference path="transactionmodels.ts" />
var Accounting;
(function (Accounting) {
    var TransactionController = /** @class */ (function () {
        function TransactionController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            this.apiBaseUrl = WebPanel.Main.baseUrl.api;
            this.pageNumber = 0;
            this.pageSize = 20;
            this.totalCount = 0;
            $scope.ctrl = this;
            $scope.xxx = "hello";
            this.getList(this.pageNumber);
        }
        TransactionController.prototype.getList = function (pageNumber) {
            var _this = this;
            this.pageNumber = pageNumber;
            var searchDto = {
                Offset: this.pageNumber == 0 ? 0 : this.pageSize * this.pageNumber,
                PageSize: this.pageSize
            };
            return this.$http.post(this.apiBaseUrl + "transaction/GetList", searchDto)
                .then(function (result) {
                if (result.data.IsSuccess) {
                    _this.transactions = result.data.Data.items;
                    _this.totalCount = result.data.Data.totalCount;
                }
            }).catch(function (result) { console.log(result); });
        };
        TransactionController.$inject = ['$scope', '$http'];
        return TransactionController;
    }());
    Accounting.TransactionController = TransactionController;
    WebPanel.Main.webApp.controller('TransactionController', TransactionController).filter('pageNumbers', function () {
        return function (array, currentPageNumber, pageSize, total) {
            var list = [];
            if (total == undefined)
                return list;
            var count = 4;
            var start = Math.max(1, currentPageNumber - count);
            var l = Math.ceil(total / pageSize);
            var last = Math.min(l, currentPageNumber + count);
            //if (start > 1) {
            //    list.push(1);
            //    list.push("<<<");
            //}
            for (var i = start; i <= last; i++) {
                list.push(i);
            }
            //if (last < l) {
            //    list.push(">>>");
            //    list.push(l);
            //}
            return list;
        };
    });
})(Accounting || (Accounting = {}));
//# sourceMappingURL=TransactionController.js.map
var Accounting;
(function (Accounting) {
    var TransactionDto = /** @class */ (function () {
        function TransactionDto() {
        }
        return TransactionDto;
    }());
    Accounting.TransactionDto = TransactionDto;
    var TransactionSearchDto = /** @class */ (function () {
        function TransactionSearchDto() {
        }
        return TransactionSearchDto;
    }());
    Accounting.TransactionSearchDto = TransactionSearchDto;
})(Accounting || (Accounting = {}));
//# sourceMappingURL=transactionmodels.js.map
var Accounting;
(function (Accounting) {
    var TransactionDetailController = /** @class */ (function () {
        function TransactionDetailController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            this.apiBaseUrl = WebPanel.Main.baseUrl.api;
            this.pageNumber = 0;
            this.pageSize = 20;
            this.totalCount = 0;
            this.searchDto = { Offset: 0, PageSize: this.pageSize };
            $scope.ctrl = this;
            this.getList(this.pageNumber);
        }
        TransactionDetailController.prototype.getList = function (pageNumber) {
            var _this = this;
            this.pageNumber = pageNumber;
            this.searchDto.Offset = this.pageNumber == 0 ? 0 : this.pageSize * this.pageNumber;
            this.searchDto.PageSize = this.pageSize;
            return this.$http.post(this.apiBaseUrl + "transactionDetail/GetList", this.searchDto)
                .then(function (result) {
                if (result.data.IsSuccess) {
                    _this.transactionDetails = result.data.Data.items;
                    _this.totalCount = result.data.Data.totalCount;
                }
            }).catch(function (result) { console.log(result); });
        };
        TransactionDetailController.$inject = ['$scope', '$http'];
        return TransactionDetailController;
    }());
    Accounting.TransactionDetailController = TransactionDetailController;
    WebPanel.Main.webApp.controller('TransactionDetailController', TransactionDetailController).filter('pageNumbers', function () {
        return function (array, currentPageNumber, pageSize, total) {
            var list = [];
            if (total == undefined)
                return list;
            var count = 4;
            var start = Math.max(1, currentPageNumber - count);
            var l = Math.ceil(total / pageSize);
            var last = Math.min(l, currentPageNumber + count);
            //if (start > 1) {
            //    list.push(1);
            //    list.push("<<<");
            //}
            for (var i = start; i <= last; i++) {
                list.push(i);
            }
            //if (last < l) {
            //    list.push(">>>");
            //    list.push(l);
            //}
            return list;
        };
    });
})(Accounting || (Accounting = {}));
//# sourceMappingURL=TransactionDetailController.js.map
var Accounting;
(function (Accounting) {
    var TransactionDetailDto = /** @class */ (function () {
        function TransactionDetailDto() {
        }
        return TransactionDetailDto;
    }());
    Accounting.TransactionDetailDto = TransactionDetailDto;
    var TransactionDetailSearchDto = /** @class */ (function () {
        function TransactionDetailSearchDto() {
        }
        return TransactionDetailSearchDto;
    }());
    Accounting.TransactionDetailSearchDto = TransactionDetailSearchDto;
})(Accounting || (Accounting = {}));
//# sourceMappingURL=TransactionDetailModels.js.map