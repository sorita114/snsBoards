(function(window, snsBoard){
  'use strict';
  
  snsBoard
    .controller('SNSPagingLibraryController', function($scope, snsListStorage){
      $scope.pageChanged = function() {
        console.log('Page changed to: ' + $scope.currentPage);
      };
    })
    .directive('snsPagination', function(){
      return{
        restrict : 'E',
        templateUrl : './directive/pagination.html'
      };
    });
})(window, snsBoard);
