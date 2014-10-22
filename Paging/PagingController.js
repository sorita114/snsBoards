paging.controller('PagingCtrl', ['$scope','PagingService', function($scope, pagingService){
  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };
}]);
