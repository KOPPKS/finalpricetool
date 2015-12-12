var app = angular.module('ModOne', ['firebase', 'ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state("state1", {
			url: "/",
			templateUrl: "partials/state1.html",
			controller: "WmtCtrl"
		})
		.state("state2", {
			url: "/state2",
			templateUrl: "partials/state2.html",
			controller: "SecondCtrl"
		})
		.state("state3", {
			url: "/state3",
			templateUrl: "partials/state3.html",
			controller: "CostCtrl"
		})
		.state("state4", {
			url: "/state4",
			templateUrl: "partials/state4.html",
			controller: "MoreCtrl"
		})
		.state("state5", {
			url: "/state5",
			templateUrl: "partials/state5.html",
			controller: "FinCtrl"
		})
		.state("state6", {
			utl: "/state6",
			templateUrl: "partials/state6.html",
			controller: "WlmtCtrl"
		})
		.state("state7", {
			url: "/state7",
			templateUrl: "partials/state7.html",
			controller: "FoodCtrl"
		})
		.state("state8", {
			url: "/state8",
			templateUrl: "partials/state8.html",
			controller: "ValueCtrl"
		})
		.state("state9", {
			url: "/state9",
			templateUrl: "partials/state9.html",
			controller: "BreakCtrl"
		})
		.state("state10", {
			url: "/state10",
			templateUrl: "partials/state10.html",
			controller: "VolumeCtrl"
		})
		.state("state11", {
			url: "/state11",
			templateUrl: "partials/state11.html",
			controller: "LogCtrl"
		})
		.state("state13", {
			url: "/state13",
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

