var app = angular.module('ModOne', ['firebase', 'ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state("state1", {
			url: "/state1",
			templateUrl: "partials/state1.html",
			controller: "WmtCtrl"
		})
})

