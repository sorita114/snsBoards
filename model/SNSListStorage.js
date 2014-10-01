'use strict';

snsBoard.factory('snsListStorage', ['localStorageService', function(storage){
  return {
    get : function(){
      return storage.get();
    },
    set : function(datas){
      storage.set(datas);
    }
  }
}]);
