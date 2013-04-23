

var app = angular.module('plunker', ['ui']);

app.factory('myService', ['$timeout' ,function($timeout) {
var data = [],
doubleData = [];

var myService = {};
myService.async = function() {
data.length= 0;
for(var i = 0; i < 10; i++){
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
/*
var module = angular.module('arrayTest', []);

module.service('myService', function ($timeout) {
        var data = [];

        return {
            data: function(){
                return data;
            },
            populateDataRetainingReference: function () {
                $timeout(function(){
                    data.length = 0;
                    for(var i = 0; i < 15; i++){
                        data.push({RandomNumber: Math.random()});                        
                    }
                }, 100);
            },
            populateDataBreakingReference: function(){
                $timeout(function(){
                    var newArray = [];
                    for(var i = 0; i < 15; i++){
                        newArray.push({RandomNumber: Math.random()});                        
                    }

                    data = newArray;
                }, 100);
            }
        }
    });

function ArrayController($scope, myService){
    $scope.data = myService.data();

    $scope.retainReference = function(){
        myService.populateDataRetainingReference();
    }

    $scope.breakReference = function(){
        myService.populateDataBreakingReference();
    }
}

*/
/*
angular.module('demo', [
    'demo.controllers',
    'demo.directives'   // new module 
]);



angular.module("myApp", []).directive("myDirective", function () {
    return {
        restrict: "A",
        scope: {
            text: "@myText",
            twoWayBind: "=myTwoWayBind",
            oneWayBind: "&myOneWayBind"
        },
        link: function(scope, element, attrs, ctrl) {
          console.log(scope.foo);
      }
    };
}).controller("myController", function ($scope) {
    $scope.foo = {name: "Umur"};
    $scope.bar = "qwe";
});


*/
