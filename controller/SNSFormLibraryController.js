(function(window, snsBoard){
  'use strict';
  
  snsBoard
    .controller('SNSFormLibraryController', function($scope, snsListStorage){
      $scope.form = {};
      
      $scope.submit = function(data){
        $scope.form = angular.copy(data);
        $scope.form.writeName = 'hyyoon';
        $scope.form.writeImage = 'yellow';
        $scope.form.writeDate = getTime();
        snsListStorage.put($scope.form);
        $scope.form = {};
      };
    })
    .directive('snsForm', function(){
      return {
        restrict : 'E',
        templateUrl : './directive/form.html'
      };
    });
    //polyfill
    function getTime(){
      if(!Date.now){
        Date.now = function now(){
          return new Date().getTime();
        };
      } else {
        return Date.now();
      }
    }
})(window, snsBoard);
