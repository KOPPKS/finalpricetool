angular.module('ModOne')
.controller('FoodCtrl', function ($scope, FoodService) {

  $scope.findProducts = function () {
    FoodService.getProducts($scope.query)
    .then(function (datafromService) {
      console.info(datafromService);
      console.log(datafromService.ArrayOfProduct_Commercial.Product_Commercial[0]);
      $scope.products = datafromService.ArrayOfProduct_Commercial.Product_Commercial;
    })
  };
    // $scope.getProducts();


});