angular.module('ModOne')

.service('WmtService', function ($http) {
  this.getProducts = function (query) {
    var uri = 'http://api.walmartlabs.com/v1/search?query=' + query + '&format=json&&apiKey=5a2mmvq5mdfwxxm84sqeu4t2';
    return $http.get(uri);
  };
});



//http://api.walmartlabs.com/v1/search?query=table&format=json&apiKey=5a2mmvq5mdfwxxm84sqeu4t2