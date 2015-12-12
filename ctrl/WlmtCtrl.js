 angular.module('ModOne')
.controller('WlmtCtrl', function ($scope, WmtService) {

  $scope.findProducts = function () {
    WmtService.getProducts($scope.query)
    .then(function (datafromService) {
      console.info(datafromService);
      $scope.products = datafromService.items;
    })
    .catch(function (err) {
      console.error(err);
    })
  };
    // $scope.getProducts();


});
