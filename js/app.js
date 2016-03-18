var app = angular.module('ModOne', ['firebase', 'ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state("overview1", {
			url: "/",
			templateUrl: "partials/state1.html",
			controller: "WmtCtrl"
		})
		.state("overview2", {
			url: "/overview2",
			templateUrl: "partials/state2.html",
			controller: "SecondCtrl"
		})
		.state("cost1", {
			url: "/cost1",
			templateUrl: "partials/state3.html",
			controller: "CostCtrl"
		})
		.state("overview3", {
			url: "/overview3",
			templateUrl: "partials/state4.html",
			controller: "MoreCtrl"
		})
		.state("overview4", {
			url: "/overview4",
			templateUrl: "partials/state5.html",
			controller: "FinCtrl"
		})
		.state("walmart1", {
			utl: "/walmart1",
			templateUrl: "partials/state6.html",
			controller: "WlmtCtrl"
		})
		.state("value1", {
			url: "/value1",
			templateUrl: "partials/state8.html",
			controller: "ValueCtrl"
		})
		.state("break1", {
			url: "/break1",
			templateUrl: "partials/state9.html",
			controller: "BreakCtrl"
		})
		.state("volume1", {
			url: "/volume1",
			templateUrl: "partials/state10.html",
			controller: "VolumeCtrl"
		})
		.state("margin1", {
			url: "/margin1",
			templateUrl: "partials/state13.html",
			controller: "MgnCtrl"
		})
		.state("demand1", {
			url: "/demand1",
			templateUrl: "partials/price.html",
			controller: "DemandCtrl"
		})
		.state("markup1", {
			url: "/markup1",
			templateUrl: "partials/markup.html",
			controller: "MarkCtrl"
		})
		.state("compare1", {
			url: "/compare1",
			templateUrl: "partials/compare.html",
			controller: "CompareCtrl"
		})
		
		
})

