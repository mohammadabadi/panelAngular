var Accounting;
(function (Accounting) {
    var TransactionDetailController = /** @class */ (function () {
        function TransactionDetailController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            this.apiBaseUrl = Api.Acounting.baseUrl.api;
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
//# sourceMappingURL=TransactionDetailController.js.map