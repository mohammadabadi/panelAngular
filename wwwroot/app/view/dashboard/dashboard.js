var Dashboard = function () {

    return {

        initTest: function () {

        },

        init: function () {

            this.initTest();
        }
    };

}();

jQuery(document).ready(function () {
    Dashboard.init(); // init metronic core componets
});

// if (App.isAngularJsApp() === false) {
//     jQuery(document).ready(function () {
//         Dashboard.init(); // init metronic core componets
//     });
// }