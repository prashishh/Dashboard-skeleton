'use strict';

dashboardApp.factory('barService', function($http) {
  var myService = {};

  var tables = new Array();
      tables.push('variable');
      tables.push('value');

  var postData = {
      'hostname' : '1',
      'username' : '2',
      'password' : 'scope.password',
      'port' : 'scope.port',
      'database' : 'scope.selectedItem',
      'tables' : tables
    };

  myService.start = function() {


    myService.asyncData = $http({ method: "POST", url: '/api/bardata', data: postData
      }).then(function (response) {
        myService.data = response.data;
        var newObj = new Array();

        for(var i = 0; i < myService.data.length; i++) {
          newObj.push({ 'first':  String(myService.data[i].variable), 'second' :  + myService.data[i].value  });
        }
        console.log(newObj);

        return newObj;
      }, function(response) {
        myService.error = 'Can\'t get data';
        myService.data = 'Error: ' + response.data;
        return myService.data;
      });
  };

  return myService;
 
});



