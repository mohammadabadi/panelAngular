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
                    data: {pageTitle: 'مدیریت سند ها'},
                    controller: "TransactionController",
                    // resolve:{
                    //     deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    //         return $ocLazyLoad.load({
                    //             name: 'WebApp',
                    //             insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    //             files: [
                    //                 basePaths + '/api/Api.ts',
                    //                 ]
                    //         });
                    //     }]
                    // }
                 })
            //transactionDetail
                .state('transactionDetail', {
                    url: "/transactionDetail",
                    templateUrl: basePaths + "/accounting/transactionDetail/transactionDetail.html",
                    data: {pageTitle: 'دفتر روزنامه'},
                    controller: "TransactionDetailController",
                    // resolve:{
                    //     deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    //         return $ocLazyLoad.load({
                    //             name: 'WebApp',
                    //             insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    //             files: [
                    //                 basePaths + '/api/Api.ts',
                    //                 ]
                    //         });
                    //     }]
                    // }

                });

            
            // $locationProvider.html5Mode({
            //    enabled: true,
            //    requireBase: false
            // });
        }
    }
}