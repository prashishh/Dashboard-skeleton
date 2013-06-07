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


dashboardApp.directive('navigSection', function(temp, $compile){
  return {
    restrict: 'E',
    replace: true,
    link: function(scope, element, attrs) {

      /* Water spilled on my mac, so I'm using my mom's laptop to write this code :( */
      scope.$watch(temp.isTablesEmpty, function (newValue, oldValue) {
        if ( temp.isTablesEmpty != 0 ) {
          var table = temp.getTables();
          var elem = "";

          for ( var i = 0; i < table.length; i++ ) {
            var temp_tbl = table[i].split(';');
            var table_name = temp_tbl[0];
            var col_name = new Array();

            for ( var k = 1; k < temp_tbl.length; k++ )
              col_name.push(temp_tbl[k]);
            
            elem += '<section class="section">' +
                        '<p class="title"> <a href="#">' + table_name + '</a></p>' +
                        '<div class="content">' +
                          '<ul class="side-navig">';

            for ( var k = 0; k < col_name.length; k++ )
              elem += '<li ng-click=selectedVals("' + table_name + '","' + col_name[k] + '");>'+ col_name[k] +'</li>';

              elem += '</ul>' +
                        '</div>' +
                      '</section>';
          }
            element.html(elem); 
            $compile(element.contents())(scope);


        }
      });
    }
  }
});

