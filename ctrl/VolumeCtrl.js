app.controller('VolumeCtrl', function($scope) {
	$scope.sum = function(){
		var a = parseFloat($scope.mercury);
		var b = parseFloat($scope.venus);
		var c = parseFloat($scope.earth);
		var d = parseFloat($scope.mars);
		var value = (a + b) / (c - d);
		$scope.volume = value;
		document.getElementById("sound1").play();
	};

});