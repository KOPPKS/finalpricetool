angular.module('ModOne')
.controller('LogCtrl', function($scope) {

  var ref = new Firebase("https://realtime556.firebaseio.com");
  
  $scope.authObj = $firebaseAuth(ref);
  $scope.user = $scope.authObj.$getAuth();
  
  $scope.login = function() {
    $scope.authObj.$authWithOAuthRedirect("google");
  };
  
  $scope.authObj.$onAuth(function(authObj) {
    $scope.user = authObj;
  });
  
  $scope.logout = function() {
    $scope.authObj.$unauth();
  };

});