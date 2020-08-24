module WebPanel {
    export class Routes {
        static $inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
        static configureRoutes($stateProvider: any, $urlRouterProvider: any, $locationProvider: any) {
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
                    data: {pageTitle: 'مدیریت سند ها'},
                    controller: "TransactionController"
                 })
            //accounting/transactionDetail
                .state('transactionDetail', {
                    url: "/transactionDetail",
                    templateUrl: basePaths + "/accounting/transactionDetail/transactionDetail.html",
                    data: {pageTitle: 'دفتر روزنامه'},
                    controller: "TransactionDetailController"
                });
               
        }
    }
}