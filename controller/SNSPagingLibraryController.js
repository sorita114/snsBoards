'use strict';

snsBoard.controller('SNSPagingLibraryController', function($scope, snsListStorage){
  $scope.totalItems = snsListStorage.get().length;
  $scope.currentPage = 1;
  $scope.maxSize = 5;
});
