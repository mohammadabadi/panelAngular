module Accounting {
    export class TransactionDetailController {
        private apiBaseUrl: string = Api.AcountingApi.baseUrl.api;
        private pageNumber: number = 0;
        private pageSize: number = 20;
        private totalCount: number = 0;
        private transactionDetails: TransactionDetailDto;
        private searchDto: TransactionDetailSearchDto = { Offset: 0, PageSize: this.pageSize };
        static $inject = ['$scope', '$http'];
        constructor(private $scope, private $http: ng.IHttpService) {
            $scope.ctrl = this;
            this.getList(this.pageNumber);
        }
        getList(pageNumber: number) {
            this.pageNumber = pageNumber;
            this.searchDto.Offset = this.pageNumber == 0 ? 0 : this.pageSize * this.pageNumber;
            this.searchDto.PageSize = this.pageSize;
            return this.$http.post(this.apiBaseUrl + "transactionDetail/GetList", this.searchDto)
                .then((result: any) => {
                    if (result.data.IsSuccess) {
                        this.transactionDetails = result.data.Data.items;
                        this.totalCount = result.data.Data.totalCount;
                    }
                }).catch((result: any) => { console.log(result) });
        }
    }
    WebPanel.Main.webApp.controller('TransactionDetailController', TransactionDetailController).filter('pageNumbers', function () {
        return function (array, currentPageNumber: number, pageSize: number, total: number) {
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
        }
    });

}