'use strict';

snsBoard.factory('snsListStorage', ['localStorageService', function(storage){
  return {
    get : function(){
      return storage.get();
    },
    put : function(datas){
      storage.set(datas);
    },
    remove : function(){
      
    }
  }
}]);
