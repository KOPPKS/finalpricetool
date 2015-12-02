app.controller('WlmtCtrl', function ($scope, WmtService) {
  $scope.products = [];

  scope.findProduct = function () {
    WmtService.getProducts($scope.query)
    .success(function (response) {
      var randomNum = Math.floor(Math.random() * response.data.length);
      console.log(response);


      $scope.products = unshift(response.data[randomNum].images.downsized_large.url);
      $scope.query = "";
    })
    .error(function (err) {
      console.error(err);
    });
  };
});