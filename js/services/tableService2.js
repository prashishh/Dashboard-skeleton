'use strict';

dashboardApp.factory('tableService2', function($http) {
  var myService = {};

  var tables = new Array();
      tables.push('username');
      tables.push('role');
      tables.push('datereg');
      tables.push('status');

  var postData = {
      'hostname' : '1',
      'username' : '2',
      'password' : 'scope.password',
      'port' : 'scope.port',
      'database' : 'scope.selectedItem',
      'tables' : tables
    };

  myService.start = function() {


    myService.asyncData = $http({ method: "POST", url: '/api/tabledata2', data: postData
      }).then(function (response) {
        myService.data = response.data;
      //  console.log(myService.data);

        return myService.data;
      }, function(response) {
        myService.error = 'Can\'t get data';
        myService.data = 'Error: ' + response.data;
        return myService.data;
      });
  };

  return myService;
 
});



