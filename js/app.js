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
})

