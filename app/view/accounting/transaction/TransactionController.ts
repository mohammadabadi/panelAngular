/// <reference path="transactionmodels.ts" />
module Accounting {
    export class TransactionController {
        private apiBaseUrl: string = Api.Acounting.baseUrl.api;
        private transactions: TransactionDto[];
        private pageNumber: number = 0;
        private pageSize: number = 20;
        private totalCount: number = 0;
        static $inject = ['$scope', '$http'];
        constructor(private $scope, private $http: ng.IHttpService) {
            $scope.ctrl = this;
            //$scope.xxx= "hello";
            this.getList(this.pageNumber);
        }
        getList(pageNumber: number) {
            this.pageNumber = pageNumber; 
            let searchDto: TransactionSearchDto = {
                Offset: this.pageNumber == 0 ? 0 : this.pageSize * this.pageNumber,
                PageSize: this.pageSize
            };
            return this.$http.post(this.apiBaseUrl + "transaction/GetList", searchDto)
                .then((result: any) => {
                    if (result.data.IsSuccess) {
                        this.transactions = result.data.Data.items;
                        this.totalCount = result.data.Data.totalCount;
                    }
                }).catch((result: any) => { console.log(result) });
        }
    }
    WebPanel.Main.webApp.controller('TransactionController', TransactionController).filter('pageNumbers', function () {
        return function (array, currentPageNumber: number, pageSize: number, total: number) {
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
        }
    });

}