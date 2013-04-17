






/*
// directives.js
angular.module('demo.directives', [])
    .directive('bar', function() {
        return {
            restrict: 'E',
            scope: {
              model: '='
            },
            link: function(scope, element, attrs, ctrl) {
                element.text("Hello World!");
               // var modelArray = scope.$eval(attrs.val[0]);
              // attrs.model = ['1', '2'];
               console.log(scope.model.values[1]);
             // console.log(scope.);
            }
        };
    });


angular.module('demo.directives', [])
  .directive('bar', function() {
    return {
      restrict: 'A',
      scope: {
        text: "@myText",
        twoWayBind: "=myTwoWayBind",
        oneWayBind: "$myOneWayBind"
      },
      link: function(scope, element, attrs, ctrl) {
          console.log(scope.text);
      }
    };
  });

  */

