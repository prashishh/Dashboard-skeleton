'use strict';

dashboardApp.controller('SetupController',
  function SetupController($scope, temp, credentials, $http) {

    $scope.done = function() {
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
            var tables = data.split(',');
            temp.setTables(tables);
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


  });
