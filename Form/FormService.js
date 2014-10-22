form.service('FormService', ['Boards','UserInfo', function(boards, userInfo){
  this.getUserInfo = function(){
    return userInfo;
  };
  this.put = function(data){
    //TODO push lists and reset lists
    data.index = boards.length === 0 ? 0 : boards.length;
    boards.push(data);
  };
  this.get = function(index){
    if(index){
      //TODO return all lists;
    } else {
      //TODO get data for all lists;
    }
  };
}]);
