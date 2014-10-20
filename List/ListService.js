(function(window, snsBoard){
  'use strict';
  
  snsBoard.factory('ListService', function(){
    var lists = [];
    return {
      put : function(data){
        //TODO push lists
      },
      get : function(index){
        if(index){
          //TODO return lists[index]
        } else {
          //TODO retrun all lists
        }
      }
    };
  });
})(window, snsBoard);
