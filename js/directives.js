// directives.js
'use strict';

angular.module('plunker')
.directive('barDirective', function () {
  return {
    restrict : 'E',
    scope : {
      data: '=data'
    },
    template: '<div ng-repeat="li in data">{{li.val}} </div>',
    replace: true
  };
});
