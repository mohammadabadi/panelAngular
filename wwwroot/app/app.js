var WebPanel;
(function (WebPanel) {
    var Routes = /** @class */ (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($stateProvider, $urlRouterProvider, $locationProvider) {
            var basePaths = '/microfronts';
            $urlRouterProvider.otherwise("/dashboard");
            $locationProvider.hashPrefix('');
            $stateProvider
                // Dashboard
                .state('dashboard', {
                url: "/dashboard",
                templateUrl: basePaths + '/dashboard/dashboard.html',
                data: [
                    { pageTitle: 'پنل مدیریت', pageUrl: 'dashboard' }
                ],
                controller: "dashboardController"
            })
                //accounting/transaction
                .state('transaction', {
                url: "/transaction",
                templateUrl: basePaths + "/accounting/transaction/transaction.html",
                data: [
                    { pageTitle: 'حسابداری ', pageUrl: '' },
                    { pageTitle: 'مدیریت سند ها', pageUrl: 'transaction' }
                ],
                controller: "TransactionController"
            })
                //accounting/transactionDetail
                .state('transactionDetail', {
                url: "/transactionDetail",
                templateUrl: basePaths + "/accounting/transactionDetail/transactionDetail.html",
                data: [
                    { pageTitle: 'حسابداری ', pageUrl: '' },
                    { pageTitle: 'دفتر روزنامه', pageUrl: 'transactionDetail' }
                ],
                controller: "TransactionDetailController"
            })
                // 403
                .state('forbidden', {
                url: "/forbidden",
                templateUrl: basePaths + '/error/403.html',
                data: [
                    { pageTitle: 'عدم دسترسی', pageUrl: 'forbidden' }
                ],
            })
                // 404
                .state('notfound', {
                url: "/notfound",
                templateUrl: basePaths + '/error/404.html',
                data: [{ pageTitle: 'یافت نشد', pageUrl: 'notfound' }],
            });
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
        Main.webApp = angular.module('webApp', ["ui.router",
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
            .run(function ($rootScope, $state) {
            $rootScope.$on('$locationChangeSuccess', function () {
                $rootScope.$on('$viewContentLoaded', function () {
                    //Here your view content is fully loaded !!
                    $rootScope.urlData = $state.current.data;
                    $rootScope.title = $rootScope.urlData[$rootScope.urlData.length - 1].pageTitle;
                });
            });
        })
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
    var dashboardController = /** @class */ (function () {
        function dashboardController($scope) {
            this.$scope = $scope;
            $scope.ctrl = this;
            this.apiBaseUrl = "";
            //$scope.mas = 'DashboardنتمختControllerمنن';
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
            this.apiBaseUrl = Api.AcountingApi.baseUrl.api;
            this.pageNumber = 0;
            this.pageSize = 20;
            this.totalCount = 0;
            $scope.ctrl = this;
            //$scope.xxx= "hello";
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
            for (var i = start; i <= last; i++) {
                list.push(i);
            }
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
            this.apiBaseUrl = Api.AcountingApi.baseUrl.api;
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
            for (var i = start; i <= last; i++) {
                list.push(i);
            }
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
var Api;
(function (Api) {
    var AcountingApi = /** @class */ (function () {
        function AcountingApi() {
        }
        AcountingApi.baseUrl = {
            api: "http://accounting.dayanshop.org/Api/"
        };
        return AcountingApi;
    }());
    Api.AcountingApi = AcountingApi;
})(Api || (Api = {}));
//# sourceMappingURL=accountingApi.js.map
var WebPanel;
(function (WebPanel) {
    //    'use strict'
    var AppController = /** @class */ (function () {
        function AppController($scope) {
            this.$scope = $scope;
            $scope.ctrl = this;
            this.apiBaseUrl = "";
            // this.routeUrl = "/Accounting/@index.dn/";
            // $scope.hello = 'hello fdsfdf';
        }
        AppController.$inject = ['$scope'];
        return AppController;
    }());
    WebPanel.AppController = AppController;
    WebPanel.Main.webApp.controller('AppController', AppController);
})(WebPanel || (WebPanel = {}));
//# sourceMappingURL=AppController.js.map