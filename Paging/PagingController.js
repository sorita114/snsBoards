(function(window, snsBoard){
  'use strict';
  
  snsBoard.controller('PagingCtrl', ['$scope, PagingService', function($scop, pagingService){
    $scope.pageChanged = function() {
      console.log('Page changed to: ' + $scope.currentPage);
    };
  }]);
})(window, snsBoard);
