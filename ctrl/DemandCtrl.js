app.controller('DemandCtrl', function($scope) {
	$scope.solution = function(){
		var a = parseFloat($scope.first);
		var b = parseFloat($scope.second);
		var c = parseFloat($scope.third);
		var d = parseFloat($scope.fourth);
		var e = (c - a) / (c + a);
		var f = (d - b) / (d + b);
		var result =  e / f;
		$scope.answer = result;
		document.getElementById("sound1").play();
	};
			
});