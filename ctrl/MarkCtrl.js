app.controller('MarkCtrl', function($scope) {
	$scope.sum = function(){
		var a = parseFloat($scope.first);
		var b = parseFloat($scope.second);
		var c = (b / 100) + 1;
		var result = (a * c);
		$scope.answer = result;
		document.getElementById("sound1").play();
	};

});