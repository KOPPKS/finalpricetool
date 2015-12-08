app.controller('ValueCtrl', function($scope) {
	$scope.sum = function(){
		var a = parseFloat($scope.primary);
		var b = parseFloat($scope.secondary);
		var c = parseFloat($scope.tres);
		var value = (a + b) - c;
		$scope.unique = value;
		document.getElementById("sound1").play();
	};

});