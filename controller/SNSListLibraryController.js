(function(window, snsBoard){
  'use strict';
  
  snsBoard
    .controller('SNSListLibraryController', function($scope, snsListStorage){
      //$scope.datas = snsListStorage.get();
      //example
      $scope.datas = [{
        writeName : 'hyyoon',
        writeImage : 'blue',
        writeDate : '2014-10-13 10:46:00',
        comment : 'test'
      }];
    })
    .directive('snsList', function(){
      return{
        restrict : 'E',
        templateUrl : './directive/list.html'
      };
    });
})(window, snsBoard);
