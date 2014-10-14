(function(window, snsBoard){
  'use strict';
  
  snsBoard.factory('snsListStorage', ['Lists', function(storage){
    return {
      get : function(){
        //return storage.get();
        return storage;
      },
      put : function(datas){
        //storage.set(datas);
        storage.push(datas);
      },
      remove : function(){
        
      }
    };
  }]);
})(window, snsBoard);
