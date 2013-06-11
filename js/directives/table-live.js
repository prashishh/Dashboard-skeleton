'use strict';

dashboardApp.directive('tableLive', function(){
  return {
    restrict: 'E',
    scope: {
      data: '=data',
      datatype: '&'
    },
    replace: true,
    link: function($scope, elem, attr) {

        $scope.$watch('data', function (newValue, oldValue) {
        if (newValue && newValue !== oldValue) {
            var htmlelem = '<div class="row-fluid sortable">' +
                              '<div class="box span6">' +
                                  '<div class="box-header well" data-original-title>' +
                                    '<h2>Striped Table</h2>' +
                                    '<div class="box-icon">' +
                                      '<a href="#" class="btn btn-setting btn-round"><i class="icon-cog"></i></a>' +
                                      '<a href="#" class="btn btn-minimize btn-round"><i class="icon-chevron-up"></i></a>' +
                                      '<a href="#" class="btn btn-close btn-round"><i class="icon-remove"></i></a>' +
                                    '</div>' +
                                  '</div>' +
                                  '<div class="box-content">' +
                                    '<table class="table table-striped">' +
                                        '<thead>' +
                                        '<tr>' +
                                            '<th>Username</th>' +
                                            '<th>Date registered</th>' +
                                            '<th>Role</th>' +
                                            '<th>Status</th>' +
                                          '</tr>' +
                                        '</thead>' +
                                        '<tbody>';
                                  for(var i = 0; i < $scope.data.length; i++) {
                               htmlelem += '<tr>' +
                                          '<td>' + $scope.data[i].username + '</td>' +
                                          '<td>' + $scope.data[i].datereg + '</td>' +
                                          '<td>' + $scope.data[i].role + '</td>' +
                                          '<td class="center">' + 
                                                '<span class="label label-success">' + $scope.data[i].status + '</span>' +
                                          '</td>' +
                                        '</tr>';
                                      }
                                htmlelem +=  '</tbody>' +
                                     '</table> '  +
                                  '</div>' +
                                '</div>' +
                              '</div>';
            elem.html(htmlelem); 
          }
      });
    }
  }
  
});
 