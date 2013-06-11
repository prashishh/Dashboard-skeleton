'use strict';

dashboardApp.controller('DashboardController',
  function DashboardController($scope, $location, $http, tableService) {
  	
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
	tableService.start();
	$scope.table_data = tableService.asyncData;
	console.log($scope.table_data);

	$scope.$watch('table_data', function (newValue, oldValue) {
    	if (newValue && newValue !== oldValue)
      		console.log(newValue);
    });

  });
