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
})

