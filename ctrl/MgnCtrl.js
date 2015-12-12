app.controller('MgnCtrl', function($scope) {
	$scope.sum = function(){
		var a = parseFloat($scope.first);
		var b = parseFloat($scope.second);
		var c = (b - a);
		var result = (c / b) * 100;
		$scope.answer = result;
		document.getElementById("sound1").play();
	};

});