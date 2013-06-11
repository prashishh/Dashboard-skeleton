'use strict';

dashboardApp.controller('SetupController',
  function SetupController($scope, databaseTableService, credentials, $http) {
    $scope.data = new Array();
    $scope.barchartclicked = false;

    /*
      {
        'first': 'A',
        'second' : '30'
      },
      {
        'first': 'B',
        'second' : '10'
      },
      {
        'first': 'K',
        'second' : '20'
      }
    ];
    */

    $scope.getDatabases = function() {

      credentials.setInitTrigger();
        var postData = {
          'hostname' : $scope.hostname,
          'username' : $scope.username,
          'password' : $scope.password,
          'port' : $scope.port
        };

        $http({
            method: "POST",
            url: '/api/showDB',
            data: postData
          }).
          success(function(data, status, headers, config) {
            var db = data.split(',');
            databaseTableService.setDatabases(db);
          }).
          error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          });
    }

    $scope.showBarChart = function() {

      $scope.barchartclicked = true;
        var postData = {
          'databasename' : 'nodesample',
          'tablename' : 'bar',
          'label' : 'Name',
          'quantity' : 'Value'
        };

        $http({
            method: "POST",
            url: '/api/barchart',
            data: postData
          }).
          success(function(data, status, headers, config) {
            console.log(data);
          }).
          error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          });
    }


    $scope.$watch(credentials.getInitTrigger, function (newValue, oldValue, scope) {
      if (newValue && newValue !== oldValue) {
        credentials.setNewValues($scope.hostname, $scope.username, $scope.password, $scope.port);
          credentials.setFinalTrigger();
      }
    });

    $scope.$watch('selecteddb', function (newValue, oldValue, scope) {
      if (newValue && newValue !== oldValue) {
          $scope.selecteddb = newValue;
      }
    });

    $scope.$watch('yoyo', function (newValue, oldValue, scope) {
            
      if(typeof $scope.yoyo != 'undefined') {

        $scope.data.push({'first': 'A','second' : '30'});
        $scope.data.push({'first': 'B','second' : '40'});
        console.log($scope.data);

        var tables = $scope.yoyo.split(';');
        databaseTableService.removeTables();
        for( var i = 0; i < tables.length; i++) {
          var postData = {
            'hostname' : scope.hostname,
            'username' : scope.username,
            'password' : scope.password,
            'port' : scope.port,
            'database' : scope.selectedItem,
            'table' : tables[i]
            };

          $http({
            method: "POST",
            url: '/api/getColumns',
            data: postData
          }).
          success(function(data, status, headers, config) {
           // console.log(data);
            databaseTableService.setTables(data);
          }).
          error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          });
      }
    } 

    });

  });






