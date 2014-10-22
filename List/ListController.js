list.controller('ListCtrl',['$scope','ListService', function($scope, listService){
  $scope.datas = listService.get();
}]);
