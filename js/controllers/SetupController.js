'use strict';

dashboardApp.controller('SetupController',
  function SetupController($scope, users, credentials) {
    
    credentials.setHostname('eh');
    $scope.hostname = credentials.getHostname();

    //user.username = 'test';
    //$scope.test = user.usernames;
  });
