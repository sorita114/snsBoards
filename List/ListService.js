list.service('ListService',['Boards', function(boards){
  this.get = function(){
    return boards;
  };
}]);
