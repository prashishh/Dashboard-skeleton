'use strict';

dashboardApp.controller('DashboardController',
  function DashboardController($scope, databaseTableService, $location) {

    if(!databaseTableService.username)
      $location.url('/setup');

  });
