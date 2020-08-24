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
                data: { pageTitle: 'پنل مدیریت' },
                controller: "dashboardController"
            })
                //accounting/transaction
                .state('transaction', {
                url: "/transaction",
                templateUrl: basePaths + "/accounting/transaction/transaction.html",
                data: { pageTitle: 'مدیریت سند ها' },
                controller: "TransactionController"
            })
                //accounting/transactionDetail
                .state('transactionDetail', {
                url: "/transactionDetail",
                templateUrl: basePaths + "/accounting/transactionDetail/transactionDetail.html",
                data: { pageTitle: 'دفتر روزنامه' },
                controller: "TransactionDetailController"
            });
        };
        Routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
        return Routes;
    }());
    WebPanel.Routes = Routes;
})(WebPanel || (WebPanel = {}));
//# sourceMappingURL=app.routes.js.map