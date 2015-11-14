var app = angular.module('ModOne', ['firebase', 'ui.router', 'ui.bootstrap']);

app.controller('mainCtrl', function($scope) {
	$scope.name = "JMoney";
	$scope.friends = ['Ron', 'Bob', 'Wes'];
});