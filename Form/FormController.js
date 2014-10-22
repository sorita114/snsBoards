form.controller('FormCtrl', ['$scope','FormService', function($scope, formService){
  var userInfo = $scope.userInfo = formService.getUserInfo();
  $scope.submit = function(data){
    $scope.form = angular.copy(data);
    $scope.form.writeDate = getTime();
    $scope.form.writeName = userInfo.name;
    $scope.form.writeImage = userInfo.profileImage;
    formService.put($scope.form);
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
