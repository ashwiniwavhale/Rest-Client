var app = angular.module('myApp', ['anguFixedHeaderTable']);

app.controller('appCtrl', function($scope, $http) {
	
	$scope.flag = false;
	
	$scope.all = function() {
    	$http.get("http://localhost:8080/RestServer/Gso")
    	.success(function(response) {$scope.gso=response.gso;
    
    	});
    	$scope.flag = false;
    	
	};
	
	
	
	
	$scope.reset = function() {
	    $scope.gso=null;
	    $scope.flag = false;
	};
	
	

	
	$scope.exportXlsx = function () {
//        alasql('SELECT * INTO XLSX("gso.xlsx",{headers:true}) FROM ?',[ filterdItems]);
        alasql('SELECT * INTO XLSX("filter.xlsx",{headers:true}) FROM  filterdItems');
    };
    
    $scope.exportCsv = function () {
        alasql('SELECT * INTO CSV("gso.csv",{headers:true}) FROM ?',[filterdItems]);
    };
    
    $scope.exportTxt = function () {
        alasql('SELECT * INTO TXT("gso.txt",{headers:true}) FROM ?',[ filterdItems]);
    };
    	
});










