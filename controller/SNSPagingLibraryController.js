'use strict';

snsBoard.controller('SNSPagingLibraryController', function($scope, snsListStorage){
  $scope.totalItems = snsListStorage.get().length;
  $scope.currentPage = 1;
  $scope.maxSize = 5;
  
  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };
});
