var WebPanel;
(function (WebPanel) {
    var Routes = /** @class */ (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($stateProvider, $urlRouterProvider, $locationProvider) {
            var basePaths = '/view';
            $urlRouterProvider.otherwise("/dashboard");
            $locationProvider.hashPrefix('');
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
                data: { pageTitle: 'مدیریت سند ها' },
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
                url: "/transactionDetail",
                templateUrl: basePaths + "/accounting/transactionDetail/transactionDetail.html",
                data: { pageTitle: 'دفتر روزنامه' },
                controller: "TransactionDetailController"
            });
            // $locationProvider.html5Mode({
            //    enabled: true,
            //    requireBase: false
            // });
        };
        Routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
        return Routes;
    }());
    WebPanel.Routes = Routes;
})(WebPanel || (WebPanel = {}));
//# sourceMappingURL=app.routes.js.map