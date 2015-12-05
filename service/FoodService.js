angular.module('ModOne')

.service('FoodService', function ($http) {
  this.getProducts = function (query) {
    var xxy = 'http://www.SupermarketAPI.com/api.asmx/COMMERCIAL_SearchByProductName?APIKEY=ff3402f77&ItemName=' + query;
    return $http.get(xxy).then(function(response){
    	var x2js = new X2JS();
    	var json = x2js.xml_str2json(response.data);
    	return json;
    });
  };
});

//http://www.SupermarketAPI.com/api.asmx/COMMERCIAL_SearchByProductName?APIKEY=ff3402f77&ItemName=Parsley

//&callback=JSON_CALLBACK';
//$http.jsonp(xxy)