'use strict';

dashboardApp.directive('tableLive', function(){
  return {
    restrict: 'E',
    scope: {
      data: '=data',
      datatype: '&'
    },
    replace: true,
    template:'<p>Yo, {{data}}</p>',
    link: function($scope, elem, attr) {

         console.log($scope.data);
    }
  }
  
});


