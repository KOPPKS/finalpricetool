app.controller('BreakCtrl', function($scope) {
	$scope.sum = function(){
		var a = parseFloat($scope.uno);
		var b = parseFloat($scope.dos);
		var c = parseFloat($scope.whee);
		var value = (a / b) + c;
		$scope.break = value;
		document.getElementById("sound1").play();
	};

});