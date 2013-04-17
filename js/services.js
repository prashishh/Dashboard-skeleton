/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.2')
  .service('getData',['$timeout', function($timeout) 
  {

    var a = [];

    _fromJSON = function () {
      a.push('abc');
      $timeout(_fromJSON, 1000); 
    }

    return { 

      start: function () {
        console.log("wwwwwwwww");
        _fromJSON();
        return a; 
      }
    }
}])
  .service('getData2',['$timeout', function($timeout) 
  {

    var a = [];

    _fromJSON1 = function () {
      a.push('bcd');
      $timeout(_fromJSON1, 1000); 
    }

    return { 

      start: function () {
        console.log("wwww2");
        _fromJSON1();
        return a; 
      }
    }
  }
]);
