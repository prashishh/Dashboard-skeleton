'use strict';

dashboardApp.controller('NavigController',
  function NavigController($scope, users, credentials) {

   // $scope.hostname = credentials.getHostname();

    $scope.$watch(credentials.getHostname, function (newValue, oldValue, scope) {
        if (newValue && newValue !== oldValue) {
            $scope.hostname = newValue;
        }
    });

    //$scope.$watch('credentials.getHostname()', function() {
     // $scope.hostname = credentials.getHostname();
    //});

   // console.log($scope.host);
    //user.username = 'test';
    //$scope.test = user.usernames;
  });
