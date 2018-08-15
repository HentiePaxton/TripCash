$(document).ready(function () {
    var TriggerdGraph1 = false;
    var TriggerdGraph2 = false;

    //if (window.pageYOffset > ($('#chartdiv').offset().top - 800)) {
    //    if (!TriggerdGraph1) {
    //        executeChart1();
    //        TriggerdGraph1 = true;

    //    }
    //}
    //if (window.pageYOffset > ($('#chartdiv2').offset().top - 800)) {
    //    if (!TriggerdGraph2) {
    //        executeChart2();
    //        TriggerdGraph2 = true;

    //    }
    //}

    function testScroll(ev) {
        if (window.pageYOffset > 920) {
            $('.nav-Logo').show('slow');
        } else {
            $('.nav-Logo').hide('slow');
        }

        //if (window.pageYOffset > ($('#chartdiv').offset().top - 800)) {
        //    if (!TriggerdGraph1) {
        //        executeChart1();
        //        TriggerdGraph1 = true;

        //    }
        //}
        //if (window.pageYOffset > ($('#chartdiv2').offset().top - 800)) {
        //    if (!TriggerdGraph2) {
        //        executeChart2();
        //        TriggerdGraph2 = true;

        //    }
        //}
    }

    window.onscroll = testScroll

});

//function executeChart1() {
//    google.charts.load("current", { packages: ["corechart"] });
//    google.charts.setOnLoadCallback(drawChart);
//    function drawChart() {
//        var data = google.visualization.arrayToDataTable([
//            ['Category', 'Amount'],
//            ['Crowdsale', 67],
//            ['Future Rewards', 21],
//            ['Bounties', 3],
//            ['Co Reserve', 5],
//            ['Team and Advisors', 4]
//        ]);

//        var options = {
//            title: '',
//            pieHole: 0.5,
//            backgroundColor: 'none',
//            colors: [
//                '#D93D52'
//                , '#F4A15D'
//                , '#42A09F'
//                , '#67b7dc'
//                , '#573A70']
//        };

//        var chart = new google.visualization.PieChart(document.getElementById('chartdiv'));
//        chart.draw(data, options);
//    }
//}

//function executeChart2() {
//    google.charts.load("current", { packages: ["corechart"] });
//    google.charts.setOnLoadCallback(drawChart);
//    function drawChart() {
//        var data = google.visualization.arrayToDataTable([
//            ['Category', 'Amount'],
//            ['Operations', 20],
//            ['Overhead', 5],
//            ['Platform Development', 15],
//            ['Legal', 9],
//            ['Marketing', 51]
//        ]);

//        var options = {
//            title: '',
//            pieHole: 0.5,
//            backgroundColor: 'none',
//            colors: [
//                '#D93D52'
//                , '#F4A15D'
//                , '#42A09F'
//                , '#67b7dc'
//                , '#573A70']
//        };

//        var chart = new google.visualization.PieChart(document.getElementById('chartdiv2'));
//        chart.draw(data, options);
//    }
//}