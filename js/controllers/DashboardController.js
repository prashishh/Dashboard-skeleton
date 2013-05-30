'use strict';

dashboardApp.controller('DashboardController',
  function DashboardController($scope, users, $location) {

    if(!users.username)
      $location.url('/setup');

  });
