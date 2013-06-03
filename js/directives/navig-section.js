'use strict';

dashboardApp.directive('dropdown', function($http){
  return {
    restrict: 'E',
    link: function(scope, elem, attr, ctrl) {
       scope.$watch('selectedItem', function (newValue, oldValue, scope) {
      if (newValue && newValue !== oldValue) {    
        var postData = {
          'hostname' : scope.hostname,
          'username' : scope.username,
          'password' : scope.password,
          'port' : scope.port,
          'database' : scope.selectedItem 
        };

      $http({
        method: "POST",
        url: '/api/showTables',
        data: postData
      }).
      success(function(data, status, headers, config) {
        scope.yoyo = data;
      }).
      error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      });
    }
    });
    },
    template: '<select ng-model="selectedItem" ng-options="a as a for a in databases">' +
            '<option style="display: none" value="">-- Select Db --</option>' +
          '</select>'
    }
});

