var app = angular.module('ModOne', ['firebase', 'ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/state1");
	$stateProvider
		.state('state1', {
			url: "/state1",
			// templateUrl: "state1.html"
			template: "<h1>hello</h1>",
			// controller: someCtrl
		})
})