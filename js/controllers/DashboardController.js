'use strict';

dashboardApp.controller('DashboardController',
  function DashboardController($scope, temp, $location) {

    if(!temp.username)
      $location.url('/setup');

  });
