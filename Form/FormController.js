(function(window, snsBoard){
  'use strict';
  
  snsBoard.controller('FormCtrl', ['$scope, formService' , function($scope, formService){
    $scope.form = {};
    
    $scope.submit = function(data){
      $scope.form = angular.copy(data);
      $scope.form.writeName = 'hyyoon';
      $scope.form.writeImage = 'yellow';
      $scope.form.writeDate = getTime();
      snsListStorage.put($scope.form);
      $scope.form = {};
    };
    
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
    
  }]);
})(window, snsBoard);
