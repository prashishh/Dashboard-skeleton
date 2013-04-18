

var app = angular.module('plunker', ['ui']);

app.factory('myService', ['$timeout' ,function($timeout) {
    var data = [],
    
    var myService = {};
    myService.async = function() {
        data.length= 0;
        for(var i = 0; i < 10; i++) {
            data.push({val: Math.random()});
        }

        $timeout(myService.async, 1000);

        myService.data = function() { return data; };
        
    }

    return myService;
}]);

app.controller('MainCtrl', function( myService,$scope) {
    myService.async();
    $scope.data = myService.data();
});

