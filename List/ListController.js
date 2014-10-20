(function(window, snsBoard){
  'use strict';
  
  snsBoard.controller('ListCtrl',['$scope, ListService', function($scope, ListService){
    var datas = $scope.datas = snsListStorage.get();
    var lists = [];
    var maxsize = 2;
    var start = 0;
    var end = maxsize;
    while(end <= datas.length){
      var i = 1;
      lists.push({
        index : i,
        items : datas.slice(start, end)
      });
      start = start + maxsize;
      end = end + maxsize;
      i++;
    }
    $scope.pages = lists;
  }]);
})(window, snsBoard);
