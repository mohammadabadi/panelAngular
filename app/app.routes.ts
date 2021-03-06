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
                    data: [
                        { pageTitle: 'پنل مدیریت', pageUrl : 'dashboard'}],
                    controller: "dashboardController"
                })
            //accounting/transaction
                .state('transaction', {
                    url: "/transaction",
                    templateUrl: basePaths + "/accounting/transaction/transaction.html",
                    data: [
                        { pageTitle: 'حسابداری ', pageUrl : ''},
                        { pageTitle: 'مدیریت سند ها', pageUrl : 'transaction'}],
                    controller: "TransactionController"
                 })
            //accounting/transactionDetail
                .state('transactionDetail', {
                    url: "/transactionDetail",
                    templateUrl: basePaths + "/accounting/transactionDetail/transactionDetail.html",
                    data: [
                        { pageTitle: 'حسابداری ', pageUrl : ''},
                        { pageTitle: 'دفتر روزنامه', pageUrl : 'transactionDetail'}],
                    controller: "TransactionDetailController"
                })
                 // 403
                 .state('forbidden', {
                    url: "/forbidden",
                    templateUrl: basePaths + '/error/403.html',
                    data: [
                        { pageTitle: 'عدم دسترسی', pageUrl : 'forbidden'}],
                })
                 // 404
                 .state('notfound', {
                    url: "/notfound",
                    templateUrl: basePaths + '/error/404.html',
                    data: [{ pageTitle: 'یافت نشد', pageUrl : 'notfound'}],
                });
               
        }
    }
}