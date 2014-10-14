(function(window, snsBoard){
  'use strict';
  
  snsBoard
    .controller('SNSPagingLibraryController', function($scope, snsListStorage){
      $scope.totalItems = snsListStorage.get() ? snsListStorage.get().length : 0;
      $scope.currentPage = 1;
      $scope.maxSize = 5;
      
      $scope.pageChanged = function() {
        console.log('Page changed to: ' + $scope.currentPage);
      };
    })
    .directive('snsPagenation', function(){
      return{
        restrict : 'E',
        templateUrl : './directive/pagenation.html'
      };
    });
})(window, snsBoard);
