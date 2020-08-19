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