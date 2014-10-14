(function(window, snsBoard){
  'use strict';
  
  snsBoard
    .controller('SNSPagingLibraryController', function($scope, snsListStorage){
      $scope.totalItems = snsListStorage.get();
      $scope.currentPage = 1;
      $scope.maxSize = 5;
      
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
