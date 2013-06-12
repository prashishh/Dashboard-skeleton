'use strict';

dashboardApp.controller('DashboardController',
  function DashboardController($scope, $location, tableService, tableService2, pieService) {
  	$scope.table_data = [];
  	$scope.table_data2 = [];

  	$scope.pie_data = [];

	var timer = setInterval(function(){
		pieService.start();
		tableService.start();
		tableService2.start();

		$scope.table_data = tableService.asyncData;
		$scope.pie_data = pieService.asyncData;
		$scope.table_data2 = tableService2.asyncData;
		$scope.$apply();
	}, 6000); 

/*
	var postData = {
	  'hostname' : $scope.hostname,
	  'username' : $scope.username,
	  'password' : $scope.password,
	  'port' : $scope.port
	};
*/

/*
	var tables = new Array();
		tables.push('username');
		tables.push('role');

	var postData = {
	    'hostname' : '1',
	    'username' : '2',
	    'password' : 'scope.password',
	    'port' : 'scope.port',
	    'database' : 'scope.selectedItem',
	    'tables' : tables
    };


		$http({
		    method: "POST",
		    url: '/api/tabledata',
		    data: postData
		  }).
		  success(function(data, status, headers, config) {
		  	$scope.table_data = data;
		  }).
		  error(function(data, status, headers, config) {

		  });

	*/
//	var timer = setInterval(function(){
//		tableService.start();
//		tableService2.start();

//		$scope.table_data = tableService.asyncData;
//		$scope.table_data2 = tableService2.asyncData;
//		$scope.$apply();
	//	console.log($scope.table_data);
//	}, 6000);  

  });
