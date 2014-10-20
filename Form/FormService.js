(function(window, snsBoard){
  'use strict';
  
  snsBoard.factory('formService', function(){
    var form = [];
    
    return {
      put : function(data){
        form.push(data);
        //TODO push lists and reset lists
      },
      get : function(index){
        if(index){
          //TODO return all lists;
        } else {
          //TODO get data for all lists;
        }
      }
    };
  });
  
})(window, snsBoard);
