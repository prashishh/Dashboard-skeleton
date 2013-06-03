'use strict';

dashboardApp.controller('SetupController',
  function SetupController($scope, temp, credentials, $http) {
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
            temp.setDatabases(db);
          }).
          error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          });
    }

    $scope.getTables = function() {
        
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
      
      console.log($scope.yoyo);
      
      if(typeof $scope.yoyo != 'undefined') {
        var tables = $scope.yoyo.split(';');

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
            console.log(data);
          }).
          error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          });
      }
    } 

    });

  });






