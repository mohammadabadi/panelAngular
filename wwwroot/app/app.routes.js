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
                pageTitle: 'پنل مدیریت',
                data: [{ pageTitle: 'پنل مدیریت',
                        pageUrl: 'dashboard' }],
                controller: "dashboardController"
            })
                //accounting/transaction
                .state('transaction', {
                url: "/transaction",
                templateUrl: basePaths + "/accounting/transaction/transaction.html",
                pageTitle: 'مدیریت سند ها',
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
                pageTitle: 'دفتر روزنامه',
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
                data: [{ pageTitle: 'عدم دسترسی', pageUrl: 'forbidden' }],
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