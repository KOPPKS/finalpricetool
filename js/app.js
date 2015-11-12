var app = angular.module('ModOne', ['firebase', 'ui.router']);

app.controller('mainCtrl', function($scope) {
	$scope.name = "JMoney";
	$scope.friends = ['Ron', 'Bob', 'Wes'];
});