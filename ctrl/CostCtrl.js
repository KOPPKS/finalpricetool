app.controller('CostCtrl', function($scope) {
	$scope.sum = function(){
		var a = parseFloat($scope.first);
		var b = parseFloat($scope.second);
		var c = parseFloat($scope.third);
		var result = (a + b + c);
		$scope.answer = result;
		document.getElementById("sound1").play();
	};

});