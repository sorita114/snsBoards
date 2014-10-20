(function(window, snsBoard){
  'use strict';
  
  snsBoard
    .controller('SNSListLibraryController', function($scope, snsListStorage){
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
      console.log(lists);
      $scope.pages = lists;
    })
    .directive('snsList', function(){
      return{
        restrict : 'E',
        templateUrl : './directive/list.html'
      };
    });
})(window, snsBoard);
